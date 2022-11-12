import React,{useState,useEffect} from 'react'

export default function UseEffect(props) {
    console.log(this,props);
    //定义容器
    const [num,setNum] = useState(10)
    const [banner,setBanner] = useState([])

    //生命周期函数 useEffect(callback,[变量]) 
    //类似class组件：componentDidMount() componentDidUpdate() componentWillUnmount()
    //第二个参数不写的时候  componentDidMount() componentDidUpdate()
    // useEffect(()=>{
    //     console.log('我是生命周期函数');  
    // }) 

    //第二个参数为空[]   相当于componentDidMount() 执行一次 可以获取网络请求
    // useEffect(()=>{
    //     console.log('相当于componentDidMount() 执行一次 可以获取网络请求');  
    // },[]) 

    //第二个参数为某个变量或者多个变量 [num,msg] 依赖于这个变量 只要变量修改了 执行这个函数
    // useEffect(()=>{
    //         console.log('依赖于这个变量 只要变量修改了 执行这个函数');  
    //         //网络请求 根据不同的参数 获取不同的数据 ---渲染页面视图
    // },[props.num])

    //第一个参数 回调函数可以写返回值return   加上return 表示当前有修改和卸载都执行
   useEffect(()=>{
            console.log('依赖于这个变量 只要变量修改了 执行这个函数');  
            //网络请求 根据不同的参数 获取不同的数据 ---渲染页面视图

            //返回值
            return ()=>{
                console.log('销毁功能实现');
            }
    },[props.num,num])

    //标注：useEffect可以执行多次
  return (
    <div>UseEffect
        <p>num:{num}</p>
        <button onClick={()=>setNum(num+10)}>num++</button>
    </div>
  )
}
