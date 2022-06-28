import { AxiosError } from 'axios';

const ErrorInterceptor = (error: AxiosError) => {

  if(error.message === 'Network Error'){
    return Promise.reject(new Error('Erro de conexão com o servidor'));
  }
  if(error.request.status === 401){
    return Promise.reject(new Error('Você não tem permissão para acessar este recurso'));
  }

  return Promise.reject(error);

};

export default ErrorInterceptor;