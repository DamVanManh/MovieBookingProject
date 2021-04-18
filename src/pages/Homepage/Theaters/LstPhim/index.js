import React from 'react'
import useStyles from './style'

import ThoiLuongDanhGia from './thoiLuongDanhGia'
import { customScrollbar } from '../../../../styles/materialUi'
import { underLine } from '../../../../styles/materialUi'
import LstNgayChieu from './LstNgayChieu/'

export default function Index(props) {
  const classes = useStyles({ customScrollbar, underLine });
  return (
    <div className={classes.lstPhim}>{/* div root danh sách phim */}
      {props.lstPhim.map(phim => (
        <div className={classes.phim} key={phim.maPhim}>
          <div className={classes.phim__info}>{/* div thong tin phim */}
            <img src={phim.hinhAnh} className={classes.phim__img} alt={phim.tenPhim} />
            <div className={classes.phim__text}>
              <p className={classes.phim__text_name}>{phim.tenPhim}</p>
              <ThoiLuongDanhGia maPhim={phim.maPhim} injectCss={classes.phim__text_ltdg} />{/* phải tách riêng ra vì thời lượng và đánh giá lấy từ một api khác */}
            </div>
          </div>
          <div>{/* div danh sách ngày giờ chiếu */}
            <LstNgayChieu lstLichChieuTheoPhim={phim.lstLichChieuTheoPhim} />
          </div>
        </div>
      ))}
    </div>
  )
}
