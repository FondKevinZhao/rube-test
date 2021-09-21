/*
 * 流式文件读取：
 *   fs.createReadStream(path[, options])
 *       --path:要读取的文件路径+文件名+文件后缀
 *       --options：配置对象
 *           --flag：打开文件要进行的操作，默认值：'r'
 *                     'w' : 写入
 *                     'r' ：读取
 *                     'a' ：追加
 *            --mode ：文件的权限控制，默认值是0o666
 *                     0o111 : 文件可被执行的权限
 *                     0o222 ：文件被写入的权限
 *                     0o444 ：文件被读取的权限
 *            --encoding ：编码，默认是：'utf-8'
 *            --fd ：文件描述符（文件内部编码），默认值是null
 *            --autoClose ：自动关闭，当数据写入完毕后，自动关闭操作完的文件，默认值true
 *            --start：读取文件的起始位置，默认是0
 *            --end ：读取文件结束的位置，默认是highWaterMark
 *            --highWaterMark：每次读取数据的大小（水管的粗细），默认值 64（字节byte） * 1024
 * */

const fs = require('fs')
// 创建读取流
// const rs = fs.createReadStream('./hello.txt', {
//   highWaterMark: 4 * 1000 * 1024, //流式读取时,管子的粗细
// })
const rs = fs.createReadStream('./hello.txt', {
  start: 2, // 读取的起始位置(单位字节)
})

// 读取文件中的数据
// on 里面的传的是data,表示监听这个文件读取的过程,每次读到文件中的一部分信息,就调用一下后面的回调函数
rs.on('data', (data) => {
  console.log(data.toString())
})
