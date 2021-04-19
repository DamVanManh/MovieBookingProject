import React, { Component, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import star from './logo/star1.png'
import Dialog from '@material-ui/core/Dialog';
import { useTheme } from '@material-ui/core/styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './styles';
import './movie.scss'

function MovieItem(props) {

  // setup các biến để show trailer ra dialog
  const history = useHistory();
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const [trailer, setTrailer] = useState("")
  const handleTrailer = (newTrailer) => {
    setTrailer(newTrailer)
    handleButton()
  }
  const handleButton = () => {
    setOpen(!open)
  }


  return (
    <div style={{
      padding: '7px',
      cursor: 'pointer',
    }} >
      <div className="film">
        <div className="film__img">
          <div className="film__poster">
            <img className="poster" src={props.item.hinhAnh} alt="poster" />
            {/* hieu ung  */}
            <div className="film__overlay" onClick={() => history.push(`/phim/${props.item.maPhim}`)} />
            <div className="play__trailer">
              {/* <a href="#">
                                <i className="fa fa-play" />
                            </a> */}
              <a onClick={() => handleTrailer(props.item.trailer)}>
                <i className={`${classes.play} fa fa-play  playVideo`} ></i>
              </a>

            </div>
          </div>

          <div className="film__point">
            <p className="point">{props.item.danhGia}</p>
            <p className="star">
              <img src={star} alt="#" />
              <img src={star} alt="#" />
              <img src={star} alt="#" />
              <img src={star} alt="#" />
              <img src={star} alt="#" />
            </p>
          </div>
        </div>
        <div className="film__content">
          <p className="film__name">{props.item.tenPhim}</p>
          <div className="film__button">
            {/* <a href="#">MUA VÉ</a> */}
            <Link to={`/phim/${props.item.maPhim}`} >
              MUA VÉ
                        </Link>
          </div>
        </div>
      </div>

      <Dialog
        onClick={() => handleButton()}
        open={open}
        maxWidth='md'
        classes={{ paper: classes.paper }}
      >
        <iframe className={`${sm && classes.downRangeSm} ${md && classes.upKeyMd}`} src={trailer.indexOf('https') > -1 ? trailer : ""} frameBorder="0" ></iframe>
        <IconButton className={classes.closeButton}  >
          <CloseIcon style={{ color: 'white' }} fontSize='small' onClick={() => handleButton()} />
        </IconButton>
      </Dialog>
    </div>


  )

}
export default MovieItem
