import React, { useEffect, useRef } from "react";
import useStyles from "./style";
import Slider from "react-slick";
import { useDispatch } from "react-redux";

import openNewTap from "../../../utilities/openNewTap";
import { LOADING_BACKTO_HOME_COMPLETED } from "../../../reducers/constants/Lazy";

export default function HomeApp() {
  const dispatch = useDispatch();
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const textDecoration = { textDecoration: "underline" };
  const classes = useStyles();
  const deferredPrompt = useRef(null);

  console.log("component load lại ");

  useEffect(() => {
    // xác nhận đã load thành công component cuối cùng và tắt component loading
    dispatch({ type: LOADING_BACKTO_HOME_COMPLETED });

    // Code to handle install prompt on desktop

    // let deferredPrompt;
    const addBtn = document.querySelector(".btn.btn-danger");
    // addBtn.style.display = "none";
    console.log("btn hiện tại: ", addBtn);
    window.addEventListener("beforeinstallprompt", (e) => {
      console.log("đã run beforeinstallprompt, hiện e: ", e);
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt.current = e;
      // Update UI to notify the user they can add to home screen
      // addBtn.style.display = "block";

      addBtn.addEventListener("click", () => {
        // hide our user interface that shows our A2HS button
        // addBtn.style.display = "none";
        // Show the prompt
        deferredPrompt.current.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            console.log("User accepted the A2HS prompt");
          } else {
            console.log("User dismissed the A2HS prompt");
          }
          deferredPrompt.current = null;
        });
      });
    });
  });

  return (
    <div id="ungdung">
      <div className={classes.mobileApp}>
        <div className={classes.mainMaxWidth}>
          <div className="row">
            <div className="col-lg-6 ">
              <div
                className={`${classes.mobileApp__left} text-center text-lg-left`}
              >
                <div>
                  <p className={classes.textLeft}>Ứng dụng tiện lợi dành cho</p>
                  <p className={classes.textLeft}>người yêu điện ảnh</p>
                  <br />
                  <p>
                    Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm
                    rạp và đổi quà hấp dẫn.
                  </p>
                  <br />
                  <button className="btn btn-danger">
                    Cài đặt Progressive App!
                  </button>
                  <br />
                  <p className="py-3">
                    Tix có hai phiên bản{" "}
                    <span>
                      <a
                        href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={textDecoration}
                      >
                        IOS
                      </a>
                    </span>{" "}
                    và{" "}
                    <span>
                      <a
                        style={textDecoration}
                        href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Android
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={classes.mobileApp__right}>
                <img
                  className={classes.bgmobile}
                  src="/img/mobile/mobile.png"
                  alt="mobile"
                />
                <Slider {...settings} className={classes["slick-mobile"]}>
                  <div>
                    <img src="./img/mobile/slide1.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide2.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide3.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide4.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide5.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide6.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide7.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide8.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide9.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide10.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide11.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide12.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide13.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide14.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide15.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide16.jpg" alt="" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
