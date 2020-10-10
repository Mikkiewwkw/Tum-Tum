import {
  request
} from "@/network/request";

export function login(logInfo) {
  return request({
    method: "POST",
    url: "/s/signin",
    data: logInfo,
  });
}