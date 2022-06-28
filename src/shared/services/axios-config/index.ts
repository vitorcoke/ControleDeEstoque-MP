import axios from 'axios';
import ErrorInterceptor from './interceptors/ErrorInterceptor';
import ResponseInterceptor from './interceptors/ResponseInterceptor';


const Api = axios.create({
  baseURL: 'http://localhost:3333/'
});

Api.interceptors.response.use(
  (response) => ResponseInterceptor(response),
  (error) => ErrorInterceptor(error)
);


export default Api;