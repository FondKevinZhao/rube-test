import React,{useState} from 'react'

// export default function Son() {
//     const [num,setNum] = useState(100)
//   return (
//     <div>Son</div>
//   )
// }

const Son = React.forwardRef((props,ref)=>{
    console.log(props,ref);
    const [num,setNum] = useState(100)
    return (
            <div ref={ref}>Son</div>
          )
})

export default Son;