import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes/Routes";
import LateralMenu from "./shared/components/Lateral-Menu/LateralMenu";
import DeleteProvider from "./shared/contexts/DeleteContext";
import DrawerProvider from "./shared/contexts/DrawerContext";
import AppThemeProvider from "./shared/contexts/ThemeContext";
import { LicenseInfo } from "@mui/x-license-pro";

LicenseInfo.setLicenseKey("YOUR_LICENSE_KEY");

const App = () => {
  return (
    <DrawerProvider>
      <AppThemeProvider>
        <DeleteProvider>
          <BrowserRouter>
            <LateralMenu>
              <AppRoute />
            </LateralMenu>
          </BrowserRouter>
        </DeleteProvider>
      </AppThemeProvider>
    </DrawerProvider>
  );
};

export default App;
