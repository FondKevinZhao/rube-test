import React, { Component } from 'react'
import Child from './Child';
import Item from './Item'
import ItemRefs from './ItemRefs';

export default class Home extends Component {
    constructor(){
        super()
        //定义ref 
        this.myRef = React.createRef();
        this.itemRef = React.createRef();
        this.childRef= React.createRef()
    }
    //获取子组件实例
    getItem(){
        console.log(this.myRef.current);
    }
    //操作子组件dom 
    getItemDOM(){
        console.log(this.myRef.current);
        //方法1：在子组件定义ref属性 绑定dom元素  父组件可以获取子组件实例--拿到子组件绑定dom元素
       console.log( this.myRef.current.pref.current);
       this.myRef.current.pref.current.style.color='red';
    }
     //方法2： refs转发
    getItemRef(){
        console.log(this.itemRef);
    }
    //方法3：野路子 
    getChildRef(){
        console.log(this.childRef);
    }
  render() {
    return (
      <div>Home
       
        <hr />
        <button onClick={this.getItem.bind(this)}>获取子组件</button>
        <button onClick={this.getItemDOM.bind(this)}>操作子组件-p标签</button>
        <Item ref={this.myRef}/>
        <hr />
        <button onClick={this.getItemRef.bind(this)}>操作子组件-div标签</button>
        <ItemRefs ref={this.itemRef} />
        <hr />
        <button onClick={this.getChildRef.bind(this)}>操作子组件-child-p标签</button>
        {/* ref关键字 特殊功能 组件上绑定ref 操作组件实例  野路子：不使用ref传递React.Ref() 换其他变量 */}
        {/* other={this.childRef}  other是一个变量  父传子 props传递数据 */}
        <Child other={this.childRef}/>
      </div>
    )
  }
}

