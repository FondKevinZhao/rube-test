import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export default class Search extends Component {
  static propTypes = {
    setLoading: PropTypes.func.isRequired,
    setUsers: PropTypes.func.isRequired,
  };

  state = {
    searchName: "",
  };

  shouldComponentUpdate(props, state) {
    /*
      当state发生变化的时候，返回true，重新渲染
      当state没有变化，返回false，不要渲染
        避免由于App重新渲染导致Search也重新渲染
    */
    // console.log("新", state);
    // console.log("旧", this.state);

    // if (state.searchName === this.state.searchName) {
    //   return false;
    // }

    // return true;

    return state.searchName !== this.state.searchName;
  }

  handleChange = (e) => {
    this.setState({
      searchName: e.target.value.trim(),
    });
  };

  search = async () => {
    const { searchName } = this.state;
    if (!searchName) {
      alert("请输入搜索的名称");
      return;
    }
    // 搜索
    // 改为loading
    this.props.setLoading(true);
    try {
      // 发送请求
      const response = await axios({
        method: "GET",
        // url: `https://api.github.com/search/users?q=${searchName}`,
        url: `https://api.github.com/search/users`,
        params: {
          q: searchName,
          order: "asc",
        },
      });
      // 请求成功，改变loading和users的值
      this.props.setLoading(false);
      // 要求更新的state数据必须是你全部要使用的数据，不用的数据要删除掉
      // const users = response.data.items.map((user) => {
      //   return { id: user.id, login: user.login };
      // });
      const users = response.data.items.map((user) => ({
        id: user.id,
        login: user.login,
        avatar_url: user.avatar_url,
        html_url: user.html_url,
      }));
      this.props.setUsers(users);
    } catch (e) {
      // 请求失败，改变loading
      console.log(e);
      this.props.setLoading(false);
    }
  };

  render() {
    console.log("Search render");

    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            placeholder="enter the name you search"
            onChange={this.handleChange}
          />
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
