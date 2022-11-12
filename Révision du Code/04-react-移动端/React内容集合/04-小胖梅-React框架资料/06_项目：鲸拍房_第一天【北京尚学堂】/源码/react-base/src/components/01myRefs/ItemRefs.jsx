import React, { Component } from 'react'

const ItemRefs= React.forwardRef((props,ref)=>{
    return (
        <div>
            子组件
            <div ref={ref}>获取操作div-dom元素</div>

        </div>
    )
}) 
export default ItemRefs