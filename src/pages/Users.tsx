import ToolbarDetail from '../shared/components/Toolbar-Detail/ToolbarList';
import UsersList from '../shared/components/SaoPaulo/UsersList/UsersList';
import { UseDeleteContext } from '../shared/contexts/DeleteContext';
import BaseLayout from '../shared/layouts/BaseLayout';

const Users = () => {

  const { checkbox } = UseDeleteContext();

  const ButtonDelete  =  checkbox.length >= 1 ? true : false;

  return (
    <BaseLayout title='Usuários' toolbar={<ToolbarDetail mostrarBotaoExcluirPesquisarAlterarUsers={ButtonDelete} mostraBotaoNovoUser />}>
      <UsersList/>
    </BaseLayout>
  );
};

export default Users;