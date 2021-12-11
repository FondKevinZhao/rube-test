// vue 插件开发
// 官方解释：Vue.js 的插件应该暴露一个 install 方法。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象：
(function(w) {
  // 一个插件最终是一个对象
  let MyPlugin = {}
  // 一个插件必须要有一个 install 方法，这是 vue 当中规定的
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或 property
    Vue.myGlobalMethod = function () {
      // 逻辑...
      console.log('全局方法被调用');
    }
  
    // 2. 添加全局资源
    Vue.directive('upper', function(el,bindings){
      /* bind (el, binding, vnode, oldVnode) {
        // 逻辑...
      } */
      el.textContent = bindings.value.toUpperCase();
    })
  
    // 3. 注入组件选项
    Vue.mixin({
      created: function () {
        // 逻辑...
      }
    })
  
    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
      // 逻辑...
      console.log('实例方法被调用')
    }
  }
  // 将插件挂载到 window 身上，其实就是暴露出去
  w.MyPlugin = MyPlugin
})(window) // 自调用的时候，传入一个 window 