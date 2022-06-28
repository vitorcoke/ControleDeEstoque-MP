import { Box, ThemeProvider } from "@mui/material";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import DarkMode from "../themes/Dark";
import LightMode from "../themes/Light";

interface IThemeContextData {
  ThemeName: "light" | "dark";
  toogleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

const AppThemeProvider: React.FC = ({ children }) => {
  const [ThemeName, setThemeName] = useState<"light" | "dark">("light");

  const toogleTheme = useCallback(() => {
    setThemeName((oldTheme) => (oldTheme === "light" ? "dark" : "light"));
  }, []);

  const theme = useMemo(() => {
    if (ThemeName === "light") return LightMode;
    return DarkMode;
  }, [ThemeName]);

  return (
    <ThemeContext.Provider value={{ ThemeName, toogleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default AppThemeProvider;
