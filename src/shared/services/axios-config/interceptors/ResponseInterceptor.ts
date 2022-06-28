import { AxiosResponse } from 'axios';


const ResponseInterceptor = (response: AxiosResponse) => {
  return response;
};

export default ResponseInterceptor;