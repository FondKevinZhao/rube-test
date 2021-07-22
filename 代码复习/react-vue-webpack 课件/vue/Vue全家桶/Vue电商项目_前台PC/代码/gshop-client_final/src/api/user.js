import request from "../utils/request";

export default {
  reqSendCode(phone) {
    return request({
      method: "GET",
      url: `/user/passport/sendCode/${phone}`,
    });
  },
  reqRegister({ phone, code, password }) {
    return request({
      method: "POST",
      url: `/user/passport/register`,
      data: {
        phone,
        code,
        password,
      },
    });
  },
  reqLogin(phone, password) {
    return request({
      method: "POST",
      url: `/user/passport/login`,
      data: {
        phone,
        password,
      },
    });
  },
};
