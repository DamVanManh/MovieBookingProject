import React, { useEffect, useState } from 'react'

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'

import useStyles from './style';
import BlockRating from '../../../../components/BlockRating';

export default function Mobile({ arrayData, value }) {
  const [data, setData] = useState({ dailyMovieList: [], comingMovieList: [] })
  const [openMore, setopenMore] = useState(false)
  const classes = useStyles({ openMore });
  const history = useHistory();

  useEffect(() => {
    const dailyMovieList = arrayData.dailyMovieList?.slice(0, 3)
    const comingMovieList = arrayData.comingMovieList?.slice(0, 3)
    const dailyMovieListMore = arrayData.dailyMovieList
    const comingMovieListMore = arrayData.comingMovieList
    if (!openMore) {
      setData(data => ({ ...data, dailyMovieList, comingMovieList }))
    }
    if (openMore) {
      setData(data => ({ ...data, dailyMovieList: dailyMovieListMore, comingMovieList: comingMovieListMore }))
    }
  }, [openMore, arrayData])

  const renderMovie = () => {
    const list = value.value ? data?.comingMovieList : data?.dailyMovieList
    return (
      list?.map((item) => (
        <div className={classes.movieItem} key={item.maPhim}>
          <div className={classes.movieContent} onClick={() => history.push(`/phim/${item.maPhim}`)}>
            <div className={classes.bgImg} style={{ backgroundImage: `url(${item.hinhAnh})` }}></div>
            <BlockRating danhGia={item.danhGia} />
            <span className={classes.c18}>C18</span>
          </div>
        </div>
      )))
  }

  return (
    <>
      {renderMovie()}
      <div className={classes.moreMovie}>
        <Button variant="outlined" onClick={() => setopenMore(true)} className={classes.moreMovieButton}>XEM THÊM</Button>
      </div>
    </>
  );
}

// cách thứ 2 của renderMovie(), không hiểu vì sao phải truyền variable vào(data, value, classes) thì mới run dc:
// ((data, value, classes) => {
//   const list = value.value ? data?.comingMovieList : data?.dailyMovieList
//   return (
//     list.map((item) => (
//       <div className={classes.movieItem} key={item.maPhim}>
//         <div className={classes.movieContent}>
//           <div className={classes.bgImg} style={{ backgroundImage: `url(${item.hinhAnh})` }}></div>
//           <BlockRating danhGia={item.danhGia} />
//           <span className={classes.c18}>C18</span>
//         </div>
//       </div>
//     )))}
// })(data, value, classes)

