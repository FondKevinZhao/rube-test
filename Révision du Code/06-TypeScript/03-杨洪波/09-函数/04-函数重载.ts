// 函数重载：函数名字相同，函数的参数及个数不同

// 定义一个函数
// 需求：我们有一个add函数，它可以接受2个string类型的参数进行拼接，也可以接收2个number类型的参数进行相加

/* function add(x: string | number, y: string | number): any {
  // return x + y; // 直接这么写会报错，因为x或y可能是字符串或者数字，到底是要拼接还是要相加，会不确定，那么就会报错

  // 判断
  if (typeof x === 'string' && typeof y === 'string') {
    // 字符串拼接
    return x + y;
  } else if (typeof x === 'number' && typeof y === 'number') {
    // 数字相加
    return x + y;
  }
}

// 函数调用
console.log(add('诸葛', '孔明')); */



// 函数重载声明
function add(x: string, y: string): string;
function add(x: number, y: number): number;
function add(x: string | number, y: string | number): any {
  // return x + y; // 直接这么写会报错，因为x或y可能是字符串或者数字，到底是要拼接还是要相加，会不确定，那么就会报错

  // 判断
  if (typeof x === 'string' && typeof y === 'string') {
    // 字符串拼接
    return x + y;
  } else if (typeof x === 'number' && typeof y === 'number') {
    // 数字相加
    return x + y;
  }
}

// 函数调用
console.log(add('诸葛', '孔明'));
// console.log(add('真行', 0)); // 报错


