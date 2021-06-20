import React from 'react'

import useStyles from './style'
import { colorTheater } from '../../constants/theaterData'

export default function TenCumRap({ tenCumRap, testSize }) {

  const classes = useStyles({ color: colorTheater[tenCumRap?.slice(0, 3).toUpperCase()], testSize })

  return <p className={classes.text__first}><span>{tenCumRap?.split("-")[0]}</span><span className={classes.text__second}>-{tenCumRap?.split("-")[1]}</span></p>
}
