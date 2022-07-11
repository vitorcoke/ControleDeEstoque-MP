import axios from "axios";
import ErrorInterceptor from "./interceptors/ErrorInterceptor";
import ResponseInterceptor from "./interceptors/ResponseInterceptor";
import { parseCookies, setCookie } from "nookies";
import createAuthRefreshInterceptor from "axios-auth-refresh";

const { "mp-token": token, refresh_token: refresh_token } = parseCookies();

const api = axios.create({
  baseURL: "http://localhost:3333/",
});

if (token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

/*console.log(refresh_token);

if (refresh_token) {
  createAuthRefreshInterceptor(
    api,
    (failedRequest) =>
      api
        .post("/refresh-token", { refreshTokenId: refresh_token })
        .then(async (response) => {
          failedRequest.response.config.headers[
            "Authorization"
          ] = `Bearer ${response.data.token}`;
          api.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${response.data.token}`;
          setCookie(null, "mp-agatha.token", response.data.token, {
            maxAge: 60 * 60 * 24, // 24 horas
            path: "/",
          });
          return Promise.resolve();
        })
        .catch((error) => Promise.reject(error)),
    { statusCodes: [401] }
  );
}*/

api.interceptors.response.use(
  (response) => ResponseInterceptor(response),
  (error) => ErrorInterceptor(error)
);

export default api;
