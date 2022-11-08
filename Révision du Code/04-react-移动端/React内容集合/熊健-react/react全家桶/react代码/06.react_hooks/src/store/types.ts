// 放redux中所有类型
import { Dispatch } from "redux";

// 同步action creator函数的类型
export interface ActionCreator<T> {
  (data: T): Action<T>;
}
// action对象的类型
export interface Action<T> {
  type: string;
  data: T;
}
// 异步action creator类型
export interface AsyncActionCreator<T> {
  (data: T): (dispatch: Dispatch) => Promise<any>;
}

// 定义User类型
export interface User {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}
// 定义Users类型（取别名）
export type Users = User[];

// redux管理所有状态数据的类型
export interface RootState {
  loading: boolean;
  users: Users;
}
