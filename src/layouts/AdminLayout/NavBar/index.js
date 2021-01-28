import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core';

import NavItem from './NavItem';

import MovieIcon from '@material-ui/icons/Movie';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PostAddIcon from '@material-ui/icons/PostAdd';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith'
};

const items = [
  {
    href: '/admin/movies',
    icon: MovieIcon,
    title: 'Quản lý Phim'
  },
  {
    href: '/admin/users',
    icon: PeopleAltIcon,
    title: 'Quản lý người dùng'
  },
  {
    href: '/',
    icon: PostAddIcon,
    title: 'Tạo lịch chiếu'
  },
  {
    href: '/',
    icon: AccountCircleIcon,
    title: 'Tài khoản'
  },
  {
    href: '/',
    icon: SettingsIcon,
    title: 'Settings'
  },
  {
    href: '/dangnhap',
    icon: ExitToAppIcon,
    title: 'Đăng nhập'
  },
  {
    href: '/dangky',
    icon: PersonAddIcon,
    title: 'Đăng ký'
  },
  {
    href: '/:',
    icon: ErrorOutlineIcon,
    title: 'Error'
  }
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // đây là nội dung cột bên trái
  const content = (
    
    // cái này là div để dàn thành cột
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      {/* đây là phần logo avatar user và tên user */}
      <Box
        // căn giữa cột
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2} // padding 2
      >
        
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={user.avatar}
          to="/app/account"
        />
        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />

      {/* đây là phần menu lựa chọn */}
      <Box p={2}>
        <List>
          {items.map((item) => (
            // NavItem hiện thị ra icon và title, dùng NavLink link tới nơi bạn click
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>

      {/* cái này để đẩy phần tử cuối cùng sát đáy */}
      <Box flexGrow={1} />

      {/* cái này là phần div dưới cùng */}
      <Box
        p={2}
        m={2}
        bgcolor="background.dark"
      >
        <Typography
          align="center"
          gutterBottom
          variant="h4"
        >
          Need more?
        </Typography>
        <Typography
          align="center"
          variant="body2"
        >
          Upgrade to PRO version and access 20 more screens
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          mt={2}
        >
          <Button
            color="primary"
            component="a"
            href="https://react-material-kit.devias.io"
            variant="contained"
          >
            See PRO version
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      {/* đây là giao diện mobile */}
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile} // đóng mở tùy thuộc vào bạn click
          variant="temporary" // kiểu temporary có một lớp phủ mờ hiện ra cho đến khi bạn chọn xong thì Drawer mới đóng lại
        >
          {content}
        </Drawer>
      </Hidden>
      {/* đây là giao diện desktop */}
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open // luôn luôn hiện Drawer
          variant="persistent" // kiểu persistent không có lớp phủ mờ khi hiện drawer
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;


// import React from 'react'

// export default function NavBar() {
//   return (
//     <div>
//       phần bên trái
//     </div>
//   )
// }
