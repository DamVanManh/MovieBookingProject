import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

import { CLOSE_MODAL } from '../../reducers/constants/ModalTrailer';

const useStyles = makeStyles(theme => ({
  paper: {
    overflowY: "visible",
    backgroundColor: "black",
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    transform: "translate(50%,-50%)",
    border: '2px solid white',
    '&:focus': {
      outline: 'none'
    },
    '&:hover': { opacity: 0.7 },
    transition: "all .2s",
  },
  iframe: {
    width: "898px",
    height: "505px",
    [theme.breakpoints.down("lg")]: {
      width: "598px",
      height: "336px"
    },
  },
}));

export default function ModalTrailer() {
  const { open, urlYoutube } = useSelector(state => state.modalTrailerReducer)
  const dispatch = useDispatch()
  const classes = useStyles();

  // input: https://www.youtube.com/watch?v=IRG4qg8UXus
  //        https://www.youtube.com/embed/IRG4qg8UXus
  // output : IRG4qg8UXus
  const videoId = ((urlYoutube) => {
    let videoId
    const indexLastSlash = urlYoutube.lastIndexOf("/")
    const resultSliceFromSlash = urlYoutube.slice(indexLastSlash)

    videoId = resultSliceFromSlash

    const findWatch = resultSliceFromSlash.indexOf("watch");
    if (findWatch !== -1) {
      const indexLastEqual = resultSliceFromSlash.lastIndexOf("=")
      videoId = resultSliceFromSlash.slice(indexLastEqual);
    }
    return videoId
  })(urlYoutube)

  const handleClose = () => {
    dispatch({ type: CLOSE_MODAL, payload: { open: false } })
  }

  return (
    <Dialog open={open} onClose={handleClose} maxWidth='xl' classes={{ paper: classes.paper }}>
      <iframe className={classes.iframe} src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow='autoplay' title="trailer movie"></iframe>
      <IconButton className={classes.closeButton} onClick={handleClose} >
        <CloseIcon style={{ color: 'white' }} fontSize='small' />
      </IconButton>
    </Dialog>
  )
}
