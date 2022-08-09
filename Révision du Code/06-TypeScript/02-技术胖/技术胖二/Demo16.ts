// Enum 枚举类型

// 普通程序员的写法
/* function getServe(status: number) {
  if (status === 0) {
    return "massage"
  } else if (status === 1) {
    return 'SPA'
  } else if (status === 2) {
    return 'dabaojian'
  }
}
const result = getServe(0)
console.log(`我要去${result}`); */



// 中级程序员的写法 --- 更加语义化
/* const Status = {
  MASSAGE: 0,
  SPA: 1,
  DABAOJIAN: 2
}
function getServe(status: any) {
  if (status === Status.MASSAGE) {
    return "massage"
  } else if (status === Status.SPA) {
    return 'SPA'
  } else if (status === Status.DABAOJIAN) {
    return 'dabaojian'
  }
}
const result = getServe(Status.SPA)
console.log(`我要去${result}`); */



// 高级程序员的写法
enum Status {
  MASSAGE,
  SPA,
  DABAOJIAN
}

function getServe(status: any) {
  if (status === Status.MASSAGE) {
    return "massage"
  } else if (status === Status.SPA) {
    return 'SPA'
  } else if (status === Status.DABAOJIAN) {
    return 'dabaojian'
  }
}
const result = getServe(Status.SPA)
console.log(`我要去${result}`);
// 查看 Status 当中的值 --- 会得到数值，默认从0开始
console.log(Status.MASSAGE);
console.log(Status.SPA);
console.log(Status.DABAOJIAN);
console.log(Status[1]); // 反查
