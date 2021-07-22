// 根据prevState和action来生成newState
import { combineReducers } from "redux";
import { Action, Users } from "./types";
import { SET_LOADING, SET_USERS } from "./contants";

const initLoading: boolean = false;
function loading(prevState = initLoading, action: Action<boolean>): boolean {
  switch (action.type) {
    case SET_LOADING:
      return action.data;
    default:
      return prevState;
  }
}

const initUsers: Users = [];
function users(prevState = initUsers, action: Action<Users>): Users {
  switch (action.type) {
    case SET_USERS:
      return action.data;
    default:
      return prevState;
  }
}

export default combineReducers({
  loading,
  users,
});
