import React,{useState,useRef} from 'react'
import Son from './Son';

export default function MyRef() {
    //定义ref
    //方法1： 
    const pRef = React.createRef();
    //方法2： 
    const divRef = useRef();
    //ref转发 获取子组件的DOM元素
    const childRef = useRef()
    // const childRef = React.createRef();

    function getDom(){
        console.log(pRef);
        pRef.current.style.color='red'
    }
    function getDivDom(){
        console.log(divRef);
    }
    function getChild(){
        console.log(childRef);
    }
  return (
    <div>MyRef
        <p ref={pRef}>我是一个p标签</p>
        <button onClick={getDom}>获取p标签DOM</button>
        <div ref={divRef}>我是一个div标签</div>
        <button onClick={getDivDom}>获取p标签DOM</button>
        <hr />
        <button onClick={getChild}>获取子组件实例</button>
        <Son ref={childRef} />
    </div>
  )
}
