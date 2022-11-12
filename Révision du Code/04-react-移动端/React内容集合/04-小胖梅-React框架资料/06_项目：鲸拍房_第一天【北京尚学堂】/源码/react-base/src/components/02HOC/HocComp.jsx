//高阶组件：封装组件  
//高阶组件是参数为组件，返回值为新组件的函数。 
import React, { Component } from 'react'

function Comp(CompName){
    class NewComp extends Component {
        constructor(){
            super()
            this.state={
                user:''
            }
        }
        componentDidMount(){
            let user = localStorage.getItem('username')
            this.setState({
                user
            })
        }
      render() {
        return <CompName user={this.state.user} />
      }
    }
    return NewComp

}
export default Comp;
//函数的返回值是一个组件： Comp(News) 