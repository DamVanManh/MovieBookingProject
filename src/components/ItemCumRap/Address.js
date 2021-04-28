import React from 'react'

import useApiAddressTheater from '../../utilities/useApiAddressTheater';

export default function Address({ maLichChieu }) {
  const { diaChi } = useApiAddressTheater(maLichChieu)
  const style = {
    fontSize: 14,
    color: "#9b9b9b"
  }
  return (
    <p style={style}>{diaChi}</p>
  )
}
