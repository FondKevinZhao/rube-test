// object 类型
// 定义一个函数，参数是object类型，返回值也是object类型
function getObj(obj: object): object {
  console.log(obj);
  return {
    name: '卡卡西',
    age: 27,
  }
}
console.log(getObj({ name: '佐助', age: '男' }));