function fn1(x: number, y: number): number {
  return x + y;
}

const fn2: (x: number, y: number) => number = (x: number, y: number): number => x + y

// 接口定义函数的类型：可以复用
interface Fn {
  (x: number, y: number): number 
}

const fn7: Fn = (x: number, y: number): number => x + y

function fn3(x: number, y?: number): number {
  return x + y
}

function fn4(x: number, y: number = 10): number {
  return x + y
}
fn4(10)

function fn5(x: number, ...rest: number[]): number {
  return rest.reduce((p, c) => p + c, x)
}

// 重载
function fn6(x: number, y: number): number
function fn6(x: string, y: string): string
function fn6(x: number | string, y: number | string): number | string {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  } else if (typeof x === 'string' && typeof y === 'string') {
    return x + y;
  }
}

fn6(10, 12)