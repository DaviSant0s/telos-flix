import { useState } from 'react';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Search, Home, Troubleshoot } from '@mui/icons-material';
import logo from './Brand.png'
import LoginButton from '../loginButton';
import CriateAccountButton from '../criateAccountButton';
import AppBarActions from '../appBarActions';
import CustomModal from '../customModal';
import LoginModalContent from '../loginModalContent';
import CreateAccountModalContent from '../createAccountModalContent';


/* , paddingTop: `${theme.mixins.toolbar.minHeight}px`  */
const drawerWidth = 240;

/* Estilização de quando ele tá aberto (open)*/
const openedMixin = (theme) => ({
  border: "none",
  width: drawerWidth,
  backgroundColor: "#212121",
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

/* Estilização de quando ele tá fechado (close)*/
const closedMixin = (theme) => ({
  border: "none",
  backgroundColor: "#212121",
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  backgroundColor: "#212121",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Header() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [contentToShow, setContentToShow] = useState(<></>)

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" elevation={0}>
        <Toolbar sx={{
          display: "flex",
          justifyContent: "space-between",
        }}>
          <img src={logo} alt="logo" />

          <AppBarActions
            actions={[
              <CriateAccountButton  
                onClick={() => {
                  setContentToShow(<CreateAccountModalContent/>);
                  setOpen(true);
                }}
              />,

              <LoginButton
                onClick={() => {
                  setContentToShow(<LoginModalContent />);
                  setOpen(true);
                }}
              />
            ]} 
          />

        </Toolbar>
      </AppBar>
      <Drawer variant="permanent">
        <DrawerHeader>
          <IconButton sx={{ color: "#fff" }}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <List
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}>
          {['Home', 'Search'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  color: "#fff",
                  minHeight: 48,
                  justifyContent: 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "#FAFAFA",
                    minWidth: 0,
                    mr: 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <Home /> : <Search />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      </Box>
      <CustomModal open={open} setOpen={setOpen} content={contentToShow} />
    </Box>

  );
}


