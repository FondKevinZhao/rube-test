import React,{useState,useMemo} from 'react'

export default function UseMemo() {
    //定义数组--求和运算
    const [arr,setArr] = useState([1,2,3,4,5]);
    const [num,setNum] =useState(10)

    //普通写法
    function qiuhe(){
        console.log('普通函数的求和运算');
        let sum =0;
        arr.forEach(ele=>{
            sum+=ele;
        })
        return sum
    }

    //useMemo 功能：缓存求和的结果  使用：{qiuheMemo} 不用加() 
    const qiuheMemo=useMemo(()=>{
        console.log('useMemo函数的求和运算');
        let sum =0;
        arr.forEach(ele=>{
            sum+=ele;
        })
        return sum
    },[arr])

  return (
    <div>UseMemo
        <button onClick={()=>setArr([1,2,3,4,5,6])}>修改数组</button>
        <p>求数组的和：{qiuhe()}</p>
        <p>求数组的和：{qiuhe()}</p>
        <p>求数组的和：{qiuhe()}</p>

        <p>useMemo求数组的和: {qiuheMemo}</p>
        <p>useMemo求数组的和: {qiuheMemo}</p>
        <p>useMemo求数组的和: {qiuheMemo}</p>

    </div>
  )
}
