
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

import { Link, Hidden, Button, Chip, Tooltip } from '@material-ui/core';
import { Link as LinkR } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FaceIcon from '@material-ui/icons/Face';
import { useSelector, useDispatch } from 'react-redux';
import { LOGOUT } from '../../reducers/constants/Auth';

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
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
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

  const matches = useMediaQuery(theme.breakpoints.up('lg')); // tự động trả về true khi màn hình từ 1280 trở lên

  // đăng xuất
  const { currentUser } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  // tự đóng Drawer lại nếu màn hình lớn
  if (matches) {
    if (open) {
      setOpen(false)
    }
  }
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    dispatch({ type: LOGOUT })
  }

  return (

    <div className={classes.root}>
      <CssBaseline />
      {/* {console.log("currentUser: ", currentUser, matches)} */}
      {/* phần hiển thị ngang */}
      <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: open, })} color='default' >
        <Toolbar className={classes.spaceBetween}>
          <div>
            <img src="https://tix.vn/app/assets/img/icons/web-logo.png" alt="logo" style={{ height: 50 }} />
          </div>

          <Hidden mdDown>
            <List >
              <Link className={classes.link}>Lịch Chiếu</Link>
              <Link className={classes.link}>Cụm Rạp</Link>
              <Link className={classes.link}>Tin Tức</Link>
              <Link className={classes.link}>Ứng Dụng</Link>
            </List>
          </Hidden>
          <Hidden mdDown>

            {currentUser ?
              <List >
                <Tooltip title="Đăng Xuất">
                  <Chip variant="outlined" color="primary" onClick={handleDelete} label={currentUser.taiKhoan} icon={<FaceIcon />} />
                </Tooltip>
              </List>
              :
              <List >
                <LinkR to="/dangnhap">
                  <Button>Đăng Nhập</Button>
                </LinkR>
                <LinkR to="/dangky">
                  <Button variant="contained" color="primary" style={{ display: 'inline-block' }}>
                    Đăng Ký
                </Button>
                </LinkR>
              </List>
            }
          </Hidden>
          <Hidden lgUp>
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
        <div className={classes.drawerHeader}>
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
          {currentUser ?
            <List style={{ marginLeft: "15px" }} >
              <Tooltip title="Đăng Xuất" >
                <Chip variant="outlined" color="primary" onClick={handleDelete} label={currentUser.taiKhoan} icon={<FaceIcon />} />
              </Tooltip>
            </List>
            :
            <List >
              <LinkR to="/dangnhap">
                <Button>Đăng Nhập</Button>
              </LinkR>
              <LinkR to="/dangky">
                <Button variant="contained" color="primary" style={{ display: 'inline-block' }}>
                  Đăng Ký
                </Button>
              </LinkR>
            </List>
          }
        </List>

        <Divider />
      </Drawer>

    </div>
  );
}

