import { React } from 'react'
import useStyles from './style'
import Slider from "react-slick"

export default function Footer() {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    }
    const classes = useStyles()
    return (
        <div>
            <div className={classes.mobileApp}>
                <div className={classes.mainMaxWidth}>
                    <div className="row">
                        <div className="col-lg-6 ">
                            <div className={classes.mobileApp__left}>
                                <div>
                                    <p className={classes.textLeft}>Ứng dụng tiện lợi dành cho</p>
                                    <p className={classes.textLeft}>người yêu điện ảnh</p>
                                    <br />
                                    <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                                    <br />
                                    <button className="btn btn-danger">App miễn phí - Tải về ngay!</button>
                                    <br />
                                    <p>Tix có hai phiên bản <span><a href="">IOS</a></span> và <span><a href="">Android</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={classes.mobileApp__right}>
                                <Slider {...settings} className={classes['slick-mobile']} >
                                    <div className="item">
                                        <img src="./img/mobile/slide1.jpg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="./img/mobile/slide2.jpg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="./img/mobile/slide3.jpg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="./img/mobile/slide4.jpg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="./img/mobile/slide5.jpg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="./img/mobile/slide6.jpg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="./img/mobile/slide7.jpg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="./img/mobile/slide8.jpg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="./img/mobile/slide9.jpg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="./img/mobile/slide10.jpg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="./img/mobile/slide11.jpg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="./img/mobile/slide12.jpg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="./img/mobile/slide13.jpg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="./img/mobile/slide14.jpg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="./img/mobile/slide15.jpg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="./img/mobile/slide16.jpg" alt="" />
                                    </div>

                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
