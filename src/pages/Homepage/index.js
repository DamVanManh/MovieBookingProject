import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieList } from '../../reducers/actions/Movie';
import Slider from "react-slick";
import { Link } from "react-router-dom";
import News from "../../components/News";
import Carousel from "./Carousel";
import Ads from '../../components/Ads'
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AddIcon from "@material-ui/icons/Add";
import Dialog from '@material-ui/core/Dialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Seperate from '../../components/Seperate'

// import Theaters from '../../components/Theaters';
import Theaters from './Theaters'
// import useStyles from './style'
import Nav from './Nav'
// import PopupTrailer from './Carousel/popup';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }


export default function Homepage(props) {

  // const classes = useStyles();

  // // setup các biến để show trailer ra dialog
  // const [open, setOpen] = useState(false);
  // const theme = useTheme();
  // const sm = useMediaQuery(theme.breakpoints.down('sm'));
  // const md = useMediaQuery(theme.breakpoints.up('md'));
  // const [trailer, setTrailer] = useState("")
  // const handleTrailer = (newTrailer) => {
  //   setTrailer(newTrailer)
  //   handleButton()
  // }
  // // useSelector lấy data từ reducer về
  // const { movieList, loading, error } = useSelector((state) => state.movieReducer);

  // // useDispatch: dispatch action lấy api movieList và đẩy data trả về lên store ( đi 2 chiều)
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getMovieList())
  // }, [])

  // if (loading) {
  //   return <div>loading</div>
  // }
  // if (error) {
  //   return <div>{error}</div>
  // }

  // const ArrowLeft = (props) => (
  //   <button
  //     {...props}
  //     className={classes.prev}>
  //     <span className="material-icons" style={{ fontSize: '100px' }} >
  //       keyboard_arrow_left
  //     </span>
  //   </button>
  // );
  // const ArrowRight = (props) => (
  //   <button
  //     {...props}
  //     className={classes.next}>
  //     <span className="material-icons" style={{ fontSize: '100px' }} >
  //       keyboard_arrow_right
  //   </span>
  //   </button>
  // );
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   autoplay: false,
  //   rows: 2,
  //   arrows: true,
  //   prevArrow: <ArrowLeft />,
  //   nextArrow: <ArrowRight />,
  // };

  // const handleButton = () => {
  //   setOpen(!open)
  // }

  return (

    // bỏ container vì không fluid được component con: <div className='container'>
    <div >
      <Carousel />

      {/* <div className='showTime container' style={{ marginTop: 100 }}>
        <h2 className="text-center">Đang Chiếu</h2>
        <Slider {...settings}>
          {movieList.map((movie) => {
            return (
              <div className={classes.showTime__Item} key={movie.maPhim}>

                <i className={`${classes.play} fa fa-play`} onClick={() => handleTrailer(movie.trailer)}></i>
                <Link to={`/phim/${movie.maPhim}`} style={{ color: 'black', textDecoration: 'none' }}>
                  <div className={`${classes.itemMovie} item`} key={movie.maPhim}>
                    <div className={classes.card} >
                      <div className={classes.card__rating}>{movie.danhGia}</div>

                      <div className={classes.card__img}>
                        <div className={classes.over__lay}></div>
                        <img className="card-img-top" src={movie.hinhAnh} alt="movie" />
                      </div>

                      <div className={`${classes.card__footer} card-footer`} >
                        <p style={{ transition: 'all 1s' }} className="card-title">{movie.tenPhim}</p>
                        <button className={`${classes.card__booking} btn btn-danger`}>Đặt vé</button>
                      </div>
                    </div>

                  </div>
                </Link>
              </div>
            )
          })}
        </Slider>

        <Dialog
          onClick={() => handleButton()}
          open={open}
          maxWidth='md'
        >
          <iframe className={`${sm && classes.downRangeSm} ${md && classes.upKeyMd}`} src={trailer.indexOf('https') > -1 ? trailer : ""} frameBorder="0" allow='autoplay'></iframe>
          <IconButton className={classes.closeButton}  >
            <CloseIcon style={{ color: 'white' }} fontSize='small' onClick={() => handleButton()} />
          </IconButton>
        </Dialog>

      </div>
       */}

      <Nav />
      <Theaters />
      <News />
      <Ads />
    </div>


  )
}

