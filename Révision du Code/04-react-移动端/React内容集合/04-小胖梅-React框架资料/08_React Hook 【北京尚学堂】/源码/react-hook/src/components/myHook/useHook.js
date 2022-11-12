//最定义Hook --- 功能：获取本地存储账号名称 
import {useState,useEffect} from 'react'

function UseGetUser(){
    const [user,setUser] = useState('')
     //生命周期函数
     useEffect(()=>{
        let user = localStorage.getItem('username')
        setUser(user)
    },[])

    return user

}

export default UseGetUser