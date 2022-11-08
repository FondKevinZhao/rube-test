import { useState, useEffect } from "react";
// import ReactDOM from "react-dom";

export default function App() {
  // <number> 声明泛型参数的类型
  // const [状态数据, 更新状态数据的方法] = useState(状态数据的初始化值)
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    /*
      函数相当于componentDidMount和componentDidUpdate
      如果想要useEffect中函数只调用一次（componentDidMount），传入一个空数组

      shouldComponentUpdate
      componentWillUnmount
    */
    console.log("useEffect");

    // 数组 [] 作用：数组里面放置useEffect的依赖项，当依赖项发生变化，useEffect就会重新触发
    // 没有变化就不会触发
    return () => {
      // 相当于 componentWillUnmount
      console.log("1111");
    };
  }, [count]);

  console.log("render");

  const add: () => void = () => {
    setCount(count + 1);
  };

  // const goDie = () => {
  //   ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  // };

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={add}>按钮</button>
      {/* <button onClick={goDie}>goDie</button> */}
    </div>
  );
}
