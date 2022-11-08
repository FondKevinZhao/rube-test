/*
  同步action
    创建action对象工厂函数
    返回值action对象
  异步action
    执行异步操作并触发更新的函数
    返回值是一个函数，函数中进行异步操作

  看对数据有几种操作，定义action
*/
import axios from "axios";

// 同步action
export const setLoading = (loading) => ({
  type: "SET_LOADING",
  data: loading,
});

// 同步action
export const setUsers = (users) => ({
  type: "SET_USERS",
  data: users,
});

// 异步action
export const getUsers = (searchName) => {
  return async (dispatch) => {
    // 进行异步操作
    const response = await axios({
      method: "GET",
      url: `https://api.github.com/search/users`,
      params: {
        q: searchName,
      },
    });
    console.log(searchName, response);

    // 格式化数据
    const users = response.data.items.map((user) => ({
      id: user.id,
      login: user.login,
      avatar_url: user.avatar_url,
      html_url: user.html_url,
    }));

    // 对数据进行更新
    dispatch(setUsers(users));
  };
};
