/**
 * Created by luodianlei on 2018/4/27.
 */
//由于我们封装的是jquery插件,我们对应的方法需要使用jquery对象调用
// 所以应该把方法添加到jquery的原型上
// $.fn === $.prototype
$.fn.accordion = function (obj) {
  var $lis = this.find('li')
  $lis.each(function (index, element) {
    var str = '<img src = "' + obj.colors[index] + '"/>'
    $(element).html(str)
  })
  // width for each img
  var avgWidth = this.width() / $lis.length
  // hover width effects
  var minWidth = obj.minWidth || 100
  // hover maxWidth
  var maxWidth = this.width() - minWidth * ($lis.length - 1)
  // img width and height
  this.find('img').css({width: avgWidth, height: this.height()})
  $lis.on('mouseenter', function () {
    $(this).find('img').stop(true).animate({width: maxWidth}).end().siblings().find('img').stop(true).animate({width: minWidth})
  })
  this.on('mouseleave', function () {
    $lis.find('img').stop(true).animate({width: avgWidth})
  })
}