import React,{useState,useReducer} from 'react'
 //定义修改count的方法  reducer
 function reducer(state,action){//state数据  action动作 操作修改state数据
        //action={type:'add/reduce'} 
        switch (action.type) {
            case 'add':
                state=state+10;  
               return state;
            case 'reduce':
                state=state-10;  
               return state;
            default:
                return state;
        }       
 }
export default function UseReducer() {
    //定义数据
    const [num,changNum] = useState(100)
    //useReducer
    //count=1000  changeCount修改count的方法   useReducer(函数名,1000) 函数名定义修改count的方法
    const [count,changeCount] = useReducer(reducer,1000);

  return (
    <div>UseReducer
        <p>count:{count}</p>
        <button onClick={()=>changeCount({type:'add'})}>count++</button>
        <button onClick={()=>changeCount({type:'reduce'})}>count--</button>
        <p>num:{num}</p>
        <button onClick={()=>changNum(num+1)}>num++</button>
    </div>
  )
}
