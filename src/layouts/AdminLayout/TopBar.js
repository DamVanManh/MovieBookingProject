import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

const TopBar = ({
  onMobileNavOpen,
  ...rest
}) => {
  const [notifications] = useState([]);
  return (

    // đây là phần thanh ngang nằm trên cùng
    <AppBar
      elevation={0}
      position="static"
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/">
          <img src="/img/headTixLogo.png" alt="logo" style={{ height: 50 }} />
        </RouterLink>

        {/* 1 thẻ div chiếm hết khoảng trống còn lại dể dồn các icon về 2 bên */}
        <Box flexGrow={1} />

        {/* cái icon chuông và đăng xuất */}
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <InputIcon />
          </IconButton>
        </Hidden>

        {/* cái icon menu */}
        <Hidden lgUp>
          <IconButton
            color="inherit"
            // nếu click thì thực hiện func đóng mở Nav được truyền vào từ cha
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

// báo lỗi nếu kiểu dữ liệu truyền vào props không đúng với yều cầu bên dưới
TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;




// import React from 'react'

// export default function TopBar() {
//   return (
//     <div>
//       phần trên cùng
//     </div>
//   )
// }
