import { Component } from "react";
import PropTypes from "prop-types";

export default class CommentItem extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    delComment: PropTypes.func.isRequired,
  };

  del = () => {
    const { username, id } = this.props.comment;
    if (!window.confirm(`您确认要删除 ${username} 评论吗？`)) {
      return;
    }
    // 删除当前元素
    this.props.delComment(id);
  };

  render() {
    const { username, content } = this.props.comment;

    return (
      <li className="list-group-item">
        <div className="handle">
          <button onClick={this.del}>删除</button>
        </div>
        <p className="user">
          <span>{username}</span>
          <span>说:</span>
        </p>
        <p className="centence">{content}</p>
      </li>
    );
  }
}
