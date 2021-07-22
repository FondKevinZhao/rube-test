import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setLoading, getUsers } from "../../redux/actions";

class Search extends Component {
  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired,
  };

  state = {
    searchName: "",
  };

  shouldComponentUpdate(props, state) {
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
    // 更新loading
    this.props.setLoading(true);
    // 发送请求更新users
    await this.props.getUsers(searchName);
    this.props.setLoading(false);
  };

  render() {
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

export default connect(null, {
  setLoading,
  getUsers,
})(Search);
