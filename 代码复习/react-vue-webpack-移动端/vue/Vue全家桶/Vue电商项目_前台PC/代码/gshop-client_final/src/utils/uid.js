/*
  判断localStorage有没有存储数据
    有
      直接使用，返回出去
    没有
      生成一个新的userTempId
      存储在localStorage
      返回出去

    localStorage
      getItem(key) 读取
      setItem(key, value) 设置
      removeItem(key) 删除单个
      clear() 删除所有
*/
import { v4 } from "uuid";

const key = "userTempId";

// 生成userTempId
function generateUserTempId() {
  let userTempId = window.localStorage.getItem(key);
  if (userTempId) {
    return userTempId;
  }
  userTempId = v4();
  window.localStorage.setItem(key, userTempId);
  return userTempId;
}

export default generateUserTempId;
