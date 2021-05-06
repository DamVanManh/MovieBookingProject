import React from 'react'
import useStyles from './style'
export default function Footer() {
  const classes = useStyles()
  return (
    <div className={classes.footer}>
      <div className={`${classes.footer__up} row`}>
        <div className="col-6 col-md-4">
          <div className={classes.tix__text}>
            <div className="d-none d-lg-block d-xl-block">
              <p>TIX</p>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/">FAQ</a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/">Brand Guidelines</a>
            </div>
            <div className="row">
              <a className="col-6 col-lg-12" target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/">Thỏa thuận sử dụng</a>
              <a className="col-6 col-lg-12" target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/">Chính sách bảo mật</a>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 footer__company d-none d-lg-block d-xl-block">
          <p>Đối tác</p>
          <div>
            <div className={classes.company__logo}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo-connect/cgv.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo-connect/bhd.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo-connect/galaxycine.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo-connect/cinestar.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo-connect/lotte.png" alt="" className={classes.logo} /></a>
            </div>
            <div className={classes.company__logo}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo-connect/megags.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo-connect/bt.jpg" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo-connect/dongdacinema.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo-connect/TOUCH.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo-connect/cnx.jpg" alt="" className={classes.logo} /></a>
            </div>
            <div className={classes.company__logo}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo-connect/STARLIGHT.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo-connect/dcine.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo-connect/zalopay_icon.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo-connect/payoo.jpg" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo-connect/vcb.png" alt="" className={classes.logo} /></a>
            </div>
            <div className={classes.company__logo}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo-connect/AGRIBANK.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo-connect/VIETTINBANK.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo-connect/IVB.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo-connect/123go.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo-connect/laban.png" alt="" className={classes.logo} /></a>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 d-flex text-center">
          <div className={`${classes.social__width} d-none d-lg-block d-xl-block`}>
            <p className="pb-2">MOBIL APP</p>
            <div className="footer__mobile d-flex justify-content-around">
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img className={classes.logo} src="/img/mobile-system/apple-logo.png" alt="" /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img className={classes.logo} src="/img/mobile-system/android-logo.png" alt="" /></a>
            </div>
          </div>
          <div className={classes.social__width}>
            <p className="d-none d-lg-block d-xl-block pb-2">SOCIAL APP</p>
            <div className={classes.footer__social}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img className={classes.logo} src="/img/media/facebook-logo.png" alt="" /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img className={classes.logo} src="/img/media/zalo-logo.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className={`${classes.footer__down} container`}>
        <div className="row">
          <div className="col-12 col-md-1 p-1 text-center">
            <img src="/img/logo-connect/zion-logo.jpg" alt="company" className={classes.logoCompany} />
          </div>
          <div className={`col-12 col-md-9 p-1 text-center text-lg-left`}>
            <span>TIX - SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</span>
            <span>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</span>
            <span>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</span>
            <span>đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.</span>
            <span>Số Điện Thoại (Hotline): 1900 545 436</span>
            <p>Email: <span className="d-inline">support@tix.vn</span></p>
          </div>
          <div className="col-12 col-md-2 p-1 text-center" style={{ position: "static" }}>
            <img src="/img/media/certificate.png" alt="gvm" className={classes.gvm} />
          </div>
        </div >
      </div >
    </div >
  )
}
