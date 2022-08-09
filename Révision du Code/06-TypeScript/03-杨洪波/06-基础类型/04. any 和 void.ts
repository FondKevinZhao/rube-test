// any：有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。那么我们可以使用 any 类型来标记这些变量。
/* let str: any = 100;
console.log(str);
str = '年少不知富婆好，错把少女当成宝'; // 可以转换类型
console.log(str); */



// 也可以在数组中使用
// 当一个数组中要存储多个数据，个数不确定，类型不确定，此时也可以使用any来定义
/* let arr:any[] = [100, '年少不止软饭香，错吧青春倒插秧'];
console.log(arr); */



// any类型不好的地方
/* let arr1: any[] = [100, '年少不止软饭香，错吧青春倒插秧'];
// console.log(arr1[0].split('')); // 老师的这里可以编译通过，我这里还是会报错，如果会报错，说明就没有这个问题了。老师的意思是会忽略这个报错去编译，我这里不会。
console.log(arr1[1].split('')); */



// void类型：在函数声明的时候，小括号的后面使用:void，代表的是该函数没有任何的返回值
// 当一个函数没有返回值的时候使用
function showMsg(): void {
  console.log('只要富婆把握住，连夜搬进大别墅');
}
showMsg();
console.log(showMsg()); // 函数没有返回值，所以返回的结果为undefined，没毛病