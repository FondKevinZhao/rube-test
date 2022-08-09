// 类的概念和使用：ts的类和es6的类大部分是相同的
/* class Lady {
  content = 'Hi, 帅哥！';
  sayHello() {
    return this.content;
  }
}

const goddess = new Lady();
console.log(goddess.sayHello()); */



// 类的继承
/* class Lady {
  content = 'Hi, 帅哥！';
  sayHello() {
    return this.content;
  }
}

class XiaoJieJie extends Lady {
  sayLove() {
    return 'I love you';
  }
}

const goddess = new XiaoJieJie();
console.log(goddess.content);
console.log(goddess.sayHello());
console.log(goddess.sayLove()); */



// 类的重写
/* class Lady {
  content = 'Hi, 帅哥！';
  sayHello() {
    return this.content;
  }
}

class XiaoJieJie extends Lady {
  // 重写就是把父类的方法或者属性复制过来，在子类这里改一改
  sayHello() {
    return 'Hi, honey!';
  }
  sayLove() {
    return 'I love you';
  }
}

const goddess = new XiaoJieJie();
console.log(goddess.content);
console.log(goddess.sayHello());
console.log(goddess.sayLove()); */



// super 关键字
class Lady {
  content = 'Hi, 帅哥！';
  sayHello() {
    return this.content;
  }
}

class XiaoJieJie extends Lady {
  // 不自己写sayHello 方法，我们还用父类的方法，只是给它加一点子类的东西
  sayGood() {
    // uper.sayHello() 调用父类的方法
    return super.sayHello() + '. 你好'
  }

  sayLove() {
    return 'I love you';
  }
}

const goddess = new XiaoJieJie();
console.log(goddess.sayGood());
