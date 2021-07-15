import React, { useEffect, useState, useRef } from "react";

import { DataGrid, GridToolbar, GridOverlay } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { useSnackbar } from "notistack";
import CircularProgress from "@material-ui/core/CircularProgress";
import RenderCellExpand from "./RenderCellExpand";
import Tooltip from "@material-ui/core/Tooltip";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
} from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/styles";
import slugify from "slugify";

import { useStyles, materialTheme } from "./styles";
import { getMovieListManagement } from "../../reducers/actions/Movie";
import {
  createShowtime,
  resetCreateShowtime,
} from "../../reducers/actions/BookTicket";
import theatersApi from "../../api/theatersApi";
import { getTheaters2 } from "../../reducers/actions/Theater";

function CustomLoadingOverlay() {
  return (
    <GridOverlay>
      <CircularProgress style={{ margin: "auto" }} />
    </GridOverlay>
  );
}

export default function MoviesManagement() {
  const [lichChieuDisplay, setLichChieuDisplay] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const { theaterList2, loadingTheaterList2 } = useSelector(
    (state) => state.theaterReducer
  );
  const { loadingCreateShowtime, successCreateShowtime, errorCreateShowtime } =
    useSelector((state) => state.bookTicketReducer);
  const movieList2 = useSelector((state) => state.movieReducer.movieList2);
  const dispatch = useDispatch();
  const [valueSearch, setValueSearch] = useState("");
  const clearSetSearch = useRef(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [data, setData] = useState({
    setPhim: "",
    heThongRapRender: [],
    hinhAnhPhimSelected: "",

    setHeThongRap: "",
    cumRapRender: [],

    setCumRap: "",
    rapRender: [],

    setRap: "",
    maRap: "",

    ngayChieuGioChieu: null,

    setGiaVe: "",
    giaVeRender: [75000, 100000, 120000, 150000],

    startRequest: false, // lựa chọn giữa hiện thị "đang tìm" hay "không tìm thấy"

    openCtr: {
      phim: false,
      heThongRap: false,
      cumRap: false,
      rap: false,
      ngayChieuGioChieu: false,
      giaVe: false,
    },
  });
  const [isReadyTaoLichChieu, setIsReadyTaoLichChieu] = useState(false);
  const classes = useStyles({ srcImg: data.hinhAnhPhimSelected });

  useEffect(() => {
    if (!movieList2) {
      dispatch(getMovieListManagement());
    }
  }, []);

  useEffect(() => {
    if (!theaterList2.length) {
      dispatch(getTheaters2());
    }
  }, []);

  useEffect(() => {
    const showTimeList = theaterList2?.reduce((collect1, heThongRap) => {
      return [
        ...collect1,
        ...heThongRap.lstCumRap?.reduce((collect2, cumRap) => {
          return [
            ...collect2,
            ...cumRap.danhSachPhim?.reduce((collect3, phim) => {
              return [
                ...collect3,
                ...phim.lstLichChieuTheoPhim?.reduce((collect4, lichChieu) => {
                  return [
                    ...collect4,
                    {
                      ...lichChieu,
                      tenHeThongRap: heThongRap.tenHeThongRap,
                      tenCumRap: cumRap.tenCumRap,
                      logo: heThongRap.logo,
                      diaChi: cumRap.diaChi,
                      maPhim: phim.maPhim,
                      tenPhim: phim.tenPhim,
                      id: lichChieu.maLichChieu,
                      ngayChieuGioChieu: `${lichChieu.ngayChieuGioChieu.slice(
                        0,
                        10
                      )}, ${lichChieu.ngayChieuGioChieu.slice(11, 16)}`,
                    },
                  ];
                }, []),
              ];
            }, []),
          ];
        }, []),
      ];
    }, []);
    setLichChieuDisplay(showTimeList);
  }, [theaterList2]);

  useEffect(() => {
    if (data.setPhim && data.ngayChieuGioChieu && data.maRap && data.setGiaVe)
      setIsReadyTaoLichChieu(true);
    else setIsReadyTaoLichChieu(false);
  }, [data.setPhim, data.ngayChieuGioChieu, data.maRap, data.setGiaVe]);

  useEffect(() => {
    if (successCreateShowtime) {
      enqueueSnackbar(successCreateShowtime, { variant: "success" });
      dispatch(getTheaters2());
    }
    if (errorCreateShowtime) {
      enqueueSnackbar(errorCreateShowtime, { variant: "error" });
    }
    return () => dispatch(resetCreateShowtime());
  }, [errorCreateShowtime, successCreateShowtime]);

  const handleOpenPhim = () => {
    setData((data) => ({ ...data, openCtr: { ...data.openCtr, phim: true } }));
  };
  const handleOpenHeThongRap = () => {
    setData((data) => ({
      ...data,
      openCtr: { ...data.openCtr, heThongRap: true },
    }));
  };
  const handleOpenCumRap = () => {
    setData((data) => ({
      ...data,
      openCtr: { ...data.openCtr, cumRap: true },
    }));
  };
  const handleOpenRap = () => {
    setData((data) => ({ ...data, openCtr: { ...data.openCtr, rap: true } }));
  };
  const handleOpenNgayChieuGioChieu = () => {
    setData((data) => ({
      ...data,
      openCtr: { ...data.openCtr, ngayChieuGioChieu: true },
    }));
  };
  const handleOpenGiaVe = () => {
    setData((data) => ({ ...data, openCtr: { ...data.openCtr, giaVe: true } }));
  };

  const handleClosePhim = () => {
    setData((data) => ({ ...data, openCtr: { ...data.openCtr, phim: false } }));
  };
  const handleCloseHeThongRap = () => {
    setData((data) => ({
      ...data,
      openCtr: { ...data.openCtr, heThongRap: false },
    }));
  };
  const handleCloseCumRap = () => {
    setData((data) => ({
      ...data,
      openCtr: { ...data.openCtr, cumRap: false },
    }));
  };
  const handleCloseRap = () => {
    setData((data) => ({ ...data, openCtr: { ...data.openCtr, rap: false } }));
  };
  const handleCloseNgayChieuGioChieu = () => {
    setData((data) => ({
      ...data,
      openCtr: { ...data.openCtr, ngayChieuGioChieu: false },
    }));
  };
  const handleCloseGiaVe = () => {
    setData((data) => ({
      ...data,
      openCtr: { ...data.openCtr, giaVe: false },
    }));
  };

  const handleSelectPhim = (e) => {
    // từ mã phim đã gửi lên > lấy ra hình ảnh để hiển thị
    const hinhAnhPhimSelected = movieList2.find(
      (item) => item.maPhim === e.target.value
    ).hinhAnh;
    const isOpenHeThongRap = data.setHeThongRap ? false : true;
    setData((data) => ({
      ...data,
      setPhim: e.target.value,
      startRequest: true,
      openCtr: { ...data.openCtr, heThongRap: isOpenHeThongRap },
      hinhAnhPhimSelected,
    }));
    theatersApi.getThongTinHeThongRap(e.target.value).then((result) => {
      setData((data) => ({
        ...data,
        heThongRapRender: result.data,
        startRequest: false,
      }));
    });
  };

  const handleSelectHeThongRap = (e) => {
    setData((data) => ({
      ...data,
      setHeThongRap: e.target.value.tenHeThongRap,
      startRequest: true,
      openCtr: { ...data.openCtr, cumRap: true },
      //reset
      setCumRap: "",
      rapRender: [],
      setRap: "",
      maRap: "",
    }));
    theatersApi
      .getListCumRapTheoHeThong(e.target.value.maHeThongRap)
      .then((result) => {
        setData((data) => ({
          ...data,
          cumRapRender: result.data,
          startRequest: false,
        }));
      });
  };

  const handleSelectCumRap = (e) => {
    setData((data) => ({
      ...data,
      setCumRap: e.target.value.tenCumRap,
      openCtr: { ...data.openCtr, rap: true },
      rapRender: e.target.value.danhSachRap,
      //reset
      setRap: "",
      maRap: "",
    }));
  };

  const handleSelectRap = (e) => {
    const openNgayChieuGioChieu = data.ngayChieuGioChieu ? false : true;
    const openGiave = openNgayChieuGioChieu
      ? false
      : data.setGiaVe
      ? false
      : true;
    setData((data) => ({
      ...data,
      setRap: e.target.value.tenRap,
      openCtr: {
        ...data.openCtr,
        ngayChieuGioChieu: openNgayChieuGioChieu,
        giaVe: openGiave,
      },
      maRap: e.target.value.maRap,
    }));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date !== "Invalid Date") {
      const obj = new Date(date);
      setData((data) => ({
        ...data,
        ngayChieuGioChieu: `${obj.getDate().toString().padStart(2, 0)}/${(
          obj.getMonth() + 1
        )
          .toString()
          .padStart(2, 0)}/${obj.getFullYear()} ${obj
          .getHours()
          .toString()
          .padStart(2, 0)}:${obj.getMinutes().toString().padStart(2, 0)}:00`,
      }));
    }
  };
  const handleDateAccept = () => {
    const openGiave = data.setGiaVe ? false : true;
    setData((data) => ({
      ...data,
      openCtr: { ...data.openCtr, giaVe: openGiave },
    }));
  };

  const handleSelectGiaVe = (e) => {
    setData((data) => ({
      ...data,
      setGiaVe: e.target.value,
    }));
  };

  const handleTaoLichChieu = () => {
    if (loadingCreateShowtime || !isReadyTaoLichChieu) {
      // khi đang gửi requet hoặc chưa sẵn sàng thì không cho dispatch
      return;
    }
    dispatch(
      createShowtime({
        maPhim: data.setPhim,
        ngayChieuGioChieu: data.ngayChieuGioChieu,
        maRap: data.maRap,
        giaVe: data.setGiaVe,
      })
    ); // ngayChieuGioChieu phải có định dạng dd/MM/yyyy hh:mm:ss
  };

  const handleInputSearchChange = (props) => {
    clearTimeout(clearSetSearch.current);
    clearSetSearch.current = setTimeout(() => {
      setValueSearch(props);
    }, 500);
  };

  const onFilter = () => {
    const searchLichChieuDisplay = lichChieuDisplay.filter((lichChieu) => {
      const matchTenHeThongRap =
        slugify(lichChieu?.tenHeThongRap ?? "", modifySlugify).indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      const matchTenCumRap =
        slugify(lichChieu?.tenCumRap ?? "", modifySlugify).indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      const matchDiaChi =
        slugify(lichChieu?.diaChi ?? "", modifySlugify).indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      const matchTenRap =
        slugify(lichChieu?.tenRap ?? "", modifySlugify).indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      const matchTenPhim =
        slugify(lichChieu?.tenPhim ?? "", modifySlugify).indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      const matchNgayChieuGioChieu =
        slugify(
          lichChieu?.ngayChieuGioChieu.toLocaleString() ?? "",
          modifySlugify
        ).indexOf(slugify(valueSearch, modifySlugify)) !== -1;
      const matchGiaVe =
        slugify(lichChieu?.giaVe.toString() ?? "", modifySlugify).indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      const matchMaPhim =
        slugify(lichChieu?.maPhim.toString() ?? "", modifySlugify).indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      const matchMaRap =
        slugify(lichChieu?.maRap.toString() ?? "", modifySlugify).indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      const matchMalichChieu =
        slugify(lichChieu?.maLichChieu.toString() ?? "", modifySlugify).indexOf(
          slugify(valueSearch, modifySlugify)
        ) !== -1;
      return (
        matchTenHeThongRap ||
        matchTenCumRap ||
        matchDiaChi ||
        matchTenRap ||
        matchTenPhim ||
        matchNgayChieuGioChieu ||
        matchGiaVe ||
        matchMaPhim ||
        matchMaRap ||
        matchMalichChieu
      );
    });
    return searchLichChieuDisplay;
  };

  const columns = [
    {
      field: "maLichChieu",
      headerName: "Mã lịch chiếu",
      hide: true,
      width: 130,
    },
    { field: "logo", hide: true, width: 130 },
    {
      field: "tenHeThongRap",
      headerName: "Hệ thống rạp",
      width: 130,
      renderCell: (params) => (
        <Tooltip title={params.row.tenHeThongRap}>
          <img
            style={{
              maxWidth: "100%",
              height: "100%",
              borderRadius: 4,
              marginRight: 15,
            }}
            src={params.row.logo}
            alt="logo hệ thống rạp"
          />
        </Tooltip>
      ),
      headerAlign: "center",
      align: "center",
      headerClassName: "custom-header",
    },
    {
      field: "tenCumRap",
      headerName: "Tên Cụm Rạp",
      width: 300,
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },
    {
      field: "diaChi",
      headerName: "Địa chỉ",
      width: 400,
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },
    {
      field: "tenRap",
      headerName: "Tên Rạp",
      width: 200,
      headerAlign: "center",
      align: "center",
      headerClassName: "custom-header",
    },
    { field: "maRap", headerName: "Mã rạp", hide: true, width: 130 },
    { field: "maPhim", headerName: "Mã phim", hide: true, width: 130 },
    {
      field: "tenPhim",
      headerName: "Tên phim",
      width: 250,
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
      renderCell: RenderCellExpand,
    },
    {
      field: "ngayChieuGioChieu",
      headerName: "Ngày chiếu giờ chiếu",
      width: 200,
      type: "dateTime",
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
    },
    {
      field: "giaVe",
      headerName: "Giá vé(vnđ)",
      width: 130,
      type: "number",
      headerAlign: "center",
      align: "center",
      headerClassName: "custom-header",
    },
  ];

  const menuProps = {
    // props và class của menu(Popover)
    classes: { paper: classes.menu },
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
  };
  const modifySlugify = { lower: true, locale: "vi" };

  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <div className={classes.backgroundImg}>
        <div className="row">
          <div className="col-6 px-0 px-md-3">
            <FormControl
              className={classes.search__item}
              focused={false}
              fullWidth
            >
              <Select
                open={data.openCtr.phim} // control open
                onClose={handleClosePhim}
                onOpen={handleOpenPhim}
                onChange={handleSelectPhim} // value={phim.maPhim} tự động truyền vào handleSelectPhim sau khi chọn phim
                value={data.setPhim} // giá trị truyền vào quyết định MenuItem nào sẽ được hiển thị sao khi chọn dựa vào value của MenuItem
                displayEmpty // hiển thị item đầu tiên
                IconComponent={ExpandMoreIcon}
                MenuProps={menuProps}
              >
                <MenuItem
                  value=""
                  style={{ display: data.openCtr?.phim ? "none" : "block" }}
                  classes={{
                    root: classes.menu__item,
                    selected: classes["menu__item--selected"],
                  }}
                >
                  Chọn Phim
                </MenuItem>
                {movieList2?.map((phim) => (
                  <MenuItem
                    value={phim.maPhim} // giá trị sẽ được đẩy lên
                    key={phim.maPhim}
                    classes={{
                      root: classes.menu__item,
                      selected: classes["menu__item--selected"],
                    }}
                  >
                    {phim.tenPhim}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="col-6 px-0 px-md-3">
            <FormControl
              className={classes.search__item}
              focused={false}
              fullWidth
            >
              <Select
                open={data.openCtr.heThongRap}
                onClose={handleCloseHeThongRap}
                onOpen={handleOpenHeThongRap}
                onChange={handleSelectHeThongRap}
                value={data.setHeThongRap}
                renderValue={(value) =>
                  `${value ? value : "Chọn hệ thống rạp"}`
                } // hiển thị giá trị đã chọn
                displayEmpty
                IconComponent={ExpandMoreIcon}
                MenuProps={menuProps}
              >
                <MenuItem
                  value=""
                  style={{
                    display:
                      data.heThongRapRender?.length > 0 ? "none" : "block",
                  }}
                  classes={{
                    root: classes.menu__item,
                    selected: classes["menu__item--selected"],
                  }}
                >
                  {data.setPhim
                    ? `${
                        data.startRequest
                          ? "Đang tìm hệ thống rạp"
                          : "Không tìm thấy, vui lòng chọn phim khác"
                      }`
                    : "Vui lòng chọn phim"}
                </MenuItem>
                {data.heThongRapRender.map((item) => (
                  <MenuItem
                    value={item}
                    key={item.maHeThongRap}
                    classes={{
                      root: classes.menu__item,
                      selected: classes["menu__item--selected"],
                    }}
                  >
                    {item.tenHeThongRap}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="col-6 px-0 px-md-3">
            <FormControl
              className={classes.search__item}
              focused={false}
              fullWidth
            >
              <Select
                open={data.openCtr.cumRap}
                onClose={handleCloseCumRap}
                onOpen={handleOpenCumRap}
                onChange={handleSelectCumRap}
                value={data.setCumRap}
                renderValue={(value) => `${value ? value : "Chọn cụm rạp"}`}
                displayEmpty
                IconComponent={ExpandMoreIcon}
                MenuProps={menuProps}
              >
                <MenuItem
                  value=""
                  style={{
                    display: data.cumRapRender?.length > 0 ? "none" : "block",
                  }}
                  classes={{
                    root: classes.menu__item,
                    selected: classes["menu__item--selected"],
                  }}
                >
                  {data.setHeThongRap
                    ? `${
                        data.startRequest
                          ? "Đang tìm cụm rạp"
                          : "Không tìm thấy, vui lòng chọn hệ thống rạp khác"
                      }`
                    : "Vui lòng hệ thống rạp"}
                </MenuItem>
                {data.cumRapRender.map((item) => (
                  <MenuItem
                    value={item}
                    key={item.maCumRap}
                    classes={{
                      root: classes.menu__item,
                      selected: classes["menu__item--selected"],
                    }}
                  >
                    {item.tenCumRap}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="col-6 px-0 px-md-3">
            <FormControl
              className={classes.search__item}
              focused={false}
              fullWidth
            >
              <Select
                open={data.openCtr.rap}
                onClose={handleCloseRap}
                onOpen={handleOpenRap}
                onChange={handleSelectRap}
                value={data.setRap}
                renderValue={(value) => `${value ? value : "Chọn rạp"}`}
                displayEmpty
                IconComponent={ExpandMoreIcon}
                MenuProps={menuProps}
              >
                <MenuItem
                  value=""
                  style={{
                    display: data.rapRender?.length > 0 ? "none" : "block",
                  }}
                  classes={{
                    root: classes.menu__item,
                    selected: classes["menu__item--selected"],
                  }}
                >
                  Vui lòng chọn cụm rạp
                </MenuItem>
                {data.rapRender.map((rap) => (
                  <MenuItem
                    value={rap}
                    key={rap.maRap}
                    classes={{
                      root: classes.menu__item,
                      selected: classes["menu__item--selected"],
                    }}
                  >
                    {rap.tenRap}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="col-6 px-0 px-md-3">
            <FormControl
              className={classes.search__item}
              focused={false}
              fullWidth
            >
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <ThemeProvider theme={materialTheme}>
                  <KeyboardDateTimePicker
                    open={data.openCtr.ngayChieuGioChieu}
                    onClose={handleCloseNgayChieuGioChieu}
                    onOpen={handleOpenNgayChieuGioChieu}
                    inputValue={selectedDate ? null : "Chọn ngày, giờ chiếu"} // khi chưa chọn thì "Chọn ngày, giờ chiếu" ghi đè lên value, khi đã chọn ngày thì return null để value={selectedDate} hiển thị ngày đã chọn
                    invalidDateMessage={
                      selectedDate ? "Invalid Date Format" : ""
                    } // bỏ qua lỗi nếu selectedDate = null
                    value={selectedDate} // giá trị truyền vào là obj date hoặc string chỉ ngày giờ đúng chuẩn có thể convert > tùy thuộc vào thư viện ngày tháng đang dùng(đang dùng date-fns)
                    onChange={handleDateChange}
                    format="yyyy-MM-dd, HH:mm" // HH:mm ~ 23:10, hh:mm là ~ 11:10 PM
                    onAccept={handleDateAccept}
                    ampm={false}
                  />
                </ThemeProvider>
              </MuiPickersUtilsProvider>
            </FormControl>
          </div>
          <div className="col-6 px-0 px-md-3">
            <FormControl
              className={classes.search__item}
              focused={false}
              fullWidth
            >
              <Select
                open={data.openCtr.giaVe}
                onClose={handleCloseGiaVe}
                onOpen={handleOpenGiaVe}
                onChange={handleSelectGiaVe}
                value={data.setGiaVe}
                renderValue={(value) =>
                  `${value ? value + " vnđ" : "Chọn giá vé"}`
                }
                displayEmpty
                IconComponent={ExpandMoreIcon}
                MenuProps={menuProps}
              >
                {data.giaVeRender.map((giaVe) => (
                  <MenuItem
                    value={giaVe}
                    key={giaVe}
                    classes={{
                      root: classes.menu__item,
                      selected: classes["menu__item--selected"],
                    }}
                  >
                    {giaVe} vnđ
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>

      <div className={classes.control}>
        <div className="row">
          <div className={`col-12 col-md-6 ${classes.itemCtro}`}>
            <Button
              disabled={!isReadyTaoLichChieu}
              classes={{
                root: classes.btn,
                disabled: classes.btnDisabled,
              }}
              onClick={handleTaoLichChieu}
            >
              Tạo Lịch Chiếu
            </Button>
          </div>
          <div className={`col-12 col-md-6 ${classes.itemCtro}`}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onChange={(evt) => handleInputSearchChange(evt.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <DataGrid
        className={classes.rootDataGrid}
        rows={onFilter()}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[10, 25, 50]}
        loading={loadingTheaterList2}
        components={{
          LoadingOverlay: CustomLoadingOverlay,
          Toolbar: GridToolbar,
        }}
        sortModel={[{ field: "tenHeThongRap", sort: "asc" }]}
      />
    </div>
  );
}
