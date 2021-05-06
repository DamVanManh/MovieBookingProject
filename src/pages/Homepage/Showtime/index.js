import React, { useState, useRef, useEffect } from 'react'

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useSelector } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";

import Desktop from './Desktop';
import useStyles from './style';
import Mobile from './Mobile';
import { DATE_BEGIN_DANGCHIEU, DATE_END_DANGCHIEU, DATE_BEGIN_SAPCHIEU, DATE_END_SAPCHIEU } from '../../../constants/config';

export function SampleNextArrow(props) {
  const classes = useStyles();
  const { onClick } = props;
  return (
    <ArrowForwardIosRoundedIcon style={{ right: "-82px" }} onClick={onClick} className={classes.Arrow} />
  );
}

export function SamplePrevArrow(props) {
  const classes = useStyles();
  const { onClick } = props;
  return (
    <ArrowBackIosRoundedIcon style={{ left: "-82px" }} onClick={onClick} className={classes.Arrow} />
  );
}

const filterByDay = (movieList, tuNgay, denNgay) => {
  return movieList.filter(item => {
    // ms tính từ ngày gốc(1970) tới ngày item
    const timeItem = (new Date(item.ngayKhoiChieu)).getTime()
    // ms tính từ ngày gốc tới ngày lựa chọn
    const timeTuNgay = (new Date(tuNgay)).getTime()
    const timeDenNgay = (new Date(denNgay)).getTime()
    if (timeTuNgay <= timeItem && timeItem <= timeDenNgay) {
      return true
    }
    return false
  })
}

export default function SimpleTabs() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const [value, setValue] = useState({ value: 0, fade: true, notDelay: 0 });
  const { errorMovieList, movieList } = useSelector((state) => state.movieReducer);
  const timeout = useRef(null)
  const [arrayData, setarrayData] = useState({ dailyMovieList: null, comingMovieList: null })
  const classes = useStyles({ fade: value.fade, value: value.value, notDelay: value.notDelay });
  useEffect(() => {
    return () => {
      clearTimeout(timeout.current)
    }
  }, [])

  useEffect(() => { // movieList chứa tất cả các ngày, cần lọc ra theo ngày chỉ định
    let dailyMovieList = filterByDay(movieList, DATE_BEGIN_DANGCHIEU, DATE_END_DANGCHIEU)
    dailyMovieList = dailyMovieList?.slice(dailyMovieList.length - 16)
    let comingMovieList = filterByDay(movieList, DATE_BEGIN_SAPCHIEU, DATE_END_SAPCHIEU,)
    comingMovieList = comingMovieList?.slice(comingMovieList.length - 16)
    setarrayData({ dailyMovieList, comingMovieList })
  }, [movieList])

  const handleChange = (e, newValue) => {
    setValue(value => ({ ...value, notDelay: newValue, fade: false }));
    timeout.current = setTimeout(() => {
      setValue(value => ({ ...value, value: newValue, fade: true }))
    }, 100);
  };

  if (errorMovieList) {
    return <div>{errorMovieList}</div>
  }

  return (
    <div
      style={{ paddingTop: "80px" }}
      id="lichchieu"
    >
      <AppBar className={classes.appBar} position="static">
        <Tabs classes={{ root: classes.tabBar, flexContainer: classes.flexContainer, indicator: classes.indicator }} value={value.value} onChange={handleChange}>
          <Tab disableRipple className={`${classes.tabButton} ${classes.tabDangChieu}`} label="Đang chiếu" />
          <Tab disableRipple className={`${classes.tabButton} ${classes.tabSapChieu}`} label="Sắp chiếu" />
        </Tabs>
      </AppBar>
      <div className={classes.listMovie}>
        {isDesktop ? <Desktop arrayData={arrayData} value={value} /> : <Mobile arrayData={arrayData} value={value} />}
      </div>
    </div >

  );
}

