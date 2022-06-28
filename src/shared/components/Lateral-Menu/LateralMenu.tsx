import {
  Box,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Icon from "@mui/material/Icon";
import { useAppThemeContext } from "../../contexts/ThemeContext";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { UseDrawerContext } from "../../contexts/DrawerContext";
import { useState } from "react";

interface IListItemLinkProps {
  icon: string;
  label: string;
  to: string;
  onClick?: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({
  icon,
  label,
  to,
  onClick,
}) => {
  const navigate = useNavigate();

  const resolvePath = useResolvedPath(to);
  const match = useMatch({ path: resolvePath.pathname, end: true });

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };

  return (
    <ListItemButton selected={!!match} onClick={handleClick} sx={{ pl: 4 }}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

const LateralMenu: React.FC = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const { ThemeName, toogleTheme } = useAppThemeContext();
  const { isDrawer, toogleDrawer } = UseDrawerContext();
  const [openSP, setOpenSP] = useState(false);
  const [openCampinas, setOpenCampinas] = useState(false);

  const handleClickSP = () => {
    setOpenSP(!openSP);
  };

  const handleClickCampinas = () => {
    setOpenCampinas(!openCampinas);
  };

  return (
    <>
      <Drawer
        open={isDrawer}
        variant={smDown ? "temporary" : "permanent"}
        onClose={toogleDrawer}
      >
        <Box
          width={theme.spacing(30)}
          height="100vh"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <img src="https://minhaportaria.com/wp-content/uploads/2021/01/logo-footer-203120.png" />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav">
              <ListItemButton onClick={handleClickSP}>
                <ListItemIcon>
                  <Icon>domain</Icon>
                </ListItemIcon>
                <ListItemText primary="Central SP" />
                {openSP ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon>}
              </ListItemButton>
              <Collapse in={openSP} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemLink
                    icon="computer"
                    label="Notebooks"
                    to="notebooksSP"
                    // onClick={}
                  />
                  <ListItemLink icon="group" label="Usuários" to="usuariosSP" />
                  <ListItemLink
                    icon="keyboard"
                    label="Periféricos"
                    to="perifericosSP"
                  />
                </List>
              </Collapse>
              <ListItemButton onClick={handleClickCampinas}>
                <ListItemIcon>
                  <Icon>domain</Icon>
                </ListItemIcon>
                <ListItemText primary="Central Campinas" />
                {openCampinas ? (
                  <Icon>expand_less</Icon>
                ) : (
                  <Icon>expand_more</Icon>
                )}
              </ListItemButton>
              <Collapse in={openCampinas} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemLink
                    icon="computer"
                    label="Notebooks"
                    to="notebooksCampinas"
                    // onClick={}
                  />
                  <ListItemLink
                    icon="group"
                    label="Usuários"
                    to="usuariosCampinas"
                  />
                  <ListItemLink
                    icon="keyboard"
                    label="Periféricos"
                    to="perifericosCampinas"
                  />
                </List>
              </Collapse>
            </List>
          </Box>
          <Box>
            <List>
              <ListItemButton onClick={toogleTheme}>
                <ListItemIcon>
                  <Icon>
                    {ThemeName === "light" ? "light_mode" : "dark_mode"}
                  </Icon>
                </ListItemIcon>
                <ListItemText primary="Alterar Tema" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box marginLeft={!smDown ? theme.spacing(30) : theme.spacing(0)}>
        {children}
      </Box>
    </>
  );
};

export default LateralMenu;
