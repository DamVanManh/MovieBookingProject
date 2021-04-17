import React, { useState } from 'react';
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

import { Link, Button, Chip, Tooltip } from '@material-ui/core';
import { Link as LinkR } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FaceIcon from '@material-ui/icons/Face';
import { useSelector, useDispatch } from 'react-redux';
import { LOGOUT } from '../../reducers/constants/Auth';

import useStyles from './style'

export default function Header() {
  const { currentUser } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const theme = useTheme()
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const matches = useMediaQuery(theme.breakpoints.up('lg')); // tự động trả về true khi màn hình từ 1280 trở lên
  if (matches) {
    if (open) {
      setOpen(false)
    }
  }

  // đăng xuất
  const handleDelete = () => {
    dispatch({ type: LOGOUT })
  }
  // click menuIcon
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (

    <div className={classes.root}>

      {/* START HEADER */}
      <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: open, })} color='default' >

        <Toolbar className={classes.spaceBetween}>

          {/* logo */}
          <div>
            <img src="https://tix.vn/app/assets/img/icons/web-logo.png" alt="logo" style={{ height: 50 }} />
          </div>

          {/* quick link */}
          <div className={classes.linkTobody}>
            <List >
              <Link className={classes.link}>Lịch Chiếu</Link>
              <Link className={classes.link}>Cụm Rạp</Link>
              <Link className={classes.link}>Tin Tức</Link>
              <Link className={classes.link}>Ứng Dụng</Link>
            </List>
          </div>

          {/* user account */}
          <div className={classes.user}>
            {currentUser ?
              <List >
                <LinkR to="/profile">
                  <Chip variant="outlined" color="primary" label={currentUser.taiKhoan} icon={<FaceIcon />} />
                </LinkR>
                <Link>
                  <Chip variant="outlined" color="secondary" label="Đăng xuất" onClick={handleDelete} />
                </Link>
              </List>
              :
              <List >
                <LinkR to="/dangnhap">
                  <Button>Đăng Nhập</Button>
                </LinkR>

                <LinkR to="/dangky">
                  <Button variant="contained" color="primary" style={{ display: 'inline-block' }}>Đăng Ký</Button>
                </LinkR>
              </List>
            }
          </div>

          {/* menuIcon  */}
          <div className={classes.menuIcon}>
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
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
            <List style={{ marginLeft: "15px" }} >
              <Tooltip title="Đăng Xuất">
                <Chip variant="outlined" color="primary" label={currentUser.taiKhoan} icon={<FaceIcon />} />
              </Tooltip>
              <Link>
                <Chip variant="outlined" color="secondary" label="Đăng xuất" onClick={handleDelete} />
              </Link>
            </List>
            :
            <List >
              <LinkR to="/dangnhap">
                <Button>Đăng Nhập</Button>
              </LinkR>
              <LinkR to="/dangky">
                <Button variant="contained" color="primary" style={{ display: 'inline-block' }}>Đăng Ký</Button>
              </LinkR>
            </List>
          }
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}

