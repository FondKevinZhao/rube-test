// 元组：号称数组的加强版

// 如果把28放到'dajiao'的后面，如：['dajiao', 28, 'teacher']，那么数组的逻辑就会出错了
const xiaojiejie: (string | number)[] = ['dajiao', 'teacher', 28];


// 那么元组的出现就是为了解决这个不足 --- 用这种方式定义就是元组了：[string, string, number]
// 如果再把28往前移，那就直接报错了，不过元组这种方式用得少了
const xiaojiejie1: [string, string, number] = ['dajiao', 'teacher', 28];

// const xiaojiejie2: [string, string, number] = ['dajiao', 28, 'teacher']; // 会报错