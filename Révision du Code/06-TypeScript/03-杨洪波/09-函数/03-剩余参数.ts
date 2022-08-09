// 剩余参数(rest参数)
// 剩余参数是放在函数声明的时候所有的参数的最后

// ...args:string[] 剩余参数放在了一个字符串的数组中
function showMsg(str: string, ...args: string[]) {
  console.log(str); // a
  console.log(args); // b, c, d, e
}

showMsg('a', 'b', 'c', 'd', 'e');







