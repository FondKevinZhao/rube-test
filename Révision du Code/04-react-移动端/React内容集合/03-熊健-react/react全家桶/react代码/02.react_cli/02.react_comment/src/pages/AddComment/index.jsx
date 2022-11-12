import { Component } from "react";
import PropTypes from "prop-types";

export default class AddComment extends Component {
  static propTypes = {
    addComment: PropTypes.func.isRequired,
  };

  state = {
    username: "",
    content: "",
  };

  handleChange = (key) => {
    return (e) => {
      this.setState({
        [key]: e.target.value.trim(),
      });
    };
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, content } = this.state;
    if (!username) {
      alert("请输入用户名");
      return;
    }
    if (!content) {
      alert("请输入评论内容");
      return;
    }
    // 添加评论
    this.props.addComment(username, content);
    // 清空
    this.setState({
      username: "",
      content: "",
    });
  };

  render() {
    const { username, content } = this.state;

    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>用户名</label>
          <input
            type="text"
            className="form-control"
            placeholder="用户名"
            onChange={this.handleChange("username")}
            value={username}
          />
        </div>
        <div className="form-group">
          <label>评论内容</label>
          <textarea
            className="form-control"
            rows="6"
            placeholder="评论内容"
            onChange={this.handleChange("content")}
            value={content}></textarea>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            {/* button不用指定type属性 */}
            <button className="btn btn-default pull-right">提交</button>
          </div>
        </div>
      </form>
    );
  }
}
