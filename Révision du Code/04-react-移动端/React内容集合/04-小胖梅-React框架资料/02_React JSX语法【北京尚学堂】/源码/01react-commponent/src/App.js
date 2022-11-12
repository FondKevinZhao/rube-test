import ChangeState from "./component/ChangeState";
import HandleEvent from "./component/HandleEvent";
import Life from "./component/Life";
import LifeDemo from "./component/LifeDemo";
import MyState from "./component/MyState";
import Home from "./home/Home";
let flag=false;
function App() {
  return (
    <div className="App">
      {/* 生命周期函数--网络请求 */}
      <LifeDemo/>
      {/* 生命周期函数 --构子函数 */}
      {/* {
        flag?<Life/>:""
      } */}
{/* <Life/> */}
      {/* 事件 */}
      {/* <HandleEvent/> */}
      {/* 修改state数据 */}
      {/* <ChangeState/> */}
      {/* state数据 */}
      {/* <MyState/> */}
      {/* 作业--和样式 */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
