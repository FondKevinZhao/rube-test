import React, { Component } from "react";
import PropTypes from "prop-types";

export default class UserList extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired,
  };

  render() {
    console.log('UserList render');
    const { isLoading, users } = this.props;

    if (isLoading) {
      return <h1>Loading...</h1>;
    }

    if (users.length) {
      return (
        <div className="row">
          {users.map((user) => {
            return (
              <div className="card" key={user.id}>
                <a href={user.html_url} target="_blank" rel="noreferrer">
                  <img
                    src={user.avatar_url}
                    style={{ width: "100%" }}
                    alt={user.login}
                  />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            );
          })}
        </div>
      );
    }

    return <h1>Enter Name To Search</h1>;
  }
}
