import React,{useState,useEffect} from 'react'
// 实现某一个功能  news组件内页实现同样的功能  其实就是封装一个函数 
export default function Home() {
    const [user,setUser] = useState('')
    //生命周期函数
    useEffect(()=>{
        let user = localStorage.getItem('username')
        setUser(user)
    },[])
  return (
    <div>Home
        <p>user:{user}</p>
    </div>
  )
}
