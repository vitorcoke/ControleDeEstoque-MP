import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes/Routes";
import LateralMenu from "./shared/components/Lateral-Menu/LateralMenu";
import DeleteProvider from "./shared/contexts/DeleteContext";
import DrawerProvider from "./shared/contexts/DrawerContext";
import AppThemeProvider from "./shared/contexts/ThemeContext";
import { LicenseInfo } from "@mui/x-license-pro";
import { AuthProvider } from "./shared/contexts/AuthContext";

const App = () => {
  LicenseInfo.setLicenseKey(`${process.env.REACT_APP_LICENSE_KEY}`);
  return (
    <AuthProvider>
      <DrawerProvider>
        <AppThemeProvider>
          <DeleteProvider>
            <BrowserRouter>
              <AppRoute />
            </BrowserRouter>
          </DeleteProvider>
        </AppThemeProvider>
      </DrawerProvider>
    </AuthProvider>
  );
};

export default App;
