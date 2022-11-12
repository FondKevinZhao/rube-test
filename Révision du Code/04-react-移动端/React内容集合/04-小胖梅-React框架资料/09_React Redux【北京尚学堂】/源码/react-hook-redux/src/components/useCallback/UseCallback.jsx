import React,{useState,useCallback} from 'react'
import Son from './Son'

export default function UseCallback() {
    console.log('parent render ');
    const [num,setNum] = useState(100)
    const [count,setCount] = useState(1000)
    function fun(){
        setNum(num+10)
    }
    //useCallback
    const fun2=useCallback(()=>{
        setNum(num+100)
    },[count])

  return (  
    <div>
        UseCallback
        <p>num:{num}</p>
        <p>count:{count}</p>
        <button onClick={fun}>普通函数num++</button>
        <button onClick={()=>setCount(count+1)}>count++</button>
        <button onClick={fun2}>useCallback函数num++</button>
        <hr />
        {/* 传递数据--函数 */}
        {/* <Son fun={fun}/> */}
        <Son fun={fun2}/>

    </div>
  )
}
