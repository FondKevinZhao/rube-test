function Observer(data) {
  this.data = data;
  this.walk(data);
}

Observer.prototype = {
  walk: function (data) {
    var me = this;
    // 遍历data中所有数据
    Object.keys(data).forEach(function (key) {
      me.convert(key, data[key]);
      // 相当于下面写法：
      // 将data中所有属性定义成响应式
      // me.defineReactive(data, key, data[key]);
    });
  },
  convert: function (key, val) {
    this.defineReactive(this.data, key, val);
  },
  // 定义成响应式的方法
  defineReactive: function (data, key, val) {
    // 所有data属性都有一个自己的dep
    // 内部通过id来区分dep
    var dep = new Dep();

    // 递归调用，让数据中数据也要变成响应式
    var childObj = observe(val);

    // 对data上的属性进行重新定义
    Object.defineProperty(data, key, {
      enumerable: true, // 可枚举
      configurable: false, // 不能再define
      get: function () {
        // 为了建立响应式联系
        // dep会存储相应的watcher
        // watcher会存储相应的dep
        if (Dep.target) {
          dep.depend();
        }
        return val;
      },
      set: function (newVal) {
        if (newVal === val) {
          return;
        }
        val = newVal;
        // 将新值也要定义成响应式
        childObj = observe(newVal);
        // 通知watcher，调用cb方法，从而更新用户界面
        dep.notify();
      },
    });
  },
};

function observe(value, vm) {
  // 判断value是否是对象或数组，不是就不处理
  if (!value || typeof value !== "object") {
    return;
  }

  // 处理对象或数组
  return new Observer(value);
}

var uid = 0;

function Dep() {
  this.id = uid++;
  this.subs = [];
}

Dep.prototype = {
  addSub: function (sub) {
    this.subs.push(sub);
  },

  depend: function () {
    // Dep.target --> watcher
    // this --> dep
    // watcher.addDep(dep)
    Dep.target.addDep(this);
  },

  removeSub: function (sub) {
    var index = this.subs.indexOf(sub);
    if (index != -1) {
      this.subs.splice(index, 1);
    }
  },

  notify: function () {
    this.subs.forEach(function (sub) {
      // sub --> watcher
      sub.update();
    });
  },
};

Dep.target = null;
