import React from 'react'

import { useLocation, useHistory } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from "@material-ui/core"

const bgAuth = '/img/bgAuth.jpg'

const useStyles = makeStyles(theme => ({
  backgroundImage: {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${bgAuth})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",

  },
  bgBlueColor: {
    backgroundImage: "linear-gradient(to bottom,rgba(20,50,93,.9),rgba(8,22,48,.9))",
    width: 600,
    height: 700,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
    },
    borderRadius: 6,
    position: "relative",
    zIndex: 1000,
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    transform: "translate(50%,-50%)",
    border: '2px solid white',
    [theme.breakpoints.down("sm")]: {
      border: "none",
      top: 19,
      right: 24,
    },
    '&:focus': {
      outline: 'none'
    },
    '&:hover': { opacity: 0.7 },
    transition: "all .2s",
  },
}));

export default function AuthLayout(props) {
  const classes = useStyles();
  let location = useLocation();
  const history = useHistory();
  const handleClose = () => {

    if (!location.state) {
      location.state = "/"
    }
    history.push(location.state)
  }
  return (
    <div className={classes.backgroundImage}>
      <div className={classes.bgBlueColor}>
        {props.children}
        <IconButton className={classes.closeButton} onClick={handleClose} >
          <CloseIcon style={{ color: 'white' }} fontSize='small' />
        </IconButton>
      </div>
    </div>
  )
}
