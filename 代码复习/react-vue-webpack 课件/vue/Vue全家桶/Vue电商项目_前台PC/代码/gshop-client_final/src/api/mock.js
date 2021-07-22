import mockRequest from "../utils/mockRequest";

export default {
  reqGetBanners() {
    return mockRequest({
      url: "/getBanners",
      method: "GET",
    });
  },
  reqGetData() {
    return mockRequest({
      url: "/getData",
      method: "GET",
    });
  },
  reqGetFloors() {
    return mockRequest({
      url: "/getFloors",
      method: "GET",
    });
  },
};
