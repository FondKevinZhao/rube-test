import React from 'react'

const Son = React.memo((props)=>{
    console.log('son组件');
    // console.log(props.fun);
    return (
                <div>
                    <h3>----子组件---</h3>
                    <button onClick={()=>props.fun()}>子组件---生成数组</button>
                </div>
            )
})

export default Son

// export default function Son(props) {
//     console.log('son组件',props.fun);
//     return (
//         <div>
//             <h3>----子组件---</h3>
//             <button onClick={()=>props.fun()}>生成数组</button>
//         </div>
//     )
// }
