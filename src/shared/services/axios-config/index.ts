import axios from "axios";
import ErrorInterceptor from "./interceptors/ErrorInterceptor";
import ResponseInterceptor from "./interceptors/ResponseInterceptor";
import { parseCookies } from "nookies";

const { token } = parseCookies();

const Api = axios.create({
  baseURL: "http://localhost:3333/",
});

if (token) {
  Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

Api.interceptors.response.use(
  (response) => ResponseInterceptor(response),
  (error) => ErrorInterceptor(error)
);

export default Api;
