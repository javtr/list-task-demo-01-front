import AxiosRequest from "./config";

export function GetListByUser() {
  return AxiosRequest.get(`/list/1`, {});
}

