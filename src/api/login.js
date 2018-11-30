import request from "@common/request/axios";
export function login(params) {
  return request({
    url: "/Users/login",
    method: "post",
    data: params
  });
}
