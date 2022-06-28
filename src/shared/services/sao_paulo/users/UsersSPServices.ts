import Api from '../../axios-config';

interface IUsersNotebooks{
  name: string;
  departament: string;
}

const getAll = async () =>{
  try {
    const urlRelativa = '/usersSP';
    const {data} = await Api.get(urlRelativa);

    if(data){
      return data;
    }

    return new Error('Não foi possível obter os usuários');
  }catch(error){
    return new Error((error as {message: string}).message || 'Erro ao listar notebooks');
  }
};


const getById = async (id: number) =>{
  try {
    const urlRelativa = `/usersSP/${id}`;
    const {data} = await Api.get(urlRelativa);

    if(data){
      return data;
    }

    return new Error('Não foi possível obter os usuários');
  }catch(error){
    return new Error((error as {message: string}).message || 'Erro ao listar notebooks');
  }
};

const create = async (users: IUsersNotebooks) =>{
  try {
    const urlRelativa = '/usersSP';
    const {data} = await Api.post(urlRelativa, users);

    if(data){
      return data;
    }

    return new Error('Não foi possível criar o usuario');
  } catch (error) {
    return new Error((error as {message: string}).message || 'Erro ao criar usuario');
  }
};

const update = async (id: number, users: IUsersNotebooks) =>{
  try {
    const urlRelativa = `/usersSP/${id}`;
    const {data} = await Api.put(urlRelativa, users);
    if(data){
      return data;
    }
    return new Error('Não foi possível atualizar o usuario');
  } catch (error) {
    return new Error((error as {message: string}).message || 'Erro ao atualizar usuario');
  }
};

const remove = async (id: number) =>{
  try {
    const urlRelativa = `/usersSP/${id}`;
    await Api.delete(urlRelativa);

    return new Error('Não foi possível deletar o usuario');
  } catch (error) {
    return new Error((error as {message: string}).message || 'Erro ao deletar usuario');
  }
};

const UsersSPServices = {
  getAll,
  getById,
  create,
  update,
  remove,
};

export default UsersSPServices;