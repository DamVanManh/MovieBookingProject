import React, { useRef, useEffect, useState } from "react";

import SeatIcon from "@material-ui/icons/CallToActionRounded";
import { useSelector, useDispatch } from "react-redux";
import Countdown from "../Countdown";

import useStyles from "./style";
import { colorTheater, logoTheater } from "../../../constants/theaterData";
import formatDate from "../../../utilities/formatDate";
import {
  CHANGE_LISTSEAT,
  SET_ALERT_OVER10,
} from "../../../reducers/constants/BookTicket";
import TenCumRap from "../../../components/TenCumRap";

export default function ListSeat() {
  const {
    isMobile,
    listSeat,
    danhSachPhongVe: { thongTinPhim },
  } = useSelector((state) => state.bookTicketReducer);
  const domToSeatElement = useRef(null);
  const [widthSeat, setWidthSeat] = useState(0);
  const classes = useStyles({
    color: colorTheater[thongTinPhim?.tenCumRap.slice(0, 3).toUpperCase()],
    modalLeftImg: thongTinPhim?.hinhAnh,
    isMobile,
    widthLabel: widthSeat / 2,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    // khởi tạo event lắng nghe "resize"
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    handleResize();
  }, [listSeat]); // sau khi có listSeat thì run handleResize để lấy giá trị đầu tiên
  const handleResize = () => {
    setWidthSeat(domToSeatElement?.current?.offsetWidth);
  };

  const handleSelectedSeat = (seatSelected) => {
    if (seatSelected.daDat) {
      // click vào ghế đã có người chọn
      return;
    }
    // đổi lại giá trị selected của ghế đã chọn
    let newListSeat = listSeat.map((seat) => {
      if (seatSelected.maGhe === seat.maGhe) {
        return { ...seat, selected: !seat.selected };
      }
      return seat;
    });
    // cập nhật lại danh sách hiển thị ghế đã chọn
    const newListSeatSelected = newListSeat?.reduce(
      (newListSeatSelected, seat) => {
        if (seat.selected) {
          return [...newListSeatSelected, seat.label];
        }
        return newListSeatSelected;
      },
      []
    );
    // thông báo nếu chọn quá 10 ghế
    if (newListSeatSelected.length === 11) {
      dispatch({
        type: SET_ALERT_OVER10,
      });
      return;
    }
    // cập nhật lại danhSachVe dùng để booking
    const danhSachVe = newListSeat?.reduce((danhSachVe, seat) => {
      if (seat.selected) {
        return [...danhSachVe, { maGhe: seat.maGhe, giaVe: seat.giaVe }];
      }
      return danhSachVe;
    }, []);
    // cập nhật biến kiểm tra đã có ghế nào được chọn chưa
    const isSelectedSeat = newListSeatSelected.length > 0 ? true : false;
    // tính lại tổng tiền
    const amount = newListSeat?.reduce((amount, seat) => {
      if (seat.selected) {
        return (amount += seat.giaVe);
      }
      return amount;
    }, 0);
    dispatch({
      type: CHANGE_LISTSEAT,
      payload: {
        listSeat: newListSeat,
        isSelectedSeat,
        listSeatSelected: newListSeatSelected,
        danhSachVe,
        amount,
      },
    });
  };
  const color = (seat) => {
    let color;
    if (seat.loaiGhe === "Thuong") {
      color = "#3e515d";
    }
    if (seat.loaiGhe === "Vip") {
      color = "#f7b500";
    }
    if (seat.selected) {
      color = "#44c020";
    }
    if (seat.daDat) {
      color = "#99c5ff";
    }
    return color;
  };

  return (
    <main className={classes.listSeat}>
      {/* thông tin phim */}
      <div className={classes.info_CountDown}>
        <div className={classes.infoTheater}>
          <img
            src={logoTheater[thongTinPhim?.tenCumRap.slice(0, 3).toUpperCase()]}
            alt="phim"
            style={{ width: 50, height: 50 }}
          />
          <div className={classes.text}>
            <TenCumRap tenCumRap={thongTinPhim?.tenCumRap} />
            <p className={classes.textTime}>{`${
              thongTinPhim && formatDate(thongTinPhim.ngayChieu).dayToday
            } - ${thongTinPhim?.gioChieu} - ${thongTinPhim?.tenRap}`}</p>
          </div>
        </div>
        <div className={classes.countDown}>
          <p className={classes.timeTitle}>Thời gian giữ ghế</p>
          <Countdown />
        </div>
      </div>

      <div className={classes.overflowSeat}>
        <div className={classes.invariantWidth}>
          {/* mô phỏng màn hình */}
          <img
            className={classes.screen}
            src="/img/bookticket/screen.png"
            alt="screen"
          />
          {/* danh sách ghế */}
          <div className={classes.seatSelect}>
            {listSeat?.map((seat, i) => (
              <div
                className={classes.seat}
                key={seat.maGhe}
                ref={domToSeatElement}
              >
                {/* label A B C ... đầu mỗi row */}
                {(i === 0 || i % 16 === 0) && (
                  <p className={classes.label}>{seat.label.slice(0, 1)}</p>
                )}
                {/* số ghế thứ tự của ghế */}
                {seat.selected && (
                  <p className={classes.seatName}>
                    {Number(seat.label.slice(1)) < 10
                      ? seat.label.slice(2)
                      : seat.label.slice(1)}
                  </p>
                )}
                {/* label ghế đã có người đặt */}
                {seat.daDat && (
                  <img
                    className={classes.seatLocked}
                    src="/img/bookticket/notchoose.png"
                    alt="notchoose"
                  />
                )}
                {/* icon ghế */}
                <SeatIcon
                  style={{ color: color(seat) }}
                  className={classes.seatIcon}
                />
                {/* đường viền chỉ vùng ghế */}
                {seat.label === "E08" && (
                  <img
                    className={classes.viewCenter}
                    src="/img/bookticket/seatcenter.png"
                    alt="seatcenter"
                  />
                )}
                {/* vùng bắt sự kiện click */}
                <div
                  className={classes.areaClick}
                  onClick={() => handleSelectedSeat(seat)}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* thông tin các loại ghế */}
      <div className={classes.noteSeat}>
        <div className={classes.typeSeats}>
          <div>
            <SeatIcon style={{ color: "#3e515d", fontSize: 27 }} />
            <p>Ghế thường</p>
          </div>
          <div>
            <SeatIcon style={{ color: "#f7b500", fontSize: 27 }} />
            <p>Ghế vip</p>
          </div>
          <div>
            <SeatIcon style={{ color: "#44c020", fontSize: 27 }} />
            <p>Ghế đang chọn</p>
          </div>
          <div>
            <div style={{ position: "relative" }}>
              <p className={classes.posiX}>x</p>
              <SeatIcon style={{ color: "#99c5ff", fontSize: 27 }} />
            </div>
            <p>Ghế đã được mua</p>
          </div>
        </div>
        <div className={classes.positionView}>
          <span>
            <span className={classes.linecenter} />
            <span>Ghế trung tâm</span>
          </span>
          <span className={classes.line}>
            <span className={classes.linebeautiful} />
            <span>Ghế Đẹp</span>
          </span>
        </div>
      </div>

      {/* modalleft */}
      <div className={classes.modalleft}>
        <div className={classes.opacity}></div>
      </div>
    </main>
  );
}
