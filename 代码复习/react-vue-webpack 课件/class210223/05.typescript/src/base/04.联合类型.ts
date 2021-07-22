
let a: number | string | boolean;
a = 123;
a = 'str';
a = true;
// a = Symbol();

function fn10(x: number | string, y: number | string): number | string {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  } else if (typeof x === 'string' && typeof y === 'string') {
    return x + y;
  }
}