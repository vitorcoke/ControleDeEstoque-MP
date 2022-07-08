import {
  Box,
  Button,
  Icon,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ReactNode } from "react";
import { UseDrawerContext } from "../contexts/DrawerContext";

interface IBaseLayoutProps {
  title: string | ReactNode;
  toolbar?: ReactNode;
}

const BaseLayout: React.FC<IBaseLayoutProps> = ({
  children,
  toolbar,
  title,
}) => {
  const { toogleDrawer } = UseDrawerContext();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box height="100vh" display="flex" flexDirection="column" gap={1}>
      <Box
        padding={2}
        display="flex"
        alignItems="center"
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
        gap={1}
      >
        {smDown && (
          <Button onClick={toogleDrawer} color="inherit">
            <Icon>menu</Icon>
          </Button>
        )}

        <Typography variant={smDown ? "h6" : mdDown ? "h5" : "h4"}>
          {title}
        </Typography>
      </Box>

      <Box>{toolbar}</Box>

      <Box padding={4} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};

export default BaseLayout;
