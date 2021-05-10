/*
- isLazy: khi Suspense(trong App) return về component thì isLazy = true, khi Suspense unmount component thì isLazy = false,
- khi có một component nào gọi api thì set loading = trư > kích hoạt loading
- dùng useRef để lưu lại giá trị trước đó của loading, từ đó biết được loading chuyển trạng thái từ true > false hay ngượi lại
- muốn kích hoạt lại một keyframes phải đổi giá trị key(khai niệm trong react), hoặc move class chứa keyframes ra và thêm vào lại
*/
import React, { useEffect, useRef, useState } from 'react'
import { makeStyles } from "@material-ui/core"
import { IMG_LOADING } from '../../constants/config';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    zIndex: -1,
    opacity: 0,
    transition: "background-color 0.5s ease-in-out",

    width: "100%",
    height: "100%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  visible: {
    zIndex: 2000,
    opacity: 1,
  },
  image: {
    width: 100,
    animation: "$shake 0.6s infinite",
    position: "relative",
  },
  itemIn: {
    animation: "$fadeIn 0.6s 1",
  },
  itemOut: {
    animation: "$fadeOut 0.6s 1",
  },
  "@keyframes shake": {
    "0%": { transform: "rotate(-10deg)" },
    "50%": { transform: "rotate(10deg)" },
    "100%": { transform: "rotate(-10deg)" },
  },
  "@keyframes fadeIn": {
    "0%": { opacity: 0, transform: "scale(0.6,0.6)" },
    "70%": { opacity: 0.7, transform: "scale(1.2,1.2)" },
    "100%": { opacity: 1, transform: "scale(1,1)" },
  },
  "@keyframes fadeOut": {
    "0%": { opacity: 1, transform: "scale(1,1)" },
    "70%": { opacity: 0.7, transform: "scale(1.2,1.2)" },
    "100%": { opacity: 0, transform: "scale(0.6,0.6)" },
  },
});

export default function Loading() {
  const { isLazy } = useSelector((state) => state.lazyReducer)
  const { loadingMovieList } = useSelector((state) => state.movieReducer)
  const { loadingTheaterList } = useSelector((state) => state.theaterReducer)
  const { loadingGetListSeat } = useSelector((state) => state.bookTicketReducer)
  const { loadingMovieDetailShowtimes } = useSelector((state) => state.movieDetailReducer)
  const loading = isLazy || loadingMovieList || loadingTheaterList || loadingGetListSeat || loadingMovieDetailShowtimes
  const loadingPrevious = useRef(loading)
  const clear = useRef(null)
  const [loadingOut, setloadingOut] = useState(false)
  const materialStyles = useStyles()

  useEffect(() => { // nếu loading chuyển từ true sang false thì set loadingOut và delay reset loadingOut
    if (Number(loadingPrevious.current) < Number(loading)) { // loading từ false > true
      loadingPrevious.current = true
    }
    if (Number(loadingPrevious.current) > Number(loading)) { // nếu loading chuyển từ true sang false
      setloadingOut(true)
      clear.current = setTimeout(() => {
        loadingPrevious.current = false  // reset
        setloadingOut(false)            // reset
      }, 600);
    }
    return () => {
      clearTimeout(clear.current)
    }
  }, [loading])

  return (
    <div className={clsx(`${materialStyles.root}`, (loading || loadingPrevious.current) && `${materialStyles.visible}`)}>
      <div className={clsx((loading || loadingPrevious.current) && `${materialStyles.itemIn}`, loadingOut && `${materialStyles.itemOut}`)}>
        <img src={IMG_LOADING} className={materialStyles.image} />
      </div>
    </div>
  )
}


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




