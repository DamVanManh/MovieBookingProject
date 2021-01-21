// import React from 'react';
// import { Link, useHistory, useLocation, useParams } from "react-router-dom";
// import Login from '../../pages/Login/';
// export default function Header() {
//   const history = useHistory();
//   const location = useLocation();
//   const param = useParams();
//   console.log('headerLLL', history, location, param)
//   return (
//     <div className='w-100 d-flex justify-content-between'>
//       <div>movie</div>
//       <ul>
//         <li>
//           <Link to='dangnhap' >login{Login}</Link>
//         </li>
//       </ul>

//     </div>
//   )
// }


import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { Link, Hidden, Button } from '@material-ui/core';
import { Link as LinkR } from "react-router-dom";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // drawerHeader: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   padding: theme.spacing(0, 1),
  //   // necessary for content to be below app bar
  //   ...theme.mixins.toolbar,
  //   justifyContent: 'flex-start',
  // },
  // content: {
  //   flexGrow: 1,
  //   padding: theme.spacing(3),
  //   transition: theme.transitions.create('margin', {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  //   marginRight: -drawerWidth,
  // },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  // class tự thêm
  spaceBetween: {
    justifyContent: 'space-between'
  },
  link: {
    margin: '0 10px',
    cursor: 'pointer'
  },
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (

    <div className={classes.root}>
      <CssBaseline />

      {/* phần hiển thị ngang */}
      <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: open, })} color='default' >
        <Toolbar className={classes.spaceBetween}>
          <div>
            <img src="https://tix.vn/app/assets/img/icons/web-logo.png" alt="logo" style={{ height: 50 }} />
          </div>

          <Hidden smDown>
            <List >
              <Link className={classes.link}>Lịch Chiếu</Link>
              <Link className={classes.link}>Cụm Rạp</Link>
              <Link className={classes.link}>Tin Tức</Link>
              <Link className={classes.link}>Ứng Dụng</Link>
            </List>
          </Hidden>
          <Hidden xsDown>
            <List >
              <LinkR to="/dangnhap">
                <Link className={classes.link} >Đăng Nhập</Link>
              </LinkR>
              <LinkR to="/dangky">
                <Button variant="contained" color="primary" style={{ display: 'inline-block' }}>
                  Đăng Ký
              </Button>
              </LinkR>
            </List>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
              smUp
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>

      {/* <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
        </Typography>
      </main> */}


      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {/* className={classes.drawerHeader} */}
        <div >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        {/* phần hiển thị khi nhấn button menu */}
        <Divider />
        <List>
          {['Lịch Chiếu', 'Cụm Rạp', 'Tin Tức', 'Ứng Dụng'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{
                index % 2 === 0 ? <InboxIcon /> : <MailIcon />

              }</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          <Hidden smUp>
            <Link className={classes.link} >Đăng Nhập</Link>
            <Button variant="contained" color="primary">
              Đăng Ký
                </Button>
          </Hidden>
        </List>

        <Divider />
      </Drawer>

    </div>
  );
}

