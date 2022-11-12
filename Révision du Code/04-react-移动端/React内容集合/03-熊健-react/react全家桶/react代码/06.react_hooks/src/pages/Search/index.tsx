import { useState, ChangeEvent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { getUsers, setLoading } from "../../store/actions";

interface Props {
  // 定义函数类型的两种写法
  setLoading(loading: boolean): void;
  getUsers: (searchName: string) => void;
}

function Search(props: Props) {
  // 定义数据
  // 通过受控组件（state + change事件）方式来收集表单数据
  const [searchName, setSearchName] = useState<string>("");

  const { setLoading, getUsers } = props;

  // 原生DOM事件event对象类型是Event
  // 而React是合成事件，修改了事件对象，所以类型使用React.ChangeEvent
  const handleChange: (event: ChangeEvent) => void = (event) => {
    // event.target的值可能是 input、div、a、p 等标签
    // 只有表单项input才会有value值，所以要进行类型断言
    const searchName = (event.target as HTMLInputElement).value.trim();
    setSearchName(searchName);
  };

  const search: () => void = async () => {
    // 搜索
    if (!searchName) {
      alert("请输入搜索内容");
      return;
    }
    // 设置loading
    setLoading(true);
    // 在搜索
    await getUsers(searchName);
    // 设置loading
    setLoading(false);
  };

  return (
    <section className="jumbotron">
      <h3 className="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          onChange={handleChange}
        />
        <button onClick={search}>Search</button>
      </div>
    </section>
  );
}

const mapStateToProps = null;

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    // 同步action，返回值action对象，调用dispatch触发更新
    setLoading: (loading: boolean) => dispatch(setLoading(loading)),
    // 异步action，返回值函数，函数接受dispatch参数，内部执行异步操作
    getUsers: (searchName: string) => getUsers(searchName)(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
