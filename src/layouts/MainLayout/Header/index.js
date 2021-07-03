import React, { useState, useEffect } from 'react';

import clsx from 'clsx';
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
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useSelector, useDispatch } from 'react-redux';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { useHistory, useLocation } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import { scroller } from 'react-scroll'

import { LOGOUT } from '../../../reducers/constants/Auth';
import useStyles from './style'
import { FAKE_AVATAR } from '../../../constants/config';
import { LOADING_BACKTO_HOME } from '../../../reducers/constants/Lazy';
import { getMovieList } from '../../../reducers/actions/Movie';
import { getTheaters } from '../../../reducers/actions/Theater';
const headMenu = [{ nameLink: 'Lịch chiếu', id: "lichchieu" }, { nameLink: 'Cụm rạp', id: "cumrap" }, { nameLink: 'Tin tức', id: "tintuc" }, { nameLink: 'Ứng dụng', id: "ungdung" }]

export default function Header() {
  const { currentUser } = useSelector((state) => state.authReducer);
  const { isLoadingBackToHome } = useSelector((state) => state.lazyReducer);
  const dispatch = useDispatch();
  let location = useLocation();
  const history = useHistory();
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles({ isDesktop, openDrawer });

  // nếu đang mở drawer mà chuyển sang màn hình lớn thì phải tự đóng lại
  useEffect(() => {
    if (isDesktop) {
      if (openDrawer) {
        setOpenDrawer(false)
      }
    }
  }, [isDesktop])

  useEffect(() => { // clicklink > push to home > scrollTo after loading
    if (!isLoadingBackToHome) {
      setTimeout(() => {
        scroller.scrollTo(location.state, {
          duration: 800,
          smooth: 'easeInOutQuart'
        })
      }, 200);
    }
  }, [isLoadingBackToHome])

  const handleLogout = () => {
    setOpenDrawer(false)
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
      dispatch(getMovieList())
      dispatch(getTheaters())
      return
    }
    dispatch({ type: LOADING_BACKTO_HOME })
    setTimeout(() => {
      history.push("/", "")
    }, 50);
  }
  const handleClickLink = (id) => {
    setOpenDrawer(false)
    if (location.pathname === "/") {
      scroller.scrollTo(id, {
        duration: 800,
        smooth: 'easeInOutQuart'
      })
    } else {
      dispatch({ type: LOADING_BACKTO_HOME })
      setTimeout(() => {
        history.push("/", id)
      }, 50);
    }
  }

  const handleUser = () => {
    history.push("/taikhoan")
    setOpenDrawer(false);
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
                <span key={link.id} className={classes.link} onClick={() => handleClickLink(link.id)}>{link.nameLink}</span>
              ))}
            </Grid>
          </div>

          {/* user account */}
          <div className={classes.user}>
            {currentUser ?
              <List disablePadding className={classes.auth}>
                <ListItem button classes={{ root: clsx(classes.itemAuth, classes.divide) }} onClick={handleUser}>
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
        anchor="right"
        onClose={handleDrawerClose}
        open={openDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        transitionDuration={300}
      >
        <div className={classes.drawerHeader}>
          {currentUser ?
            <ListItem button classes={{ root: clsx(classes.itemAuth, classes.divide, classes.hover) }} onClick={handleUser}>
              <ListItemIcon classes={{ root: classes.icon }}>
                <Avatar alt="avatar" className={classes.avatar} src={FAKE_AVATAR} />
              </ListItemIcon>
              <ListItemText className={classes.username} primary={currentUser?.hoTen} />
            </ListItem>
            :
            <ListItem button classes={{ root: classes.listItem }} onClick={handleLogin}>
              <ListItemIcon classes={{ root: classes.icon }}>
                <AccountCircleIcon fontSize="large" />
              </ListItemIcon>
              <span className={classes.link} style={{ fontWeight: 500 }}>Đăng Nhập</span>
            </ListItem>
          }
          <IconButton classes={{ root: classes.listItem }} onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <List>
          {headMenu.map((link) => (
            <span key={link.id} className={classes.itemMenu} onClick={() => handleClickLink(link.id)} >{link.nameLink}</span>
          ))}

          {currentUser ?
            <span className={classes.itemMenu} onClick={handleLogout}>Đăng Xuất</span>
            :
            <span className={classes.itemMenu} onClick={handleRegister}>Đăng Ký</span>
          }
        </List>
      </Drawer>
    </div>
  );
}
