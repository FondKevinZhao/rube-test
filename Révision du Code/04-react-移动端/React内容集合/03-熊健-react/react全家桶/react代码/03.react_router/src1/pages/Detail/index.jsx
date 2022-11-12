import React, { Component } from "react";

export default class Detail extends Component {
  state = {
    details: [
      { id: 1, title: "message001", content: "message content001" },
      { id: 3, title: "message003", content: "message content003" },
      { id: 5, title: "message005", content: "message content005" },
    ],
  };
  render() {
    const id = +this.props.match.params.id;
    console.log(id);
    const detail = this.state.details.find((detail) => detail.id === id);
    console.log(detail);
    return (
      <ul>
        <li>id: {detail.id}</li>
        <li>title: {detail.title}</li>
        <li>content: {detail.content}</li>
      </ul>
    );
  }
}
