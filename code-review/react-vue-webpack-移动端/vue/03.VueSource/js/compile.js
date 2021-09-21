function Compile(el, vm) {
  this.$vm = vm;
  // 判断el是否是元素节点
  // 最终得到一个DOM元素（根元素）
  this.$el = this.isElementNode(el) ? el : document.querySelector(el);

  if (this.$el) {
    // 1. 将根元素的所有子元素添加到文档碎片节点中
    this.$fragment = this.node2Fragment(this.$el);
    // 2. 解析文档碎片节点中的所有模板语法
    this.init();
    // 3. 将解析后文档碎片节点添加到根元素中生效
    this.$el.appendChild(this.$fragment);
  }
}

Compile.prototype = {
  node2Fragment: function (el) {
    // 创建文档碎片节点
    var fragment = document.createDocumentFragment(),
      child;

    // 将原生节点拷贝到fragment
    while ((child = el.firstChild)) {
      fragment.appendChild(child);
    }

    return fragment;
  },

  init: function () {
    this.compileElement(this.$fragment);
  },

  compileElement: function (el) {
    // 提取所有子节点
    var childNodes = el.childNodes,
      me = this;

    // 将其转换成真数组
    // 遍历得到每一个子节点
    [].slice.call(childNodes).forEach(function (node) {
      // 提取子节点的文本内容
      var text = node.textContent;
      // 定义正则：用来判断是否存在插值语法
      var reg = /\{\{(.*)\}\}/;

      // 判断当前子节点是否是元素节点
      if (me.isElementNode(node)) {
        // 如果是，解析元素节点的指令语法
        // 元素节点才有指令语法
        me.compile(node);

        // 判断当前子节点是否是文本节点
        // 并且是否包含插值语法
      } else if (me.isTextNode(node) && reg.test(text)) {
        // 如果都是，解析文本节点的插值语法

        // 过程：获取插值语法中表达式的值, 从原data数据中读取得到表达式的值
        // 设置当前节点.textContent = 表达式的值
        // 此时内容由之前的插值语法替换成表达式的值
        me.compileText(node, RegExp.$1);
      }

      // 判断当前节点是否还有子节点
      if (node.childNodes && node.childNodes.length) {
        // 如果有子节点，要对子节点进行递归编译其中的模板语法
        // 这一步能够确保所有节点都能被解析
        me.compileElement(node);
      }
    });
  },

  compile: function (node) {
    // 获取当前元素的所有属性节点
    var nodeAttrs = node.attributes,
      me = this;

    // 对所有属性节点进行遍历
    [].slice.call(nodeAttrs).forEach(function (attr) {
      // 获取属性节点的属性名
      var attrName = attr.name;
      // 判断属性名是否是指令属性（v-）
      if (me.isDirective(attrName)) {
        // 获取属性节点的属性值
        var exp = attr.value;
        // 对属性名进行截取，得到 on:click text html class
        var dir = attrName.substring(2);
        // 事件指令
        if (me.isEventDirective(dir)) {
          // 给当前元素绑定事件和回调函数
          // 回调函数通过bind方法改变this指向为vm
          compileUtil.eventHandler(node, me.$vm, exp, dir);
          // 普通指令
        } else {
          // 不同指令调用不同方法去更新DOM元素
          // 比如：v-text指令 --> textUpdater方法 --> 更新元素textContent属性
          // 比如：v-html指令 --> htmlUpdater方法 --> 更新元素innerHTML属性
          compileUtil[dir] && compileUtil[dir](node, me.$vm, exp);
        }

        // 移除属性节点
        node.removeAttribute(attrName);
      }
    });
  },

  compileText: function (node, exp) {
    compileUtil.text(node, this.$vm, exp);
  },

  isDirective: function (attr) {
    return attr.indexOf("v-") == 0;
  },

  isEventDirective: function (dir) {
    return dir.indexOf("on") === 0;
  },

  isElementNode: function (node) {
    return node.nodeType == 1;
  },

  isTextNode: function (node) {
    return node.nodeType == 3;
  },
};

// 指令处理集合
var compileUtil = {
  text: function (node, vm, exp) {
    this.bind(node, vm, exp, "text");
  },

  html: function (node, vm, exp) {
    this.bind(node, vm, exp, "html");
  },

  model: function (node, vm, exp) {
    this.bind(node, vm, exp, "model");

    var me = this,
      val = this._getVMVal(vm, exp);
    node.addEventListener("input", function (e) {
      var newValue = e.target.value;
      if (val === newValue) {
        return;
      }

      me._setVMVal(vm, exp, newValue);
      val = newValue;
    });
  },

  class: function (node, vm, exp) {
    this.bind(node, vm, exp, "class");
  },

  bind: function (node, vm, exp, dir) {
    var updaterFn = updater[dir + "Updater"];

    // 更新元素的值（textContent、innerHTML、value等）
    // 更新用户界面的方法
    updaterFn && updaterFn(node, this._getVMVal(vm, exp));

    // 插值语法
    // 指令语法：除了事件指令以外
    // 第三个参数保存了更新用户界面的方法
    new Watcher(vm, exp, function (value, oldValue) {
      updaterFn && updaterFn(node, value, oldValue);
    });
  },

  // 事件处理
  eventHandler: function (node, vm, exp, dir) {
    var eventType = dir.split(":")[1],
      fn = vm.$options.methods && vm.$options.methods[exp];

    if (eventType && fn) {
      node.addEventListener(eventType, fn.bind(vm), false);
    }
  },

  // 从data中获取表达式的值
  _getVMVal: function (vm, exp) {
    var val = vm._data;
    exp = exp.split(".");
    exp.forEach(function (k) {
      val = val[k];
    });
    return val;
  },

  _setVMVal: function (vm, exp, value) {
    var val = vm._data;
    exp = exp.split(".");
    exp.forEach(function (k, i) {
      // 非最后一个key，更新val的值
      if (i < exp.length - 1) {
        val = val[k];
      } else {
        val[k] = value;
      }
    });
  },
};

var updater = {
  textUpdater: function (node, value) {
    node.textContent = typeof value == "undefined" ? "" : value;
  },

  htmlUpdater: function (node, value) {
    node.innerHTML = typeof value == "undefined" ? "" : value;
  },

  classUpdater: function (node, value, oldValue) {
    var className = node.className;
    className = className.replace(oldValue, "").replace(/\s$/, "");

    var space = className && String(value) ? " " : "";

    node.className = className + space + value;
  },

  modelUpdater: function (node, value, oldValue) {
    node.value = typeof value == "undefined" ? "" : value;
  },
};
