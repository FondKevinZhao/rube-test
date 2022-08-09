// 类型注解：是一种轻量级的为函数或者变量添加的约束

/* (() => {
  function showMsg(str: string) {
    return '床前明月光，' + str;
  }
  let msg = '疑是地上霜';
  console.log(showMsg(msg));
})() */



/* (() => {
  function showMsg(str: string) {
    return '床前明月光，' + str;
  }
  // let msg = '疑是地上霜';
  // 把msg变成一个数组
  let msg = [10, 20, 30];
  // 智能的错误提示信息
  console.log(showMsg(msg)); // 调用会报错
})() */