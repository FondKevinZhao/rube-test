import React from 'react'
import Ceng3 from './Ceng3'
import MyContext from './MyContext'
export default function Ceng2() {
  return (
    <div>
        Ceng2
        <MyContext.Consumer>
            {
                value=>{
                    return <div>{value.num} {value.user}</div>
                }
            }
        </MyContext.Consumer>
        <hr />

        <Ceng3/>
    </div>
  )
}

//1. <MyContext.Consumer> 标签
//2.  组件名.contextType=MyContext     获取：this.context.xxx 
//    static contextType = MyContext  获取：this.context.xxx 
