import React, { Component } from "react";

import Search from "./pages/Search";
import UserList from "./pages/UserList";

export default class App extends Component {
  state = {
    isLoading: false,
    users: [],
  };

  setLoading = (isLoading) => {
    this.setState({
      isLoading,
    });
  };

  setUsers = (users) => {
    this.setState({
      users,
    });
  };

  render() {
    console.log('App render');
    const { isLoading, users } = this.state;
    return (
      <div className="container">
        <Search setLoading={this.setLoading} setUsers={this.setUsers} />
        <UserList isLoading={isLoading} users={users} />
      </div>
    );
  }
}
