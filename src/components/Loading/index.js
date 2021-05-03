import React, { useEffect, useRef, useState } from 'react'
import {
  useSpring,
  animated,
  useTransition,
  config,
} from '@react-spring/web'
import { makeStyles } from "@material-ui/core"
import { IMG_LOADING } from '../../constants/config';
import clsx from 'clsx';

const useStyles = makeStyles({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    zIndex: 2000,
    transition: "background-color 0.5s ease-in-out",

    width: "100%",
    height: "100%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  hide: {
    zIndex: -1,
  }
});

export default function Loading({ loading }) {
  const [delay, setdelay] = useState(false)
  const [show, set] = useState(false)
  const materialStyles = useStyles({ delay, loading })
  const clear = useRef(null)
  useEffect(() => {
    if (!loading) {
      console.log(" start delay ");
      clear.current = setTimeout(() => {
        setdelay(true)
      }, 700);
    }
    return () => {
      clearTimeout(clear.current)
    }
  }, [loading])

  const shake = useSpring({
    from: { transform: "rotate(-20deg)", },
    to: async (next) => {
      await next({ transform: "rotate(20deg)" })
      await next({ transform: "rotate(-20deg)" })
    },
    config: { duration: 400 },
    loop: true,
  })
  console.log(" gia tri ", loading, delay);

  // khi tham số 1 của useTransition chuyển từ false > true thì tăng dần opacity lên 1 và ngược lại
  const transitions = useTransition(loading, {
    from: { opacity: 0, transform: "scale(0.6,0.6)" },
    enter: { opacity: 1, transform: "scale(1,1)" },
    leave: { opacity: 0, transform: "scale(0.6,0.6)" },
    config: { duration: 1000 },
  })

  return (
    // delay && `${materialStyles.hide}`
    <div className={clsx(`${materialStyles.root}`, delay && `${materialStyles.hide}`)}>
      <div>
        {transitions(
          (styles, item) => {
            return item &&
              <animated.div style={styles}>
                <animated.div style={shake}>
                  <img src={IMG_LOADING} style={{ width: 120 }} />
                </animated.div>
              </animated.div>
          }
        )}
      </div>
    </div>

  )
}


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




