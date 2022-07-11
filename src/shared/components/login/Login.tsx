import {
  Box,
  Button,
  CardMedia,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import LogoMinhaPortaria from "../../../assets/img/MinhaPortaria/MinhaPortaria.png";
import LogoFocusTelecomm from "../../../assets/img/FocusTelecomm/FocusTelecomm.png";
import { AuthContext } from "../../contexts/AuthContext";

const Login: React.FC = () => {
  const [logo, setLogo] = useState(LogoMinhaPortaria);
  const [departamento, setDepartamento] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { singIn } = useContext(AuthContext);

  const handlerSingIn = (evente: React.FormEvent<HTMLFormElement>) => {
    evente.preventDefault();
    singIn({ username, password });
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        component={Paper}
        width={500}
        height={500}
        paddingX={5}
        borderRadius={2}
      >
        <form onSubmit={handlerSingIn}>
          <CardMedia component="img" image={LogoFocusTelecomm} />
          <TextField
            required
            fullWidth
            label="Usuario"
            name="username"
            value={username}
            sx={{ marginBottom: 4 }}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            fullWidth
            label="Senha"
            type="password"
            name="password"
            value={password}
            sx={{ marginBottom: 4 }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControl fullWidth sx={{ marginBottom: 4 }}>
            <InputLabel>Departamento</InputLabel>
            <Select
              label="Departamento"
              placeholder=""
              value={departamento}
              onChange={(e) => setDepartamento(e.target.value)}
            >
              <MenuItem value={1}>FocusTelecomm</MenuItem>
              <MenuItem value={2}>Minha Portaria</MenuItem>
              <MenuItem value={3}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Button fullWidth variant="contained" type="submit">
            Enviar
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
