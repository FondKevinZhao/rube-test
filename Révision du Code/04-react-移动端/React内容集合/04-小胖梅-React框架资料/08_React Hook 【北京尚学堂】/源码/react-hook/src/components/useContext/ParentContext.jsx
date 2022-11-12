import React,{useState} from 'react'
import Ceng1 from './Ceng1'
import MyContext from './MyContext'
export default function ParentContext() {
    const [num,setNum] = useState(100)
    const [user,setUser] = useState('admin')
  return (
    <div>
        ParentContext
        <p>num:{num}</p>
        <p>user:{user}</p>
        <hr />
       <MyContext.Provider value={{num:num,user,str:'hello'}}>
        <Ceng1/>
       </MyContext.Provider>
    </div>
  )
}
