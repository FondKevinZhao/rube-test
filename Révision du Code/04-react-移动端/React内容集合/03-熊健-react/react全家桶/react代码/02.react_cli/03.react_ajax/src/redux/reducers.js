import { combineReducers } from "redux";

function loading(prevState = false, action) {
  switch (action.type) {
    case "SET_LOADING":
      return action.data;
    default:
      return prevState;
  }
}

function users(prevState = [], action) {
  switch (action.type) {
    case "SET_USERS":
      return action.data;
    default:
      return prevState;
  }
}

export default combineReducers({
  loading,
  users,
});
