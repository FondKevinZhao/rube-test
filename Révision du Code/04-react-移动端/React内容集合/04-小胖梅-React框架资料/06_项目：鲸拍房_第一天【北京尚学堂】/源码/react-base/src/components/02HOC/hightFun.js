//功能：获取本地存储的用户名
localStorage.setItem('username','admin')

//获取本地存储的字段内容：username 
/* function fun1(){
    let user = localStorage.getItem('username')
    console.log('user',user);
}

function fun2(){
    let user = localStorage.getItem('username')
    console.log('user',user);
}
fun1()
fun2()

 */
//提取公共的函数--高阶函数
function fun(FunName){
    let newFun =function(){
        let user = localStorage.getItem('username')
        return FunName(user)
    }  
    return newFun 
} 

function fun1(user){
    console.log('user',user);
}

function fun2(user){
    console.log('user',user);
}
//封装的fun函数 参数是一个函数 返回的一个新的函数 
let a=fun(fun1);
let b=fun(fun2);
// console.log(a);
a();
b();
