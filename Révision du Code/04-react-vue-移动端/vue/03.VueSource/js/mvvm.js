function MVVM(options) {
  // options 配置对象
  this.$options = options;
  // 将data数据赋值给data和this._data
  // 这个叫做原data数据
  var data = (this._data = this.$options.data);
  var me = this;

  // 1. 数据代理：将data中数据代理到this（实例对象）上，可以通过this直接访问
  // 实现 vm.xxx -> vm._data.xxx

  // 提取data所有属性，遍历对其中每一个属性进行数据代理
  Object.keys(data).forEach(function (key) {
    me._proxy(key);
  });

  // 2. 数据劫持: 对data原数据进行重新定义，将其定义成响应式数据
  observe(data, this);

  // 3. 模板解析: 解析模板页面中模板语法（插值语法和指令语法）
  this.$compile = new Compile(options.el || document.body, this);
}

MVVM.prototype = {
  $watch: function (key, cb, options) {
    new Watcher(this, key, cb);
  },

  // 数据代理
  _proxy: function (key) {
    var me = this;
    // 通过Object.defineProperty给this上添加data中的属性
    // 当你从this上读取属性时，实际读取原data数据属性的值
    // 当你从this上设置属性时，实际设置原data数据属性的值
    Object.defineProperty(me, key, {
      configurable: false,
      enumerable: true,
      get: function proxyGetter() {
        return me._data[key];
      },
      set: function proxySetter(newVal) {
        me._data[key] = newVal;
      },
    });
  },
};
