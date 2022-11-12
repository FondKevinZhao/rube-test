import React from 'react'

export default function Son1(props) {
    console.log(props);
  return (
    <div>Son1
        <p>num:{props.num}</p>
        <p>msg:{props.msg}</p>
        <button onClick={()=>props.change(10)}>修改num++ 父组件</button>
    </div>
  )
}
