import React from 'react'
import useStyles from './stylesBlockRating'
import Rating from '@material-ui/lab/Rating'

export default function BlockRating({ danhGia }) {
  const classes = useStyles();
  return (
    <div className={classes.film__point}>
      <p className={classes.point}>{danhGia}</p>
      <p className={classes.star}>
        <Rating name="halfratingread" classes={{ root: classes.rootStar, iconFilled: classes.iconFilled, iconEmpty: classes.iconEmpty }} value={(danhGia * 5) / 10} precision={0.5} readOnly />
      </p>
    </div>
  )
}
