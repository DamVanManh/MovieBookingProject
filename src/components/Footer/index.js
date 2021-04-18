import React from 'react'
import useStyles from './style'
export default function Footer() {
  const classes = useStyles()
  return (
    <div className={classes.footer}>
      <div className={classes.footer__up}>
        <div className={classes.footer__tix}>
          <p>TIX</p>
          <div className={classes.tix__text}>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/">FAQ</a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/">Brand Guidelines</a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/">Thỏa thuận sử dụng</a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/">Chính sách bảo mật</a>
            </div>
          </div>
        </div>
        <div className="footer__company">
          <p>Đối tác</p>
          <div>
            <div className={classes.company__logo}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="./img/logo-connect/cgv.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="./img/logo-connect/cgv.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="./img/logo-connect/cgv.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="./img/logo-connect/cgv.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="./img/logo-connect/cgv.png" alt="" className={classes.logo} /></a>
            </div>
            <div className={classes.company__logo}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="./img/logo-connect/cgv.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="./img/logo-connect/cgv.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="./img/logo-connect/cgv.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="./img/logo-connect/cgv.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="./img/logo-connect/cgv.png" alt="" className={classes.logo} /></a>
            </div>
            <div className={classes.company__logo}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="./img/logo-connect/cgv.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="./img/logo-connect/cgv.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="./img/logo-connect/cgv.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="./img/logo-connect/cgv.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="./img/logo-connect/cgv.png" alt="" className={classes.logo} /></a>
            </div>
            <div className={classes.company__logo}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="./img/logo-connect/cgv.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="./img/logo-connect/cgv.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="./img/logo-connect/cgv.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="./img/logo-connect/cgv.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="./img/logo-connect/cgv.png" alt="" className={classes.logo} /></a>
            </div>
          </div>
        </div>
        <div className={classes.footer__social}>
          <div className={classes.social__width}>
            <p>MOBIL APP</p>
            <div className="footer__mobile d-flex justify-content-around">
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img className={classes.logo} src="./img/mobile-system/apple-logo.png" alt="" /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img className={classes.logo} src="./img/mobile-system/android-logo.png" alt="" /></a>
            </div>
          </div>
          <div className={classes.social__width}>
            <p>SOCIAL APP</p>
            <div className={classes.footer__social}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img className={classes.logo} src="./img/media/facebook-logo.png" alt="" /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img className={classes.logo} src="./img/media/zalo-logo.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footer__down}>
        <div className="row">
          <div className={classes.down__left}>
            <img src="./img/logo-connect/zion-logo.jpg" alt="" />
          </div>
          <div className={classes.down__middle}>
            <span>TIX - SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</span>
            <span>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</span>
            <span>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</span>
            <span>đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.</span>
            <span>Số Điện Thoại (Hotline): 1900 545 436</span>
            <p>Email: <span className="d-inline">support@tix.vn</span></p>
          </div>
          <div className={classes.down__right}>
            <img src="./img/media/certificate.png" alt="" />
          </div>
        </div >
      </div >
    </div >
  )
}
