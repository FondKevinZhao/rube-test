import React,{useState} from 'react'
//useState给当前的组件提供数据  相当于class组件  this.state={}
export default function UseState() {
    //一、定义组件变量
    //参数1：定义的变量  参数2：定义修改变量的方法  useState(10) 初始值 num=10
    const [num,setNum] = useState(10);
    const [arr,setArr] = useState([1,2])
    let str='hello'
    //三、函数修改state数据  合并操作 执行最后一次
    function changeNum(){
        console.log(this);
        //定义变量--定义修改的方法 
        setNum(num+1)
        // setNum(num+2)
        // setNum(num+3)

        // //宏任务
        // // setTimeout(()=>{
        // //     setNum(num+4)
        // // },0)
        // //微任务
        // Promise.resolve().then(res=>{
        //     setNum(num+5)
        // })
    }
  return (
    <div>UseState
        {/* 二、使用变量 {变量名称} */}
        <p>num:--hook:{num}</p>
        <p>arr:{arr} ---str:{str}</p>
        <button onClick={changeNum}>num++</button>
    </div>
  )
}
