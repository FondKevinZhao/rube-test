// 同步action 返回action对象
// 异步action 返回一个函数，函数执行异步操作，进而触发更新数据
import axios, { AxiosResponse } from "axios";
import { ActionCreator, AsyncActionCreator, Users, User } from "./types";
import { SET_LOADING, SET_USERS } from "./contants";
/*
  redux管理的数据：
    {
      loading: false,
      users: []
    }
*/

// 同步action
export const setLoading: ActionCreator<boolean> = (loading) => ({
  type: SET_LOADING,
  data: loading,
});

// 同步action
export const setUsers: ActionCreator<Users> = (users) => ({
  type: SET_USERS,
  data: users,
});

// 异步action
export const getUsers: AsyncActionCreator<string> = (searchName) => {
  return async (dispatch) => {
    // 进行异步操作
    const response: AxiosResponse = await axios({
      method: "GET",
      url: `https://api.github.com/search/users`,
      params: {
        q: searchName,
      },
    });

    // 格式化数据
    const users: Users = response.data.items.map((user: User) => ({
      id: user.id,
      login: user.login,
      avatar_url: user.avatar_url,
      html_url: user.html_url,
    }));

    // 触发更新
    dispatch(setUsers(users));
  };
};
