import React from 'react'
import { useSelector } from 'react-redux';

import useStyles from './style'
import ListSeat from '../ListSeat'
import PayMent from '../PayMent'

import Modal from '../Modal';
import StepCheckout from './StepCheckout';

export default function Index({ horizontal }) {
  const { listSeat_payMent_key } = useSelector((state) => state.bookTicket)
  const classes = useStyles({ horizontal })
  return (

    <div className={classes.bookTicked}>
      <section className={classes.left}>
        <StepCheckout />
        <ListSeat key={listSeat_payMent_key} horizontal={horizontal} />
      </section>
      <section className={classes.right}>
        <PayMent key={listSeat_payMent_key + 1} horizontal={horizontal} />
      </section>
      <Modal />
    </div>

  )
}
