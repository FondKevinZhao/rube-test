// 类的Getter、Setter和static
/* class XiaoJieJie {
  constructor(private _age: number) { }
  get age() {
    return this._age - 10;
  }

  set age(age: number) {
    this._age = age + 3;
  }
}

const dajiao = new XiaoJieJie(28)
console.log(dajiao.age)

dajiao.age = 25
console.log(dajiao.age) */



// 普通类写法
/* class Girl {
  sayLove() {
    return 'I love you!'
  }
}
const girl = new Girl();
console.log(girl.sayLove()); */



// 静态类写法
/* class Girl {
  static sayLove() {
    return 'I love you!'
  }
}
// 不需要实例化对象，直接调用即可
// const girl = new Girl(); 
console.log(Girl.sayLove()); */