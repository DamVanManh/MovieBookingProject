import React from 'react'

import useApiAddressTheater from '../../../utilities/useApiAddressTheater';
import useStyles from './style'

export default function Address({ nameTheater, arrayLichChieuPhimFilterByDay }) {
  const classes = useStyles()

  const maLichChieu = arrayLichChieuPhimFilterByDay.find(item => item.tenCumRap === nameTheater)?.maLichChieu
  const { diaChi } = useApiAddressTheater(maLichChieu)

  return (
    <p className={classes.address}>{diaChi}</p>
  )
}
