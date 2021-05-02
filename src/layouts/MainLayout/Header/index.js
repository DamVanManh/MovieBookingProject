import React, { useState, useEffect } from 'react';

import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useSelector, useDispatch } from 'react-redux';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { useHistory, useLocation } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import { HashLink as Link } from 'react-router-hash-link';

import { LOGOUT } from '../../../reducers/constants/Auth';
import useStyles from './style'
import { FAKE_AVATAR } from '../../../constants/config';
const headMenu = [{ nameLink: 'Lịch chiếu', id: "lichchieu" }, { nameLink: 'Cụm rạp', id: "cumrap" }, { nameLink: 'Tin tức', id: "tintuc" }, { nameLink: 'Ứng dụng', id: "ungdung" }]

export default function Header() {
  const { currentUser } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  let location = useLocation();
  const history = useHistory();
  const theme = useTheme()
  const [openDrawer, setOpenDrawer] = useState(false);
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const classes = useStyles({ isDesktop, openDrawer });

  // nếu đang mở drawer mà chuyển sang màn hình lớn thì phải tự đóng lại
  useEffect(() => {
    if (isDesktop) {
      if (openDrawer) {
        setOpenDrawer(false)
      }
    }
  }, [isDesktop])

  const handleLogout = () => {
    dispatch({ type: LOGOUT })
  }
  const handleLogin = () => {
    history.push("/dangnhap", location.pathname) // truyền kèm location.pathname để đăng nhập xong quay lại
  }
  const handleRegister = () => {
    history.push("/dangky", location.pathname)
  }
  const handleClickLogo = () => {
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      return
    }
    history.push("/")
  }
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (

    <div className={classes.root}>

      {/* START HEADER */}
      <AppBar position="fixed" classes={{ root: clsx(classes.appBar, { [classes.appBarShift]: openDrawer, }), }} color='default' >

        <Toolbar className={classes.spaceBetween}>

          {/* logo */}
          <div className={classes.logo} onClick={handleClickLogo}>
            <img src="/img/headTixLogo.png" alt="logo" style={{ height: 50 }} />
          </div>
          <div className={classes.linkTobody}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              {headMenu.map((link) => (
                <Link key={link.id} className={classes.link} to={`/#${link.id}`} scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })} >{link.nameLink}</Link>
              ))}
            </Grid>
          </div>

          {/* user account */}
          <div className={classes.user}>
            {currentUser ?
              <List disablePadding className={classes.auth}>
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
              <List disablePadding className={classes.auth}>
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
              classes={{ root: classes.listItem }}
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
        open={openDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}

      >
        <div className={classes.drawerHeader}>
          {currentUser ?
            <ListItem button classes={{ root: clsx(classes.itemAuth, classes.divide) }}>
              <ListItemIcon classes={{ root: classes.icon }}>
                <Avatar alt="avatar" className={classes.avatar} src={FAKE_AVATAR} />
              </ListItemIcon>
              <ListItemText primary={currentUser?.hoTen} />
            </ListItem>
            :
            <ListItem button classes={{ root: classes.listItem }} onClick={handleLogin}>
              <ListItemIcon classes={{ root: classes.icon }}>
                <AccountCircleIcon fontSize="large" />
              </ListItemIcon>
              <span className={classes.link} >Đăng Nhập</span>
            </ListItem>
          }
          <IconButton classes={{ root: classes.listItem }} onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <List>
          {headMenu.map((link) => (
            <ListItem button classes={{ root: classes.listItem }} key={link.id}>
              <Link key={link.id} className={classes.link} to={`/#${link.id}`} scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })} >{link.nameLink}</Link>
            </ListItem>
          ))}

          {currentUser ?
            <ListItem button classes={{ root: classes.listItem }} onClick={handleLogout}>
              <span className={classes.link} >Đăng Xuất</span>
            </ListItem>
            :
            <ListItem button classes={{ root: classes.listItem }} onClick={handleRegister}>
              <span className={classes.link} >Đăng Ký</span>
            </ListItem>
          }
        </List>
      </Drawer>
    </div>
  );
}

