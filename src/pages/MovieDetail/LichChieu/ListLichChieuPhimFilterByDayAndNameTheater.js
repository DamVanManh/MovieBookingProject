import React, { useEffect, useState, Fragment } from 'react'
import BtnGoToCheckOut from '../../../components/BtnGoToCheckOut';

export default function ListLichChieuPhimFilterByDayAndNameTheater({ nameTheater, arrayLichChieuPhimFilterByDay }) {
  const [listLichChieuPhim, setListLichChieuPhim] = useState([])
  useEffect(() => {
    const listLichChieuPhim = arrayLichChieuPhimFilterByDay.filter(lcp => {
      if (lcp.tenCumRap === nameTheater) {
        return true
      }
      return false
    })
    setListLichChieuPhim(listLichChieuPhim)
  }, [])
  return (
    <div>
      {listLichChieuPhim?.map(lcp => (
        <Fragment key={lcp.maLichChieu} >
          <BtnGoToCheckOut lichChieuTheoPhim={lcp} />
        </Fragment>
      ))}
    </div>
  )
}
