import React,{useState,useEffect} from 'react'
import useHook from './useHook'
export default function News() {
  
    const name= useHook();
    console.log('----name--',name);
    
    // const [user,setUser] = useState('')
    //获取本地存储账号
    // //生命周期函数
    // useEffect(()=>{
    //     let user = localStorage.getItem('username')
    //     setUser(user)
    // },[])
  return (
    <div>News
        <p>user:{name}</p>
    </div>
  )
}
