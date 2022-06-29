import { Navigate, Route, Routes } from "react-router-dom";
import ChangeNotebooks from "../pages/minhaPortaria/ChangeNotebooks";
import NewNotebooks from "../pages/minhaPortaria/NewNotebooks";
import SeachNotebooks from "../pages/minhaPortaria/SeachNotebooks";
import Users from "../pages/minhaPortaria/Users";
import NewUser from "../pages/minhaPortaria/NewUser";
import ChangeUsers from "../pages/minhaPortaria/ChangeUsers";
import Notebooks from "../pages/minhaPortaria/Notebooks";
import Perifericos from "../pages/minhaPortaria/Perifericos";
import LoginAuth from "../pages/login/LoginAuth";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginAuth />} />
      <Route path="notebooksSP" element={<Notebooks />} />
      <Route path="notebooksSP/inserir" element={<NewNotebooks />} />
      <Route path="notebooksSP/pesquisar/:id" element={<SeachNotebooks />} />
      <Route path="notebooksSP/alterar/:id" element={<ChangeNotebooks />} />
      <Route path="usuariosSP" element={<Users />} />
      <Route path="usuariosSP/inserir" element={<NewUser />} />
      <Route path="usuariosSP/alterar/:id" element={<ChangeUsers />} />
      <Route path="perifericosSP" element={<Perifericos />} />
    </Routes>
  );
};

export default AppRoute;
