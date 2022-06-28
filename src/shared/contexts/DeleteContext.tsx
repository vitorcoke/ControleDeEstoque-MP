import { GridSelectionModel } from '@mui/x-data-grid';
import { createContext, useContext, useState } from 'react';



interface IDeleteContextData {
  checkbox: GridSelectionModel,
  setCheckbox: (checkbox: GridSelectionModel) => void
}


const DeleteContext = createContext( {} as IDeleteContextData);


export const UseDeleteContext = () => useContext(DeleteContext);


const DeleteProvider: React.FC = ({children}) => {

  const [checkbox, setCheckbox] = useState<GridSelectionModel>([]);

  return(
    <DeleteContext.Provider value={{checkbox, setCheckbox}}>
      {children}
    </DeleteContext.Provider>
  );
};

export default DeleteProvider;