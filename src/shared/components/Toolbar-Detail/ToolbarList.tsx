import { Box, Button, Paper, useTheme, Icon } from '@mui/material';
import { GridSelectionModel } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { UseDeleteContext } from '../../contexts/DeleteContext';
import NotebooksSPServices from '../../services/sao_paulo/notebooks/NotebooksSPServices';
import UsersSPServices from '../../services/sao_paulo/users/UsersSPServices';

interface ILink {
  to: string;
  checkbox?: GridSelectionModel | undefined;
}

interface IToolbarList {
  mostrarBotaoExcluirPesquisarAlterarNotebooks?: boolean;
  mostrarBotaoExcluirPesquisarAlterarUsers?: boolean;
  mostrarBotaoNovoNotebooks?: boolean;
  mostraBotaoNovoUser?: boolean;
}


const LinkInserir: React.FC<ILink> = ({ to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <Button
      variant='contained'
      onClick={handleClick}
    >
      <Icon>add</Icon>
      Novo
    </Button>
  );

};

const LinkPesquisar: React.FC<ILink> = ({ to, checkbox = [] }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (checkbox.length > 1) {
      alert('Selecione apenas um registro para pesquisar');
    } else {
      navigate(to);
    }
  };

  return (
    <Button
      variant='contained'
      onClick={handleClick}
    >
      <Icon>search</Icon>
      Pesquisar
    </Button>
  );

};

const LinkAlterar: React.FC<ILink> = ({ to, checkbox = [] }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (checkbox.length > 1) {
      alert('Selecione apenas um registro para alterar');
    } else {
      navigate(to);
    }
  };

  return (
    <Button
      variant='contained'
      onClick={handleClick}
    >
      <Icon>create</Icon>
      Alterar
    </Button>
  );

};




const ToolbarDetail: React.FC<IToolbarList> = ({
  mostrarBotaoExcluirPesquisarAlterarNotebooks = false,
  mostrarBotaoNovoNotebooks = false,
  mostrarBotaoExcluirPesquisarAlterarUsers = false,
  mostraBotaoNovoUser = false
}) => {

  const { checkbox } = UseDeleteContext();
  const theme = useTheme();



  const handleClickDelete = () => {
    checkbox.map(item => {
      NotebooksSPServices.remove(Number(item));
      return setTimeout(() => {
        window.location.reload();
      }, 100);
    });
  };

  const handleClickDeleteUsers = () => {
    checkbox.map(item => {
      UsersSPServices.remove(Number(item));
      return setTimeout(() => {
        window.location.reload();
      }, 100);
    });
  };

  return (
    <Box
      height={theme.spacing(7)}
      marginX={1}
      padding={1}
      paddingX={1}
      display='flex'
      alignItems='center'
      gap={1}
      component={Paper}
    >
      {mostraBotaoNovoUser && (
        <Box>
          <LinkInserir to='/usuariosSP/inserir' />
        </Box>
      )}

      {mostrarBotaoExcluirPesquisarAlterarUsers && (
        <Box>
          <LinkAlterar to={`/usuariosSP/alterar/${checkbox}`} checkbox={checkbox} />
        </Box>
      )}

      {mostrarBotaoExcluirPesquisarAlterarUsers && (
        <Button
          variant='contained'
          onClick={handleClickDeleteUsers}
        >
          <Icon>delete</Icon>
          Excluir
        </Button>
      )}


      {mostrarBotaoNovoNotebooks && (
        <Box>
          <LinkInserir to='/notebooksSP/inserir' />
        </Box>
      )}
      {mostrarBotaoExcluirPesquisarAlterarNotebooks && (
        <Box>
          <Button
            variant='contained'
            onClick={handleClickDelete}
          >
            <Icon>delete</Icon>
            Excluir
          </Button>
        </Box>
      )}
      {mostrarBotaoExcluirPesquisarAlterarNotebooks && (
        <Box>
          <LinkAlterar to={`/notebooksSP/alterar/${checkbox}`} checkbox={checkbox} />
        </Box>
      )}
      {mostrarBotaoExcluirPesquisarAlterarNotebooks && (
        <Box>
          <LinkPesquisar to={`/notebooksSP/pesquisar/${checkbox}`} checkbox={checkbox} />
        </Box>
      )}

    </Box>

  );
};

export default ToolbarDetail;