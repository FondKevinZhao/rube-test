import axios from "axios";

// 获取users分页列表数据
export const reqGetUsers = (page, limit) => {
  return axios({
    method: "GET",
    url: `/api/users/${page}/${limit}`,
  });
};

// 添加用户
export const reqSaveUser = ({ username, nickname, password }) => {
  return axios({
    method: "POST",
    url: `/api/users`,
    data: {
      username,
      nickname,
      password,
    },
  });
};
