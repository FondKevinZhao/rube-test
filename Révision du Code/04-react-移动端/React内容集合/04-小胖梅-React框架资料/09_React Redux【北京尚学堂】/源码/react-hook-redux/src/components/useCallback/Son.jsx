import React from 'react'
//子组件需要修改写法
const Son= React.memo(()=>{
    console.log('son render');
    return (
            <div>Son</div>
          )
})
export default Son

// export default function Son() {
//     console.log('son render');
//   return (
//     <div>Son</div>
//   )
// }
