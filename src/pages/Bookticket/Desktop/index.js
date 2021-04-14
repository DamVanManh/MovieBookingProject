import React from 'react'

import useStyles from './style'
import ListSeat from '../ListSeat'
import PayMent from '../PayMent'
import StepCheckout from './StepCheckout';

export default function Index() {
  const classes = useStyles()
  return (
    <div className={classes.bookTicked}>
      <section className={classes.left}>
        <StepCheckout />
        <ListSeat />
      </section>
      <section className={classes.right}>
        <PayMent />
      </section>
    </div>

  )
}
