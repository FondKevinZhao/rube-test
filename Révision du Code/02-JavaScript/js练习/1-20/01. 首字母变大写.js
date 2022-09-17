// xiaoshuo-ss-sfff-fe 变为驼峰 xiaoshuoSsSfffFe
function getCamelCase(str) {
  let arr = str.split('-') // 把字符串转数组
  // console.log(arr) // [ 'xiaoshuo', 'ss', 'sfff', 'fe' ]
  return arr.map((item, index) => {
    if(index === 0) {
      // return arr[0]
      return item
    } else {
      return item.charAt(0).toUpperCase() + item.slice(1)
    }
  }).join('')
}
console.log(getCamelCase('xiaoshuo-ss-sfff-fe'))