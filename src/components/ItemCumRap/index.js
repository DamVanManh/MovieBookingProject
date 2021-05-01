import React, { Fragment, useEffect, useState, useRef } from 'react'

import { useStyles } from './style'
import Address from './Address'
import FakeImgTheater from '../FakeImgTheater/fakeImgTheater'
import BtnGoToCheckOut from '../BtnGoToCheckOut'
import TenCumRap from '../TenCumRap'

export default function ItemCumRap({ tenCumRap, maLichChieu, lichChieuPhim }) {
  const cumRapItem = useRef(null)
  const [data, setdata] = useState({ open: true, heightSave: 0, heightApply: "fit-content", stepTwo: 0, })
  const classes = useStyles()

  useEffect(() => { // run sau khi handleCollap được thực thi
    if (data.open && (data.heightSave !== 0)) { // đang mở thì đóng lại, (data.height !== 0) để ngăn chặn componentDitmount
      setdata(data => ({ ...data, open: false, heightApply: 90 }))
    }
    if (!data.open && (data.heightSave !== 0)) {
      setdata(data => ({ ...data, open: true, heightApply: data.heightSave }))
    }
  }, [data.stepTwo])

  const handleCollap = () => {
    const heightEle = cumRapItem.current.clientHeight // chỉ lấy clientHeight khi click vì trước đó component con chưa render xong > height không chính xác

    if (!data.heightSave) { // nếu height chưa được set thì lưu lại giá trị height chuẩn và set heightApply để tạo animate khi đóng lần đầu(nếu trước đó element chưa có height mà set height mới thì không có hiệu ứng animation)
      setdata(data => ({ ...data, heightSave: heightEle, heightApply: heightEle }))
    }
    setdata(data => ({ ...data, stepTwo: Date.now() }))
  }

  return (
    <>
      <div className={classes.cumRapItem} ref={cumRapItem} style={{ height: data.heightApply }} >
        <div className={classes.topInfo} onClick={handleCollap}>
          <FakeImgTheater nameTheater={tenCumRap} imgStyle={classes.imgTheater} />
          <div className={classes.wrapInfo} >
            <TenCumRap tenCumRap={tenCumRap} />
            <Address maLichChieu={maLichChieu} tenCumRap={tenCumRap} />
          </div>
          <div style={{ clear: "both" }}></div>
        </div>
        <p className={classes.digital}>2D Digital</p>
        {lichChieuPhim.map(lcp => (
          <Fragment key={lcp.maLichChieu} >
            <BtnGoToCheckOut lichChieuTheoPhim={lcp} />
          </Fragment>
        ))}
      </div>
    </>
  )
}
