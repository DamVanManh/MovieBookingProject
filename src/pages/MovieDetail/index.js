import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getMovieDetail } from '../../reducers/actions/Movie';
import { Link, useParams } from "react-router-dom";
import useStyles from './style'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function MovieDetail() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles()
  const param = useParams()
  // console.log(param.movieId)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieDetail(param.movieId))
  }, [param.movieId])

  const { movieDetail, loading, error } = useSelector((state) => state.movieReducer);
  // console.log(loading)
  if (loading) {
    return <h1>loading</h1>
  }
  if (error) {
    return <div>{error}</div>
  }
  console.log(movieDetail)
  return (
    <div>

      <div className={classes.movie__detail}>
        <div className={classes.movie__img}>
          <img className="w-100 h-100" src={movieDetail?.hinhAnh} alt="movieDetail" />
        </div>
        <div className={classes.movie__name}>
          <h3>Tên phim: {movieDetail?.tenPhim}</h3>
        </div>
        <div className={classes.movie__rating}>
          <h3>Đánh giá: {movieDetail?.danhGia}</h3>
        </div>
      </div>

      {/* <AppBar position="static">
        
      </AppBar> */}

      <div>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          {movieDetail?.heThongRapChieu?.map((item, index) => {
            return (
              <Tab label={item.tenHeThongRap} {...a11yProps(index)} />
            )
          })}
        </Tabs>
      </div>

      {movieDetail?.heThongRapChieu.map((item1, index1) => {
        // console.log(item1)
        return (
          <TabPanel value={value} index={index1}>
            {item1.cumRapChieu?.map((item2, index2) => {
              return (
                <div style={{ border: '1px solid black' }}>
                  <p>{item2.tenCumRap}</p>
                  <div className="row">
                    {item2.lichChieuPhim?.map((item3, index3) => {
                      return (
                        <Link to={`/datve/${item3.maLichChieu}`} className="col-sm-3">
                          {/* <button className="btn btn-success">
                            {item3.ngayChieuGioChieu}
                          </button> */}
                          {item3.ngayChieuGioChieu}
                        </Link>
                      )
                    })}
                  </div>

                </div>
              )
            })}
          </TabPanel>
        )
      })}


    </div>

  )
}
