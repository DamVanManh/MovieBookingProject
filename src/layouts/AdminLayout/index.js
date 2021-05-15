
import React, { useState } from 'react';

import { SnackbarProvider } from 'notistack';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import NavBar from './NavBar';
import TopBar from './TopBar';

export default function AdminLayout(props) {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');
  return (
    <SnackbarProvider maxSnack={3}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <div className="row">
        <div style={{ width: 255 }}>
          {/* đây là phần NavBar nằm bên trái, có thể đóng mở khi màn hình nhỏ */}
          <NavBar
            onMobileClose={() => setMobileNavOpen(false)}
            openMobile={isMobileNavOpen}
          />
        </div>
        <div style={{ width: isMobile ? "100%" : "calc(100% - 255px)" }}>
          {/* đây là nội dung chính: UserManagement, MoviesManagement, ReateShowtime */}
          {props.children}
        </div>
      </div>
    </SnackbarProvider>
  )
}

