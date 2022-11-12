//导入其他组件
import Home from './components/baidu/Home';
import MyClass from './components/MyClass'
import MyFun from './components/MyFun';
import List from './components/MyList';
import Parent from './components/Parent';
function App() {
  //定义一个变量
  let flag =true;
  // if({flag}){
  //   return <MyClass/>
  // }else{
  //   return <MyFun/>
  // }

  return (
    <div className="App">
        {/* <h2>我是一个App.js</h2> */}
        <Home/>
        {/* <Parent/> */}
        {/* <MyClass/>
        <hr/>
        <MyFun/> */}
        {/* 条件渲染 */}
        {/* {flag?<MyClass/>:<MyFun/>}
        <hr/>
        <List/> */}

    </div>
  );
}

export default App;
