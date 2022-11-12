import React,{useState} from 'react'
import UseEffect from './UseEffect'

export default function Parent() {
    const [flag,setFlag] = useState(true)
    const [n,changeN] = useState(100)
  return (
    <div>
        <hr />
        Parent
        <p>n:{n}</p>
        <button onClick={()=>changeN(n+1)}>n++</button>
        <button onClick={()=>setFlag(!flag)}>切换显示函数组件</button>
        <hr />
        {
            flag?<UseEffect num={n}/>:''
        }
    </div>
  )
}
