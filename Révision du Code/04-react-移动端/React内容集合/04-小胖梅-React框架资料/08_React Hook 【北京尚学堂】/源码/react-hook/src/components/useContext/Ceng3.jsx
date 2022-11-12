import React,{useContext} from 'react'
import MyContext from './MyContext'
export default function Ceng3() {
    const context = useContext(MyContext)
    console.log('------',context);
  return (
    <div>Ceng3
        <p>{context.user}</p>
        <p>{context.num}</p>
    </div>
  )
}
