/*
- isLazy: khi Suspense(trong App) return về component thì isLazy = true, khi Suspense unmount component thì isLazy = false,
    do boolean isLazy toggle quá nhanh nên dùng useHandleVibrateLazy để hạn chế reloading loading nhiều lần
- có 3 kiểu biến dùng để hiện loading: 1 là isLazy(component đó lần đầu loading), 2 là call api trong component, 3 là isLoadingBackToHome > do quá trình render homepage rất lâu.
- dùng useRef để lưu lại giá trị trước đó của loading, khi loading thay đổi ta biết được loading chuyển trạng thái từ true > false hay ngược lại từ đó kiểm soát hiệu ứng:
    các biến kiểm soát hiệu ứng:
              loadingStart    loadingCompleted
    visible   true            delay 600ms > false
    fadein    true            false
    fadeout   false           true
- muốn kích hoạt lại một keyframes phải đổi giá trị key(khai niệm trong react), hoặc move class chứa keyframes ra và thêm vào lại
- mỗi lần quay về home vì mất một thời gian mới return component(mặc dù đã tải sẵn code + data) > để tạo loading thì:
  + khi click thì dispatch isLoadingBackToHome là true trong reducer Lazy để kích hoạt loading
  + bên trong component page > Homepage > Carousel kích hoạt loading xong nếu component render xong
- do cùng một element không thể có 2 animation cùng lúc lên phải tách ra thành 2 div, 1 div shake, một div fade
- khi fadeOut kết thúc thì cần ẩn đi loadding > bắt sự kiện animationend, sau đó xóa addEventListener để không bắt animationend của fadeIn

*/
import React, { useEffect, useRef, useState, useCallback } from "react";

import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { IMG_LOADING } from "../../constants/config";
import useHandleVibrateLazy from "../../utilities/useHandleVibrateLazy";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: (props) => (props.effectFadeOut ? "transparent" : "#fff"),
    zIndex: -1,
    transition: "background-color 0.6s ease-in-out",

    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  visible: {
    zIndex: 99999,
  },
  image: {
    width: (props) => (props.isDesktop ? 250 : 100),
    animation: "$shake 0.6s infinite",
    position: "relative",
  },
  fadeIn: {
    animationName: "$fadeIn",
    animationDuration: "0.6s",
  },
  fadeOut: {
    animationName: "$fadeOut",
    animationDuration: "0.6s",
  },
  "@keyframes shake": {
    "0%": { transform: "rotate(-10deg)" },
    "50%": { transform: "rotate(10deg)" },
    "100%": { transform: "rotate(-10deg)" },
  },
  "@keyframes fadeIn": {
    "0%": { opacity: 0, transform: "scale(0.6,0.6)" },
    "70%": { opacity: 0.7, transform: "scale(1.1,1.1)" },
    "100%": { opacity: 1, transform: "scale(1)" },
  },
  "@keyframes fadeOut": {
    "0%": { opacity: 1, transform: "scale(1)" },
    "70%": { opacity: 0.7, transform: "scale(1.1,1.1)" },
    "100%": { opacity: 0, transform: "scale(0.6,0.6)" },
  },
});

export default function Loading() {
  const isLazy = useHandleVibrateLazy();
  const isLoadingBackToHome = useSelector(
    (state) => state.lazyReducer.isLoadingBackToHome
  );
  const loadingMovieList = useSelector(
    (state) => state.movieReducer.loadingMovieList
  );
  const loadingGetListSeat = useSelector(
    (state) => state.bookTicketReducer.loadingGetListSeat
  );
  const loadingMovieDetailShowtimes = useSelector(
    (state) => state.movieDetailReducer.loadingMovieDetailShowtimes
  );
  const loading =
    isLazy ||
    loadingMovieList ||
    loadingGetListSeat ||
    loadingMovieDetailShowtimes ||
    isLoadingBackToHome;
  const loadingPrevious = useRef(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const [controlEffect, setControlEffect] = useState({
    visible: false,
    effectFadeIn: false,
    effectFadeOut: false,
  });
  const eFadeEffect = useRef(null);
  const materialStyles = useStyles({
    isDesktop,
    loading,
    visible: controlEffect.visible,
    effectFadeOut: controlEffect.effectFadeOut,
  });

  useEffect(() => {
    // loadding chuyển từ false sang true
    if (Number(loadingPrevious.current) < Number(loading)) {
      // console.log("START: ", loadingPrevious.current, loading);
      setControlEffect((data) => ({
        ...data,
        visible: true,
        effectFadeIn: true,
        effectFadeOut: false,
      }));
      loadingPrevious.current = true;
      // loadding chuyển từ true sang false
    } else if (Number(loadingPrevious.current) > Number(loading)) {
      // console.log("END: ", loadingPrevious.current, loading);
      setControlEffect((data) => ({
        ...data,
        visible: true,
        effectFadeIn: false,
        effectFadeOut: true,
      }));
      loadingPrevious.current = false;
      // khi fadeOut kết thúc thì reset loading
      eFadeEffect.current?.addEventListener("animationend", resetAnimation);
    }
  }, [loading]);

  const resetAnimation = useCallback((e) => {
    // dùng useCallback vì removeEventListener chỉ xóa sự kiện dựa trên cùng một function
    eFadeEffect.current?.removeEventListener("animationend", resetAnimation);
    setControlEffect((data) => ({
      ...data,
      visible: false,
      effectFadeIn: false,
      effectFadeOut: false,
    }));
  }, []);

  return (
    <div
      className={clsx(
        `${materialStyles.root}`,
        controlEffect.visible && `${materialStyles.visible}`
      )}
      // khi chuyển url > component mới chưa load xong nên loading(zIndex: -1) hiện ra > cần ẩn đi lúc đó để hiệu ứng fadeIn mượt hơn
      style={{ display: controlEffect.visible ? "flex" : "none" }}
    >
      <div
        ref={eFadeEffect}
        className={clsx(
          controlEffect.effectFadeIn && `${materialStyles.fadeIn}`,
          controlEffect.effectFadeOut && `${materialStyles.fadeOut}`
        )}
      >
        <img src={IMG_LOADING} className={materialStyles.image} alt="logo" />
      </div>
    </div>
  );
}

// clear.current = setTimeout(() => { // cách này không được vì thực tế setTimeout không thực thi đúng 600ms từ khi set mà có thể lâu hơn do Javascript runtime
//   console.timeEnd("test1");
//   setControlEffect((data) => ({
//     ...data,
//     visible: false,
//     fadein: false,
//     fadeout: false,
//   }));
// }, 600);

// import React, { useEffect, useRef, useState } from 'react'
// import {
//   useSpring,
//   animated,
//   useTransition,
// } from '@react-spring/web'
// import { makeStyles } from "@material-ui/core"
// import { IMG_LOADING } from '../../constants/config';
// import clsx from 'clsx';
// import { useSelector } from 'react-redux';

// const useStyles = makeStyles({
//   root: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     backgroundColor: "#fff",
//     zIndex: 2000,
//     transition: "background-color 0.5s ease-in-out",

//     width: "100%",
//     height: "100%",

//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   hide: {
//     zIndex: -1,
//   }
// });

// export default function Loading() {
//   const [triggerHide, setTriggerHide] = useState(false)
//   const { isLazy } = useSelector((state) => state.lazyReducer)
//   const { loadingMovieList } = useSelector((state) => state.movieReducer)
//   const { loadingTheaterList } = useSelector((state) => state.theaterReducer)
//   const { loadingGetListSeat } = useSelector((state) => state.bookTicketReducer)
//   const { loadingMovieDetailShowtimes } = useSelector((state) => state.movieDetailReducer)
//   const isLazyPrevious = useRef(isLazy)
//   const loading = isLazyPrevious.current || loadingMovieList || loadingTheaterList || loadingGetListSeat || loadingMovieDetailShowtimes
//   const clear = useRef(null)

//   const materialStyles = useStyles()

//   useEffect(() => { // fix lỗi khi isLazy chuyển từ true sang false thì loadingMovieList... mất vài ms mới chuyển sang true > loadding bị giật
//     if (Number(isLazyPrevious.current) > Number(isLazy)) { // nếu isLazy chuyển từ true sang false thì delay lại chút
//       setTimeout(() => {
//         isLazyPrevious.current = isLazy
//       }, 50);
//     }
//   }, [isLazy])

//   useEffect(() => { // sau khi loadding = false, không ẩn liền mà chờ cho hiệu ứng scale và opacity kết thúc mới ẩn
//     if (loading === false) {
//       clear.current = setTimeout(() => {
//         setTriggerHide(true)
//       }, 400);
//     }
//     if (loading === true) { // trong trường hợp component tự reload lại thì phải reset biến tạm
//       setTriggerHide(false)
//     }
//     return () => {
//       clearTimeout(clear.current)
//     }
//   }, [loading])

//   const shake = useSpring({
//     from: { transform: "rotate(-10deg)", },
//     to: async (next) => {
//       await next({ transform: "rotate(10deg)" })
//       await next({ transform: "rotate(-10deg)" })
//     },
//     config: { mass: 1, tension: 900, friction: 50 },
//     loop: true,
//   })

//   // khi tham số 1 của useTransition chuyển từ false > true thì tăng dần opacity lên 1 và ngược lại
//   const transitions = useTransition(loading, {
//     from: { opacity: 0, transform: "scale(0.6,0.6)" },
//     enter: { opacity: 1, transform: "scale(1,1)" },
//     leave: { opacity: 0, transform: "scale(0.6,0.6)" },
//     config: { duration: 400 },
//   })

//   return (
//     <div className={clsx(`${materialStyles.root}`, triggerHide && `${materialStyles.hide}`)}>
//       {transitions(
//         (styles, item) => {
//           return item &&
//             <animated.div style={styles}>
//               <animated.div style={shake}>
//                 <img src={IMG_LOADING} style={{ width: 120 }} />
//               </animated.div>
//             </animated.div>
//         }
//       )}
//     </div>
//   )
// }

// import React, { useEffect, useState, useRef } from 'react'
// import {
//   useSpring,
//   useChain,
//   animated,
//   useSpringRef,
//   useTransition,
//   config,
// } from '@react-spring/web'
// import { IMG_LOADING } from '../../constants/config';

// export default function Mount({ loading }) {
//   // animation sáng lên rồi mờ dần liên tục
//   // reverse: true : "from" and "to" are switched if set true,
//   // onRest : Callback when a spring or key comes to a stand-still > thực thi callback khi hình ảnh dứng yên
//   // khi tham số 1 của useTransition chuyển từ false > true thì ✌️ tăng dần opacity lên 1 và ngược lại
//   const transitions = useTransition(loading, {
//     from: { opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 },
//     delay: 200,
//     config: config.molasses,
//   })
//   return transitions(
//     (styles, item) => item && <animated.div style={styles}>✌️</animated.div>
//   )
// }
