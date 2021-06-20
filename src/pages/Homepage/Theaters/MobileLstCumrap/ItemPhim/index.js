import React from 'react'

import { useStyles, Accordion, AccordionSummary, AccordionDetails } from './style'
import ThoiLuongDanhGia from '../../../../../components/ThoiLuongDanhGia/thoiLuongDanhGia';
import LstNgayChieu from '../../LstPhim/LstNgayChieu';

export default function ItemPhim({ phim, isMobileTheater }) {
  const { hinhAnh, tenPhim, maPhim, lstLichChieuTheoPhim } = phim
  const classes = useStyles()

  return (
    <>
      <div className={classes.cumRapItem} >
        <Accordion key={tenPhim} square>
          <AccordionSummary >
            <img className={classes.imgTheater} src={hinhAnh} alt="phim" />
            <div className={classes.phim__text}>
              <p className={classes.phim__text_name}>{tenPhim}</p>
              <ThoiLuongDanhGia maPhim={maPhim} />
            </div>
            <div style={{ clear: "both" }}></div>
          </AccordionSummary>
          <AccordionDetails >
            <LstNgayChieu lstLichChieuTheoPhim={lstLichChieuTheoPhim} isMobileTheater={isMobileTheater} />
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  )
}
