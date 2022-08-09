// 联合类型和类型保护/类型断言
interface Waiter {
  anjiao: boolean; // 按脚
  say: () => {}
}

interface Teacher {
  anjiao: boolean;
  skill: () => {}
}

// 判断谁是技师谁是普通的服务员
// animal: Waiter | Teacher 这种写法叫联合声明
function judgeWho(animal: Waiter | Teacher) {
  // animal.say(); // 直接写会报错

  // 解决方法一：类型守护/类型断言
  /* if (animal.anjiao) {
    (animal as Teacher).skill()
  } else {
    (animal as Waiter).say()
  } */

  // 解决方法二：
  /* if ('skill' in animal) {
    animal.skill()
  } else {
    animal.say()
  } */
}



// 再看一个例子
/* function add(first: string | number, second: string | number) {
  // 如果直接相加会报错，因为first或者second有可能是string类型的，这里不允许相加
  // return first + second; // 报错

  // 解决方法：typeof 判断类型
  if (typeof first === 'string' || typeof second === 'string') {
    return `${first}${second}`;
  } else {
    return first + second;
  }
} */



// 再看一个例子
/* class NumberObj {
  count: number;
}

function addObj(first: object | NumberObj, second: object | NumberObj) {
  // 这里会报错，因为这个object有可能是任意的对象
  // return first.count + second.count; // 报错

  // 解决: instanceof
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  } else {
    return 0;
  }
} */
