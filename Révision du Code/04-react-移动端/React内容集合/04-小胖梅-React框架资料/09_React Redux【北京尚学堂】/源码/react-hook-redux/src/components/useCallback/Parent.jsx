import React,{useCallback,useState} from 'react'
import Child from './Child'
export default function Parent() {
    //定义变量
    let [num,setNum] = useState(10)
    let [arr,setArr]  = useState([])
    //功能：根据num生成一个数组
    function fun1(){
        let arr=[]
        for(let i=1;i<=num;i++){
            arr.push(i)
        }
        setArr(arr)
    }
    //useCallback
    const fun2 = useCallback(() => {
        console.log('-----------------');
            let arr=[]
            for(let i=1;i<=num;i++){
                arr.push(i)
            }
            setArr(arr)     

        },[num])

    return (
        <div>
            <h2>useCallback 回调函数</h2>
            <p>生成数组arr: {arr}</p>
            <button onClick={()=>fun2()}>函数</button>
            <hr />
            {/* 普通函数 */}
            {/* <Child fun={fun1} /> */}
            {/* useCallback */}
            <Child fun={fun2} />
        </div>
    )
}
