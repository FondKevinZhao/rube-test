import { Component } from "react";
//声明一个静态数组数据 模拟遍历数组
// const arr=[10,20,30,40]
const arr=[
    {
        id:1,
        title:'你好'
    },{
        id:2,
        title:'他好'
    },
    {
        id:3,
        title:'大家好'
    }
]

export default class List extends Component{

    render(){
        return(
            <div>
                <h3>列表渲染--遍历数组</h3>
                {/* key遍历数据的时候 每一项加一个唯一标识 key={基本数据类型变量} */}
                <ul>
                    {
                        arr.map(function(ele){
                          return <li key={ele.id}>{ele.title}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}