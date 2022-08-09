// 枚举：enum 类型是对 JavaScript 标准数据类型的一个补充。 使用枚举类型可以为一组数值赋予友好的名字
// 如果我有些数据非常的常用，并且个数是固定的，这个时候我们可以把它定义成一个单独是数据类型 --- 枚举类型

// 枚举类型 --- 枚举里面的每个数据值都可以叫元素，每个元素都有自己的编号，编号是从0才是的，一次的递增加1
/* enum Color {
  red,
  green,
  blue
}
// 定义一个Color的枚举类型的变量来接收枚举的值
let color: Color = Color.red;
console.log(color);
console.log(Color.red, Color.green, Color.blue); */



// 可以改变里面的元素的编号
/* enum Color {
  red = 10,
  green = 15,
  blue
}
// 定义一个Color的枚举类型的变量来接收枚举的值
let color: Color = Color.red;
console.log(color);
console.log(Color.red, Color.green, Color.blue); */



// 可以由枚举的值得到元素的名字
/* enum Color {
  red = 10,
  green = 15,
  blue
}
// 定义一个Color的枚举类型的变量来接收枚举的值
console.log(Color.red, Color.green, Color.blue);
console.log(Color[10]);
console.log(Color[15]);
console.log(Color[16]); */



// 小例子 - 枚举中的元素可以是中文的数据值，但是不推荐
/* enum Gender {
  女,
  男
}
console.log(Gender.男); // 里面可以写中文，还可以点.中文获取 */
