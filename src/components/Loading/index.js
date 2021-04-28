
import React from 'react'
import {
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web'
import { IMG_LOADING } from '../../constants/config';

export default function App() {

  const shakeRef = useSpringRef()
  const shake = useSpring({
    ref: shakeRef,
    from: { transform: "rotate(-20deg)", },
    to: async (next, cancel) => {
      await next({ transform: "rotate(20deg)" })
      await next({ transform: "rotate(-20deg)" })
    },
    config: { duration: 400 },
    loop: true
  })

  const fadeInRef = useSpringRef()
  const fadeIn = useSpring({
    ref: fadeInRef,
    from: { transform: "scale(0.6,0.6)", opacity: 0 },
    to: async (next, cancel) => {
      await next({ transform: "scale(1,1)", opacity: 1 })
    },
    config: { duration: 200 },
  })

  useChain([fadeInRef, shakeRef], [0, 0])
  // fadeInRef và shakeRef đều không delay

  const root = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  return (
    <div style={root}>
      <animated.div
        style={fadeIn}
      >
        <animated.div style={shake}>
          <img src={IMG_LOADING} style={{ width: "30vmin" }} />
        </animated.div>
      </animated.div>
    </div>
  )
}