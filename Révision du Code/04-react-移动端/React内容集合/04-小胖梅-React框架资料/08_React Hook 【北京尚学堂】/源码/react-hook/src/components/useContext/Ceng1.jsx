import React from 'react'
import Ceng2 from './Ceng2';

export default function Ceng1(props) {
    console.log(props);
  return (
    <div>Ceng1
        <p>{props.num}</p>
        <hr />
        <Ceng2/>
    </div>
  )
}
