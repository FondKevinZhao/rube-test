import { Component } from "react";
// 想要包有提示，需要在package.json中依赖项添加包的依赖
import PropTypes from "prop-types";
import CommentItem from "./components/CommentItem";

export default class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    delComment: PropTypes.func.isRequired,
  };

  render() {
    const { comments, delComment } = this.props;

    const display = comments.length ? "none" : "block";

    return (
      <div>
        <h3 className="reply">评论回复：</h3>
        <h2 style={{ display }}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {comments.map((comment) => {
            return (
              <CommentItem
                key={comment.id}
                comment={comment}
                delComment={delComment}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
