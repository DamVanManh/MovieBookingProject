import React, { Fragment, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import useStyles from './style';
import { FAKE_AVATAR } from '../../../constants/config';
import ListSeat from '../ListSeat';
import PayMent from '../PayMent';
import { bookTicket } from '../../../reducers/actions/BookTicket'
import Modal from '../Modal';

export default function CustomizedSteppers({ horizontal }) {
  const history = useHistory();
  const { isSelectedSeat, paymentMethod } = useSelector((state) => state.bookTicket)
  const { listSeat, maLichChieu, danhSachVe, taiKhoanNguoiDung, listSeat_payMent_key, loadingBookingTicket, successBookingTicketMessage, errorBookTicketMessage } = useSelector(state => state.bookTicket)
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch = useDispatch()
  const isDisable = ((activeStep === 0) && !isSelectedSeat) || ((activeStep === 1) && !paymentMethod)
  const classes = useStyles({ isDisable });


  useEffect(() => { // reset step by timeout or rebooking
    let isUnmount = false;
    if (!isUnmount) {
      setActiveStep(0);
    }
    return () => {
      isUnmount = true;
    }
  }, [listSeat_payMent_key])
  const steps = ['CHỌN GHẾ', 'THANH TOÁN', 'KẾT QUẢ ĐẶT VÉ'];

  const handleNext = () => {
    // khi nào thì tăng step và đặt vé:
    //    chỉ tăng step nếu đang ở step 0
    //    chỉ đặt vé: nếu step đang ở 1 > nếu không đang loading > nếu success false  > nếu error false
    if (activeStep === 0) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    if ((activeStep === 1) && !loadingBookingTicket && !successBookingTicketMessage && !errorBookTicketMessage) {
      dispatch(bookTicket({ maLichChieu, danhSachVe, taiKhoanNguoiDung }))
    }
  };
  const handleBack = () => {
    if (activeStep === 1) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };
  const listSeatSelected = listSeat?.reduce((listSeatSelected, seat) => {
    if (seat.selected) {
      return [...listSeatSelected, seat.label]
    }
    return listSeatSelected
  }, [])

  return (
    <div className={classes.root}>

      {/* top */}
      <section className={classes.top}>
        <div className={classes.topLeft}>
          <img className={classes.imgCancel} src="/img/bookticket/cancel-arrow.png" alt="cancel" onClick={() => history.push('/')} />
        </div>
        {steps.map((label, i) => (
          <Fragment key={label}>
            {(activeStep === i) && <p className={classes.stepName}>{`${String(i + 1)}. ${label}`}</p>}
          </Fragment>
        ))}
        <img src={FAKE_AVATAR} alt="avatar" className={classes.avatar} />
      </section>

      {/* empty */}
      <div className={classes.empty}>
      </div>

      {/* content */}
      <main style={{ display: activeStep === 0 ? 'block' : 'none' }}>
        <ListSeat horizontal={horizontal} key={listSeat_payMent_key} />
      </main>
      <aside style={{ display: activeStep === 1 ? 'block' : 'none' }}>
        <PayMent horizontal={horizontal} key={listSeat_payMent_key + 1} />
      </aside>

      {/* bottom */}
      <section className={classes.bottom}>
        <button className={`${classes.btnLeft} ${classes.btnBottom}`} onClick={handleBack} disabled={activeStep === 0}>
          {activeStep === 0 ? listSeatSelected.join(", ") : 'QUAY LẠI'}
        </button>
        <button className={`${classes.btnRight} ${classes.btnBottom}`} disabled={isDisable} onClick={handleNext}>
          {activeStep === 0 ? 'TIẾP TỤC' : 'ĐẶT VÉ'}
        </button>
      </section>

      {/* modal */}
      <Modal />
    </div>
  );
}
