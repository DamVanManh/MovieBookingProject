import React, { useEffect, useState } from 'react';

import Popper from '@material-ui/core/Popper';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  popper: {
    position: 'relative',
    zIndex: 1,
    boxShadow: "0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)",
  },
  image: {
    height: "auto", borderRadius: 4,
  },
  info: {
    backgroundColor: "rgb(74 74 74 / 46%)",
    borderRadius: 4,
    padding: 5,
    color: "#fff !important",
    position: "absolute", left: "50%", bottom: 10,
    transform: "translateX(-50%)",
    width: "fit-content",
  },
  btnMovieDetail: {
    position: "absolute", left: "50%", bottom: 51,
    transform: "translateX(-50%)",
    padding: "8px 23px",
    background: "linear-gradient(to left, #fb4226, #ce3017 100%)",
    '&:hover': {
      background: "#d01414",
    },
    transition: "color 0.2",
    borderRadius: 4,
    color: "#fff",
    border: "none",
  }
}));

export default function CustomPopper(props) {
  const { phim, setNewPhim, currentPhimPopup } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const [showPopper, setShowPopper] = useState(false);
  const [widthImage, setwidthImage] = useState(200)
  const temporaryAnchorEl = React.useRef(null)
  const history = useHistory();
  useEffect(() => {// nếu hình có dạng chữ nhật thì cho rộng ra
    let mounted = true;
    const img = new Image();
    img.src = phim.hinhAnh;
    img.onload = function () { // sau khi phân tích hình ảnh xong
      if ((this.width >= this.height) && mounted) {
        setwidthImage(350)
      }
    }
    setAnchorEl(temporaryAnchorEl.current);
    return () => {
      mounted = false;
    };
  }, [])

  useEffect(() => { // khi hover vào phim khác thì currentPhimPopup thay đổi > ẩn đi phim hiện tại
    if ((phim.maPhim !== currentPhimPopup) && currentPhimPopup) {
      setShowPopper(false);
    }
  }, [currentPhimPopup])
  const rootElementPopup = document.querySelector('div[role="presentation"].MuiAutocomplete-popper') // div popup
  const handleMouseEnter = (element) => {
    setNewPhim(phim.maPhim) // đẩy mã phim đang popup lên component cha, nếu hover vào phim mới thì mới ẩn, còn hover ra ngoài thì không ẩn
    setShowPopper(true);
    setAnchorEl(rootElementPopup);
  };

  return (
    <div
      className={classes.root}
      onMouseEnter={handleMouseEnter}
      ref={temporaryAnchorEl}
    >
      <p>{phim.tenPhim}</p>
      {showPopper && (
        <Popper
          open={showPopper}
          anchorEl={anchorEl}
          className={classes.popper}
          placement="right"
        >
          <div>
            <div style={{ position: "relative" }}>
              <img src={phim.hinhAnh} alt="poster" className={classes.image} style={{ width: widthImage }} />
              <div className={classes.info}>
                <p>{`120 phút - Điểm Tix ${phim.danhGia}`}</p>
              </div>
              <button className={classes.btnMovieDetail} onClick={() => history.push(`/phim/${phim.maPhim}`)}>Chi tiêt phim</button>
            </div>
          </div>
        </Popper>
      )}
    </div>
  );
};