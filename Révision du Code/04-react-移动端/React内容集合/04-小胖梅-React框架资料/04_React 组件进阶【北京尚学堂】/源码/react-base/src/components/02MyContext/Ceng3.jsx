import React, { Component } from 'react'
import Ceng4 from './Ceng4'
import MyContext from './Mycontext'
//第一种使用数据方法
export default class Ceng3 extends Component {
  render() {
    return (
      <div>
        <h3>第四层</h3>
        <MyContext.Consumer>
          {
            value=>{
              console.log('第一种使用数据方法',value);
              return (
               <div>
                 <p>{value.msg}</p>
                <p>{value.num}</p>
               </div>
              )
            }
          }
        </MyContext.Consumer>

        <hr />
        <Ceng4/>
      </div>
    )
  }
}
