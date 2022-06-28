import { Navigate, Route, Routes } from 'react-router-dom';
import ChangeNotebooks from '../pages/ChangeNotebooks';
import NewNotebooks from '../pages/NewNotebooks';
import SeachNotebooks from '../pages/SeachNotebooks';
import Users from '../pages/Users';
import NewUser from '../pages/NewUser';
import ChangeUsers from '../pages/ChangeUsers';
import Notebooks from '../pages/Notebooks';
import Perifericos from '../pages/Perifericos';


const AppRoute = () => {
  return (
    <Routes>
      <Route path='notebooksSP' element={<Notebooks/>} />
      <Route path='notebooksSP/inserir' element={<NewNotebooks/>} />
      <Route path='notebooksSP/pesquisar/:id' element={<SeachNotebooks/>} />
      <Route path='notebooksSP/alterar/:id' element={<ChangeNotebooks/>} />
      <Route path='*' element={<Navigate to='notebooksSP' />} />
      <Route path='usuariosSP' element={<Users/>} />
      <Route path='usuariosSP/inserir' element={<NewUser/>}/>
      <Route path='usuariosSP/alterar/:id' element={<ChangeUsers/>}/>
      <Route path='perifericosSP' element={<Perifericos/>}/>
    </Routes>
  );
};

export default AppRoute;