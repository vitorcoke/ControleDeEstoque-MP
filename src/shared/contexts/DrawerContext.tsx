import { createContext, useCallback, useContext, useState } from 'react';


interface IDrawerContextData {
  isDrawer: boolean,
  toogleDrawer: () => void
}
const DrawerContext = createContext({} as IDrawerContextData);

export const UseDrawerContext = () => useContext(DrawerContext);


const DrawerProvider: React.FC = ({ children }) => {

  const [isDrawer, setIsDrawer] = useState(false);


  const toogleDrawer = useCallback(() => {
    setIsDrawer(oldIsDrawer => !oldIsDrawer);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawer, toogleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;