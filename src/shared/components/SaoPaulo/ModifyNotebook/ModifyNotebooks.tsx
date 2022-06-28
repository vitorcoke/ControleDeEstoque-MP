import { Box, Paper, TextField, Button, Snackbar, Alert } from '@mui/material';
import { useEffect, useState } from 'react';
import { UseDeleteContext } from '../../../contexts/DeleteContext';
import NotebooksSPServices from '../../../services/sao_paulo/notebooks/NotebooksSPServices';


interface INotebooksGet {
  data: string;
  marca: string;
  modelo: string;
  mac: string;
  serial: string;
  patrimonio: number;
}


const ModifyNotebooks = () => {

  const [notebooks, setNotebooks] = useState<INotebooksGet>({ data: '', marca: '', modelo: '', mac: '', serial: '', patrimonio: 0 });
  const [openSucess, setOpenSucess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const { checkbox } = UseDeleteContext();



  useEffect(() => {
    NotebooksSPServices.getById(Number(checkbox))
      .then(res => setNotebooks(res));
  }, []);

  console.log(notebooks);


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      NotebooksSPServices.update(Number(checkbox), { data: notebooks.data, marca: notebooks.marca, modelo: notebooks.modelo, mac: notebooks.mac, serial: notebooks.serial, patrimonio: notebooks.patrimonio });
      setOpenSucess(true);
      setTimeout(() => setOpenSucess(false), 3000);
    } catch (error) {
      setOpenError(true);
      setTimeout(() => setOpenError(false), 3000);
    }
  };

  return (
    <Box
      paddingX={9}
      paddingY={5}
      component={Paper}
    >
      <form
        onSubmit={handleSubmit}
      >
        <Box
          display='flex'
          flexDirection='column'
        >
          <TextField
            type='date'
            margin='normal'
            label='Data'
            InputLabelProps={{
              shrink: true,
            }}
            value={notebooks.data}
            onChange={e => setNotebooks({ ...notebooks, data: e.target.value })}
          />
          <TextField
            margin='normal'
            label='Marca'
            value={notebooks.marca}
            onChange={e => setNotebooks({ ...notebooks, marca: e.target.value })}

          />
          <TextField
            margin='normal'
            label='Modelo'
            value={notebooks.modelo}
            onChange={e => setNotebooks({ ...notebooks, modelo: e.target.value })}

          />
          <TextField
            margin='normal'
            label='MAC'
            value={notebooks.mac}
            onChange={e => setNotebooks({ ...notebooks, mac: e.target.value })}

          />
          <TextField
            margin='normal'
            label='N° Serial'
            value={notebooks.serial}
            onChange={e => setNotebooks({ ...notebooks, serial: e.target.value })}

          />
          <TextField
            margin='normal'
            label='Patrimônio'
            value={notebooks.patrimonio}
            onChange={e => setNotebooks({ ...notebooks, patrimonio: Number(e.target.value) })}

          />

          <Box
            display='flex'
            justifyContent='end'
            width='100%'
            marginTop={3}
          >
            <Button
              type='submit'
              variant='contained'
            >
              Salvar
            </Button>
          </Box>
        </Box>
      </form>
      <Snackbar
        open={openSucess}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity='success' color='success' variant='filled' >Notebook cadastrado com sucesso!</Alert>
      </Snackbar>
      <Snackbar
        open={openError}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity='error' color='error' variant='filled' >Erro ao cadastrar notebook!</Alert>
      </Snackbar>

    </Box>
  );
};

export default ModifyNotebooks;