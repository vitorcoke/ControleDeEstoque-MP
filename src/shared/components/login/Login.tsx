import {
  Box,
  CardMedia,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import LogoMinhaPortaria from "../../../assets/img/MinhaPortaria/MinhaPortaria.png";
import LogoFocusTelecomm from "../../../assets/img/FocusTelecomm/FocusTelecomm.png";

const Login: React.FC = () => {
  const [logo, setLogo] = useState(LogoMinhaPortaria);
  const [departamento, setDepartamento] = useState("");

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
        padding={5}
        borderRadius={2}
      >
        <form>
          <CardMedia component="img" image={LogoFocusTelecomm} />
          <TextField
            required
            fullWidth
            label="Usuario"
            sx={{ marginBottom: 4 }}
          />
          <TextField
            fullWidth
            label="Senha"
            type="password"
            sx={{ marginBottom: 4 }}
          />
          <FormControl fullWidth>
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
        </form>
      </Box>
    </Box>
  );
};

export default Login;
