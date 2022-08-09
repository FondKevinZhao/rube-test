// Static Typing 静态类型，一旦定义就永远不能再修改
let count: number = 1;
count = 5; // 这样可以
// count = 'jspang'; // 这样不可以
console.log(count);



interface xiaoJieJie {
  uname: string,
  age: number
}

const xiaohong:xiaoJieJie = {
  uname: '小红',
  age: 18
}
console.log(xiaohong);
xiaohong.uname = 'haha';
console.log(xiaohong);