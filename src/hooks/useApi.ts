// @ts-nocheck
import axios from "axios";

// =================== AXIOS ===================
export function useAxiosGet(url) {
  return axios.get(url);
}

export function useAxiosPost(url, data) {
  return axios.post(url, data);
}

export function useAxiosPut(url, data) {
  return axios.put(url, data);
}
