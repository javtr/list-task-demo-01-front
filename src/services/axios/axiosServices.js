import AxiosRequest from "./config";

export function GetListByUser() {
  return AxiosRequest.get(`/list/1`, {});
}


export function PostNewList(obj) {
  return AxiosRequest.post(`/list`, obj);
}

export function DeleteList(id) {
  return AxiosRequest.delete(`/list/:${id}`, {});
}


export function PostNewTask(obj) {
  return AxiosRequest.post(`/task`, obj);
}

export function DeleteTask(id) {
  return AxiosRequest.delete(`/task/:${id}`, {});
}


