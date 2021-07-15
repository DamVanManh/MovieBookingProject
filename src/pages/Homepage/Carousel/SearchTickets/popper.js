import React, { useEffect, useState } from "react";

import Popper from "@material-ui/core/Popper";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  popper: {
    position: "relative",
    zIndex: 1,
    boxShadow:
      "0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)",
  },
  image: {
    height: "auto",
    borderRadius: 4,
  },
  info: {
    backgroundColor: "rgb(74 74 74 / 46%)",
    borderRadius: 4,
    padding: 5,
    color: "#fff !important",
    position: "absolute",
    left: "50%",
    bottom: 10,
    transform: "translateX(-50%)",
    width: "fit-content",
  },
  btnMovieDetail: {
    position: "absolute",
    left: "50%",
    bottom: 51,
    transform: "translateX(-50%)",
    padding: "8px 23px",
    background: "linear-gradient(to left, #fb4226, #ce3017 100%)",
    "&:hover": {
      background: "#d01414",
    },
    transition: "color 0.2",
    borderRadius: 4,
    color: "#fff",
    border: "none",
  },
  withOutImage: {
    borderRadius: 4,
    width: 200,
    height: 200 * 1.5,
    animationName: `$myEffect`,
    animationDuration: "3s",
    animationTimingFunction: `${theme.transitions.easing.easeInOut}`,
    animationIterationCount: "infinite",
    background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
    backgroundSize: "400% 400%",
  },
  "@keyframes myEffect": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
}));

export default function CustomPopper(props) {
  const { phim, setNewPhim, currentPhimPopup, rootElementPopup } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const [showPopper, setShowPopper] = useState(false);
  const [widthImage, setwidthImage] = useState(200);
  const temporaryAnchorEl = React.useRef(null);
  const history = useHistory();
  const [imageNotFound, setImageNotFound] = useState(false);
  useEffect(() => {
    // nếu hình có dạng chữ nhật thì cho rộng ra
    let mounted = true;
    const img = new Image();
    img.src = phim.hinhAnh;
    img.onload = function () {
      // sau khi phân tích hình ảnh xong
      if (this.width > this.height && mounted) {
        setwidthImage(350);
      } else if (this.width === this.height && mounted) {
        setwidthImage(250);
      }
    };
    setAnchorEl(temporaryAnchorEl.current);
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    // khi hover vào phim khác thì currentPhimPopup thay đổi > ẩn đi phim hiện tại
    if (phim.maPhim !== currentPhimPopup && currentPhimPopup) {
      setShowPopper(false);
    }
  }, [currentPhimPopup, phim.maPhim]);
  const handleMouseEnter = (element) => {
    setNewPhim(phim.maPhim); // đẩy mã phim đang popup lên component cha, nếu hover vào phim mới thì mới ẩn, còn hover ra ngoài thì không ẩn
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
              <img
                src={phim.hinhAnh}
                alt="poster"
                className={classes.image}
                style={{ width: widthImage }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = "none";
                  setImageNotFound(true);
                }}
              />
              {imageNotFound && <div className={classes.withOutImage}></div>}
              <div className={classes.info}>
                <p>{`120 phút - Điểm Tix ${phim.danhGia}`}</p>
              </div>
              <button
                className={classes.btnMovieDetail}
                onClick={() => history.push(`/phim/${phim.maPhim}`)}
              >
                Chi tiêt phim
              </button>
            </div>
          </div>
        </Popper>
      )}
    </div>
  );
}
