import Api from '../../axios-config';


interface INotebook {
  data?: string;
  marca?: string;
  modelo?: string;
  mac?: string;
  serial?: string;
  patrimonio?: number;
  userSPId?: number | null;
}


const getAll = async () => {
  try {
    const urlRelativa = '/notebooksCampinas';
    const { data } = await Api.get(urlRelativa);

    if (data) {
      return data;
    }
    return new Error('Não foi possível obter os notebooks');
  } catch (error) {
    return new Error((error as {message: string}).message || 'Erro ao listar notebooks');
  }
};

const getById = async (id: number) => {
  try {
    const urlRelativa = `/notebooksCampinas/${id}`;
    const {data} = await Api.get(urlRelativa);

    if(data){
      return data;
    }

    return new Error('Não foi possível obter o notebook');
  } catch (error) {
    return new Error((error as{message: string}).message || 'Erro ao obter notebook');
  }
};

const create = async (notebooks: INotebook) => {
  try {
    const {data} = await Api.post('/notebooksCampinas', notebooks);
    if(data){
      return data;
    }
    return new Error('Não foi possível criar o notebook');
  } catch (error) {
    return new Error((error as {message: string}).message || 'Erro ao criar notebook');
  }
};

const update = async (id: number, notebooks: INotebook) => {
  try {
    const urlRelativa = `/notebooksCampinas/${id}`;
    const {data} = await Api.put(urlRelativa, notebooks);

    if(data){
      return data;
    }
    return new Error('Não foi possível atualizar o notebook');
  } catch (error) {
    return new Error((error as {message: string}).message || 'Erro ao atualizar notebook');
  }
};

const remove = async (id: number) => {
  try {
    const urlRelativa = `/notebooksCampinas/${id}`;
    const {data} = await Api.delete(urlRelativa);

    if(data){
      return data;
    }
    return new Error('Não foi possível remover o notebook');
  } catch (error) {
    return new Error((error as {message: string}).message || 'Erro ao remover notebook');
  }
};


const notebooksCampinasServices = {
  getAll,
  getById,
  create,
  update,
  remove
};

export default notebooksCampinasServices;