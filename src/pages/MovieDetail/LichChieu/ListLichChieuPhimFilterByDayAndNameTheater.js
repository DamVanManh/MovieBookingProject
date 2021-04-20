import React, { useEffect, useState, Fragment } from 'react'
import BtnGoToCheckOut from '../../../components/BtnGoToCheckOut';

export default function ListLichChieuPhimFilterByDayAndNameTheater({ nameTheater, arrayLichChieuPhimFilterByDay }) {
  const [listLichChieuPhim, setListLichChieuPhim] = useState([])
  useEffect(() => {
    // từ arrayLichChieuPhimFilterByDay, filter ra item trùng nameTheater
    const listLichChieuPhim = arrayLichChieuPhimFilterByDay.filter(lcp => {
      if (lcp.tenCumRap === nameTheater) {
        return true
      }
      return false
    })
    setListLichChieuPhim(listLichChieuPhim)
  }, [arrayLichChieuPhimFilterByDay])

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
