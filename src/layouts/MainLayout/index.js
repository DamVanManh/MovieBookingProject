
import React from 'react'

import Header from './Header'
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  top: {
    marginTop: 64,
    [theme.breakpoints.down("xs")]: {
      marginTop: 56,
    },
  },

}))
export default function MainLayout(props) {
  const classes = useStyles()

  return (
    <>
      <Header />
      <div className={classes.top}></div>
      {props.children}
      <Footer />
    </>
  )
}

