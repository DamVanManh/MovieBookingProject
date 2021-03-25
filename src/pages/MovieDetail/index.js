import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getMovieDetail } from '../../reducers/actions/Movie';
import { Link, useParams } from "react-router-dom";
import useStyles from './style'
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { createMuiTheme, makeStyles, MuiThemeProvider } from "@material-ui/core";

// VERTICAL TAB MATERIAL
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
const verticalStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 500,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));
// SIMPLE TAB MATERIAL
function TabPanelSimple(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yPropsSimple(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const simpleStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    '& ul': {
      listStyle: 'none'
    }
  },
}));
// CHUNG CHO CẢ 2 LOẠI TAB
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


export default function MovieDetail() {

  //CSS TỪ FILE STYLE
  const classes = useStyles()

  //KHỞI TẠO CHO VERTICAL TAB
  const verticalCss = verticalStyles()
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // KHỞI TẠO CHO SIMPLE TAB
  const simpleCss = simpleStyles()
  const [valueSimple, setValueSimple] = React.useState(0);
  const handleChangeSimple = (event, newValue) => {
    setValueSimple(newValue);
  };

  //LẤY MÃ PHIM TỪ URL
  const param = useParams()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieDetail(param.movieId))
  }, [param.movieId])

  // LẤY DATA TỪ STORE VỀ
  const { movieDetail, loading, error } = useSelector((state) => state.movieReducer);
  console.log(loading)
  if (loading) {
    return <h1>loading</h1>
  }
  if (error) {
    return <div>{error}</div>
  }

  // OVERIDE LẠI CLASS CỦA MATERIAL
  const theme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200
      },
    },
    overrides: {
      MuiGrid: {
        container: {
          width: '80% !important',
          margin: '0 auto',
          position: 'relative',
          zIndex: 3,
        },
        item: {
          marginBottom: '10px'
        }
      },
      MuiBox: {
        root: {
          padding: 0
        }
      },
      MuiTabs: {
        flexContainer: {
          justifyContent: 'space-around'
        }
      }
    }
  });

  return (
    <div>

      {/* res HERE */}
      <MuiThemeProvider theme={theme}>
        {/* NỬA TRÊN */}
        <div className={classes.movieDetail} style={{ backgroundImage: `url(${movieDetail?.hinhAnh})` }}>
          <div className={classes.blur}></div>
          <Grid container direction='row' justify='space-around' alignItems='center'>

            <Hidden mdDown>
              <Grid item xs={4} className={classes.movieImg} >
                <img className="w-100" src={movieDetail?.hinhAnh} alt="movieDetail" />
              </Grid>
            </Hidden>

            <Grid item xs={12} md={4} >
              <p>{movieDetail?.ngayKhoiChieu.split('T', 1)}</p>
              <h3>{movieDetail?.tenPhim}</h3>
              <button className="btn btn-danger">Mua vé</button>
            </Grid>

            <Hidden mdDown>
              <Grid item xs={4}  >
                <h1 className={classes.movieRating}>{movieDetail?.danhGia}</h1>
              </Grid>
            </Hidden>

          </Grid>
        </div>

        {/* NỬA DƯỚI */}
        <div className={simpleCss.root} style={{ backgroundColor: 'rgb(10, 32, 41)' }}>

          <Tabs className={classes.movieInfo} value={value} onChange={handleChangeSimple} aria-label="simple tabs example">
            <Tab label="Lịch Chiếu" {...a11yPropsSimple(0)} />
            <Tab label="Thông Tin" {...a11yPropsSimple(1)} />
            <Tab label="Đánh Giá" {...a11yPropsSimple(2)} />
          </Tabs>

          <TabPanelSimple value={valueSimple} index={0}>
            <Grid style={{ backgroundColor: 'white' }} container direction='row' alignItems='flex-start'>
              <Grid item xs={12} md={2} >
                <Tabs
                  className={verticalCss.tabs}
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="simple tabs example">
                  {movieDetail?.heThongRapChieu?.map((item, index) => {
                    return (
                      <Tab key={index} label={<img style={{ width: '50px', height: '50px' }} src={item.logo} />} {...a11yProps(index)} />
                    )
                  })}
                </Tabs>
              </Grid>
              <Grid item xs={12} md={10}>
                {movieDetail?.heThongRapChieu.map((item1, index1) => {
                  // console.log(item1)
                  return (
                    <TabPanel value={value} index={index1} style={{ overflowY: 'scroll', height: '500px' }}>
                      {item1.cumRapChieu?.map((item2, index2) => {

                        return (
                          <div>

                            <div className={classes.nameTheater}>
                              <img src={item2.hinhAnh} alt="IMG" />
                              <span>{item2.tenCumRap}</span>
                            </div>

                            <Grid container direction="row" justify="flex-start" alignItems="center" >
                              {item2.lichChieuPhim?.map((item3, index3) => {
                                const gioChieu = item3.ngayChieuGioChieu.replace('T', '-')
                                return (
                                  <Grid item xs={3}  >
                                    <Link to={`/datve/${item3.maLichChieu}`}>
                                      {gioChieu}
                                    </Link>
                                  </Grid>
                                )
                              })}
                            </Grid>

                          </div>
                        )
                      })}
                    </TabPanel>
                  )
                })}
              </Grid>
            </Grid>
          </TabPanelSimple>

          <TabPanelSimple value={valueSimple} index={1}>

            <Grid style={{ color: 'white' }} container direction='row' justify='space-around' alignItems='flex-start'>
              <Grid container justify="center" item xs={12} md={8}>
                <ul>
                  <li>Ngày công chiếu</li>
                  <li>Đạo diễn</li>
                  <li>Diễn viên</li>
                  <li>Thể loại</li>
                  <li>Định dạng</li>
                  <li>Quốc gia SX</li>
                </ul>
                <ul>
                  <li>{movieDetail?.ngayKhoiChieu.split('T')[0]}</li>
                  <li>STRING</li>
                  <li>STRING</li>
                  <li>STRING</li>
                  <li>STRING</li>
                  <li>Việt Nam</li>
                </ul>
              </Grid>

              <Grid item xs={12} md={4}>
                <b>Nội dung</b>
                <p>{movieDetail?.moTa}</p>
              </Grid>
            </Grid>

          </TabPanelSimple>

          <TabPanelSimple value={valueSimple} index={2}>
            <Grid style={{ backgroundColor: 'white' }} container justify='center' alignItems='center'>
              {/* <div style={{ backgroundColor: 'white' }}>

              </div> */}
              Bạn nghĩ gì về phim này ?
            </Grid>
          </TabPanelSimple>

        </div>
      </MuiThemeProvider>
    </div>

  )
}
