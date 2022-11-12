import React,{useState} from 'react'
import Son2 from './Son2'
import Son1 from './Son1'

export default function Parent() {
    const [num,set] = useState(100)
    function change(val){
        set(num+val)
    }
  return (
    <div>Parent
        <hr />
        <Son1 num={num} msg='hello' change={change}/>
        <hr />
        <Son2/>
    </div>
  )
}
