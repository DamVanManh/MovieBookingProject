
import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from "./styles";
import './css.css'
const play = './img/carousel/play-video.png';

export default function PopupTrailer(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const classes = useStyles();
  // const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.up('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <img src={play} className={props.classImg} onClick={handleClickOpen} />
      <Dialog
        // fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        maxWidth='md'
      >
        {/* <iframe className={`${sm && classes.downRangeSm} ${md && classes.upKeyMd}`} src={props.banner.trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        <iframe className={`${sm && classes.downRangeSm} ${md && classes.upKeyMd}`} src={`${props.banner.trailer}?autoplay=1`} frameBorder="0" allow='autoplay'></iframe>

        <IconButton className={classes.closeButton} onClick={handleClose} >
          <CloseIcon style={{ color: 'white' }} fontSize='small' />
        </IconButton>
      </Dialog>
    </>
  );
}



