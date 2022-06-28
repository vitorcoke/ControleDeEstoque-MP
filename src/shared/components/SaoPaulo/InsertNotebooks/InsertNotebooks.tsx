import { Box, Paper, TextField, Button, Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import NotebooksSPServices from "../../../services/sao_paulo/notebooks/NotebooksSPServices";

const InsertNotebooks = () => {
  const [data, setData] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [mac, setMac] = useState("");
  const [serial, setSerial] = useState("");
  const [patrimonio, setPatrimonio] = useState(0);
  const [openSucess, setOpenSucess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      NotebooksSPServices.create({
        data,
        marca,
        modelo,
        mac,
        serial,
        patrimonio,
      });
      setData("");
      setMarca("");
      setModelo("");
      setMac("");
      setSerial("");
      setPatrimonio(0);
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
      maxHeight="70vh"
      overflow="auto"
    >
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column">
          <TextField
            required
            type="date"
            margin="normal"
            value={data}
            label="Data"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setData(e.target.value)}
          />
          <TextField
            required
            margin="normal"
            value={marca}
            label="Marca"
            onChange={(e) => setMarca(e.target.value)}
          />
          <TextField
            required
            margin="normal"
            value={modelo}
            label="Modelo"
            onChange={(e) => setModelo(e.target.value)}
          />
          <TextField
            required
            margin="normal"
            value={mac}
            label="MAC"
            onChange={(e) => setMac(e.target.value)}
          />
          <TextField
            required
            margin="normal"
            value={serial}
            label="N° Serial"
            onChange={(e) => setSerial(e.target.value)}
          />
          <TextField
            required
            margin="normal"
            value={patrimonio}
            label="Patrimônio"
            onChange={(e) => setPatrimonio(Number(e.target.value))}
          />
          <Box display="flex" justifyContent="end" width="100%" marginTop={3}>
            <Button type="submit" variant="contained">
              Salvar
            </Button>
          </Box>
        </Box>
      </form>
      <Snackbar
        open={openSucess}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="success" color="success" variant="filled">
          Notebook cadastrado com sucesso!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openError}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="error" color="error" variant="filled">
          Erro ao cadastrar notebook!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default InsertNotebooks;
