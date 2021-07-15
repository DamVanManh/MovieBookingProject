import React, { Fragment } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import useStyles from "./style";
import { FAKE_AVATAR } from "../../../constants/config";
import ListSeat from "../ListSeat";
import PayMent from "../PayMent";
import { bookTicket } from "../../../reducers/actions/BookTicket";
import ResultBookticket from "../ResultBookticket";
import {
  RESET_DATA_BOOKTICKET,
  SET_STEP,
} from "../../../reducers/constants/BookTicket";
import { getListSeat } from "../../../reducers/actions/BookTicket";
import { LOADING_BACKTO_HOME } from "../../../reducers/constants/Lazy";

export default function Mobile() {
  const {
    activeStep,
    isSelectedSeat,
    listSeatSelected,
    isReadyPayment,
    maLichChieu,
    danhSachVe,
    taiKhoanNguoiDung,
    loadingBookingTicket,
    successBookingTicketMessage,
    errorBookTicketMessage,
  } = useSelector((state) => state.bookTicketReducer);
  const history = useHistory();
  const dispatch = useDispatch();
  const isDisableBtnRight =
    (activeStep === 0 && !isSelectedSeat) ||
    (activeStep === 1 && !isReadyPayment);
  const classes = useStyles({ isDisableBtnRight });
  const param = useParams();

  const steps = ["CHỌN GHẾ", "THANH TOÁN", "KẾT QUẢ ĐẶT VÉ"];

  const handleCombackHome = () => {
    dispatch({ type: RESET_DATA_BOOKTICKET });
    dispatch({ type: LOADING_BACKTO_HOME });
    setTimeout(() => {
      history.push("/");
    }, 50);
  };
  const handleNext = () => {
    if (activeStep === 0) {
      dispatch({ type: SET_STEP, payload: { activeStep: 1 } });
    }
    // chỉ thực hiện dispatch đặt vé một lần
    if (
      activeStep === 1 &&
      isReadyPayment &&
      !loadingBookingTicket &&
      !successBookingTicketMessage &&
      !errorBookTicketMessage
    ) {
      dispatch(bookTicket({ maLichChieu, danhSachVe, taiKhoanNguoiDung }));
    }
    if (activeStep === 2) {
      handleCombackHome();
    }
  };
  const handleBack = () => {
    if (activeStep === 1) {
      dispatch({ type: SET_STEP, payload: { activeStep: 0 } });
    }
    if (activeStep === 2) {
      if (successBookingTicketMessage) {
        dispatch({ type: RESET_DATA_BOOKTICKET });
        dispatch(getListSeat(param.maLichChieu));
      }
      if (errorBookTicketMessage) {
        dispatch({ type: RESET_DATA_BOOKTICKET });
      }
    }
  };

  const handleUser = () => {
    history.push("/taikhoan");
  };

  const getContentBtn = () => {
    switch (activeStep) {
      case 0:
        return { left: listSeatSelected?.join(", "), right: "TIẾP TỤC" };
      case 1:
        return { left: "QUAY LẠI", right: "ĐẶT VÉ" };
      case 2:
        return { left: "MUA THÊM VÉ PHIM NÀY", right: "QUAY VỀ TRANG CHỦ" };
      default:
        return {};
    }
  };

  return (
    <div>
      {/* top */}
      <section className={classes.top}>
        <div className={classes.topLeft}>
          <img
            className={classes.imgCancel}
            src="/img/bookticket/cancel-arrow.png"
            alt="cancel"
            onClick={handleCombackHome}
          />
        </div>
        {steps.map((label, i) => (
          <Fragment key={label}>
            {activeStep === i && (
              <p className={classes.stepName}>{`${String(i + 1)}. ${label}`}</p>
            )}
          </Fragment>
        ))}
        <img
          onClick={handleUser}
          src={FAKE_AVATAR}
          alt="avatar"
          className={classes.avatar}
        />
      </section>

      {/* empty */}
      <div className={classes.empty}></div>

      {/* content: step 1, step2, step3 */}
      <div>
        <main style={{ display: activeStep === 0 ? "block" : "none" }}>
          <ListSeat />
        </main>
        <main style={{ display: activeStep === 1 ? "block" : "none" }}>
          <PayMent />
        </main>
        <main style={{ display: activeStep === 2 ? "block" : "none" }}>
          <ResultBookticket />
        </main>
        <div style={{ height: 70 }}></div>
      </div>

      {/* bottom */}
      <section className={classes.bottom}>
        <button
          className={`${classes.btnLeft} ${classes.btnBottom}`}
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          {getContentBtn().left}
        </button>
        <button
          className={`${classes.btnRight} ${classes.btnBottom}`}
          disabled={isDisableBtnRight}
          onClick={handleNext}
        >
          {getContentBtn().right}
        </button>
      </section>
    </div>
  );
}
