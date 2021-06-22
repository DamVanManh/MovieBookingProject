import React, { memo } from 'react'

import { useStyles, Accordion, AccordionSummary, AccordionDetails } from './style'
import ThoiLuongDanhGia from '../../../../../components/ThoiLuongDanhGia/thoiLuongDanhGia';
import LstNgayChieu from '../../LstPhim/LstNgayChieu';

function ItemPhim({ phim }) {
  const { hinhAnh, tenPhim, maPhim, lstLichChieuTheoPhim } = phim
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false);
  return (
    <>
      <div className={classes.cumRapItem} >
        <Accordion key={tenPhim} square expanded={expanded}>
          <AccordionSummary onClick={() => setExpanded(!expanded)}>
            <img className={classes.imgTheater} src={hinhAnh} alt="phim" />
            <div className={classes.phim__text}>
              <p className={classes.phim__text_name}>{tenPhim}</p>
              <ThoiLuongDanhGia maPhim={maPhim} />
            </div>
            <div style={{ clear: "both" }}></div>
          </AccordionSummary>
          <AccordionDetails >
            {expanded && <LstNgayChieu lstLichChieuTheoPhim={lstLichChieuTheoPhim} />}
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  )
}
export default memo(ItemPhim)