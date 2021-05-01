import React, { useState, useEffect } from 'react';

import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import { Link, Button, Chip, Tooltip } from '@material-ui/core';
import { Link as LinkR } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FaceIcon from '@material-ui/icons/Face';
import { useSelector, useDispatch } from 'react-redux';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { useHistory, useLocation } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { LOGOUT } from '../../../reducers/constants/Auth';
import useStyles from './style'
import { FAKE_AVATAR } from '../../../constants/config';

export default function Header() {
  const { currentUser } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  let location = useLocation();
  const history = useHistory();
  const theme = useTheme()
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  // const matches = useMediaQuery(theme.breakpoints.up('lg')); // tự động trả về true khi màn hình từ 1280 trở lên
  // if (matches) {
  //   if (open) {
  //     setOpen(false)
  //   }
  // }

  // đăng xuất
  const handleLogout = () => {
    dispatch({ type: LOGOUT })
  }
  // đăng nhập
  const handleLogin = () => {
    history.push("/dangnhap", location.pathname) // truyền kèm location.pathname để đăng nhập xong quay lại
  }
  // đăng ký
  const handleRegister = () => {
    history.push("/dangky", location.pathname)
  }
  // click menuIcon
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const headMenu = ['Lịch Chiếu', 'Cụm Rạp', 'Tin Tức', 'Ứng Dụng']
  const handleClickHeadMenu = (i) => {
    console.log("index ", i, location.pathname)
    if (location.pathname !== "/") {
      history.push("/", i)
    }
  }
  useEffect(() => {

  }, [location.pathname])
  return (

    <div className={classes.root}>

      {/* START HEADER */}
      <AppBar position="fixed" classes={{ root: clsx(classes.appBar, { [classes.appBarShift]: open, }), }} color='default' >

        <Toolbar className={classes.spaceBetween}>

          {/* logo */}
          <div>
            <img src="/img/headTixLogo.png" alt="logo" style={{ height: 50 }} />
          </div>

          {/* quick link */}
          <div className={classes.linkTobody}>
            <List >
              {headMenu.map((item, i) => (
                <Link to="test1" spy={true} smooth={true} duration={500} className={classes.link} onClick={() => handleClickHeadMenu(i)}>{item}</Link>
              ))}
              {/* <span className={classes.link}>Lịch Chiếu</span>
              <span className={classes.link}>Cụm Rạp</span>
              <span className={classes.link}>Tin Tức</span>
              <span className={classes.link}>Ứng Dụng</span> */}
            </List>
          </div>

          {/* user account */}
          <div className={classes.user}>
            {currentUser ?
              <List dense disablePadding className={classes.auth}>
                <ListItem button classes={{ root: clsx(classes.itemAuth, classes.divide) }}>
                  <ListItemIcon classes={{ root: classes.icon }}>
                    <Avatar alt="avatar" className={classes.avatar} src={FAKE_AVATAR} />
                  </ListItemIcon>
                  <ListItemText primary={currentUser?.hoTen} />
                </ListItem>
                <ListItem button classes={{ root: classes.itemAuth }} onClick={handleLogout}>
                  <ListItemText primary="Đăng Xuất" />
                </ListItem>
              </List>
              :
              <List dense disablePadding className={classes.auth}>
                <ListItem button classes={{ root: clsx(classes.itemAuth, classes.divide) }} onClick={handleLogin}>
                  <ListItemIcon classes={{ root: classes.icon }}>
                    <AccountCircleIcon fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="Đăng Nhập" />
                </ListItem>
                <ListItem button classes={{ root: classes.itemAuth }} onClick={handleRegister}>
                  <ListItemText primary="Đăng Ký" />
                </ListItem>
              </List>
            }
          </div>

          {/* menuIcon  */}
          <div className={classes.menuIcon}>
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>

      {/* content open menu*/}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}

      >
        {/* icon left-right khi tắt/mở responsive */}
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>

        {/* Divider giúp phân chia số lượng nội dung theo ý mình */}
        <Divider />
        <List>
          {['Lịch Chiếu', 'Cụm Rạp', 'Tin Tức', 'Ứng Dụng'].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}

          {currentUser ?
            <List dense disablePadding className={classes.auth}>
              <ListItem button classes={{ root: clsx(classes.itemAuth, classes.divide) }}>
                <ListItemIcon classes={{ root: classes.icon }}>
                  <Avatar alt="avatar" className={classes.avatar} src={FAKE_AVATAR} />
                </ListItemIcon>
                <ListItemText primary={currentUser?.hoTen} />
              </ListItem>
              <ListItem button classes={{ root: classes.itemAuth }} onClick={handleLogout}>
                <ListItemText primary="Đăng Xuất" />
              </ListItem>
            </List>
            :
            <List dense disablePadding className={classes.auth}>
              <ListItem button classes={{ root: clsx(classes.itemAuth, classes.divide) }} onClick={handleLogin}>
                <ListItemIcon classes={{ root: classes.icon }}>
                  <AccountCircleIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText primary="Đăng Nhập" />
              </ListItem>
              <ListItem button classes={{ root: classes.itemAuth }} onClick={handleRegister}>
                <ListItemText primary="Đăng Ký" />
              </ListItem>
            </List>
          }
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}

