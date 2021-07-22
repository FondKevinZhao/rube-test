

interface Fish {
  name: string,
  eat(x: string): void
}

class BigFish implements Fish {
  name: '鲨鱼'
  eat(x: string):void {
    console.log(x);
  }
}

interface Animal {
  name: string
}

class Cat implements Animal {
  name: 'tom'
}

function fn(x: Animal | Fish): boolean {
  if (typeof (x as Fish).eat === 'function') {
    (x as Fish).eat('小鱼')
    return true;
  }

  return false;
}