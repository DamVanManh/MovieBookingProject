
import React from 'react'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Header from '../../components/Header'
import Footer from "../../components/Footer";

export default function MainLayout(props) {
  const theme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 678,
        md: 736,
        lg: 768,
        xl: 992
      }
    }
  });
  return (

    <MuiThemeProvider theme={theme}>
      <Header />
      <div style={{ marginTop: 64, }}></div>
      {props.children}
      <Footer />
    </MuiThemeProvider>

  )
}

