import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import CircularProgress from "@material-ui/core/CircularProgress";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import { useHistory } from "react-router-dom";

import { FAKE_AVATAR } from "../../constants/config";
import {
  getInfoUser,
  putUserUpdate,
  resetUserList,
} from "../../reducers/actions/UsersManagement";
import { getComment } from "../../reducers/actions/MovieDetail";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "transparent",
    color: "black",
    boxShadow: "none",
    "& .MuiTabs-indicator": {
      height: 0, // ẩn gạch dưới
    },
  },
  field: {
    maxWidth: 500,
    paddingRight: 16,
    paddingLeft: 16,
  },
  password: {
    position: "relative",
  },
  eye: {
    position: "absolute",
    top: 31,
    right: 9,
    cursor: "pointer",
  },
  tabButton: {
    opacity: 1,
    color: "#000",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    "& > span": {
      transition: "all 0.2s",
      "&:hover": {
        fontSize: "15px",
      },
    },
  },

  tabSelected: {
    color: "#fa5238",
  },
  td: {
    "& td": {
      whiteSpace: "nowrap",
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function TabPanel(props) {
  const { children, value, index, isDesktop, ...other } = props;
  return (
    <div hidden={value !== index} {...other}>
      {value === index && (
        <Box style={{ padding: isDesktop ? "24px" : "24px 0px 0px" }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function Index() {
  const history = useHistory();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const classes = useStyles();
  const dispatch = useDispatch();
  const { successInfoUser, loadingInfoUser } = useSelector(
    (state) => state.usersManagementReducer
  );
  const { currentUser } = useSelector((state) => state.authReducer);
  const { commentList } = useSelector((state) => state.movieDetailReducer);
  const [dataShort, setdataShort] = useState({
    ticket: 0,
    posts: 0,
    likePosts: 0,
    total: 0,
  });
  const { successUpdateUser, errorUpdateUser, loadingUpdateUser } = useSelector(
    (state) => state.usersManagementReducer
  );
  const [value, setValue] = React.useState(0);
  const [typePassword, settypePassword] = useState("password");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(getInfoUser({ taiKhoan: currentUser?.taiKhoan }));
    dispatch(getComment());
    return () => dispatch(resetUserList());
  }, []);
  useEffect(() => {
    if (commentList) {
      const { posts, likePosts } = commentList.reduce(
        (obj, post) => {
          let posts = obj.posts;
          let likePosts = obj.likePosts;
          if (post.avtId === currentUser.taiKhoan) {
            posts++;
            likePosts += post.userLikeThisComment.length;
          }
          return { ...obj, posts, likePosts };
        },
        { posts: 0, likePosts: 0 }
      );
      setdataShort((data) => ({ ...data, posts, likePosts }));
    }
    if (successInfoUser) {
      const ticket = successInfoUser.thongTinDatVe.length;
      const total = successInfoUser.thongTinDatVe.reduce((total, ticket) => {
        return total + ticket.danhSachGhe.length * ticket.giaVe;
      }, 0);
      setdataShort((data) => ({ ...data, ticket, total }));
    }
  }, [commentList, successInfoUser]);
  useEffect(() => {
    if (successUpdateUser) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Cập nhật thành công",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [successUpdateUser]);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const updateUserSchema = yup.object().shape({
    taiKhoan: yup.string().required("*Tài khoản không được bỏ trống !"),
    matKhau: yup.string().required("*Mật khẩu không được bỏ trống !"),
    email: yup
      .string()
      .required("*Email không được bỏ trống !")
      .email("* Email không hợp lệ "),
    soDt: yup
      .string()
      .required("*Số điện thoại không được bỏ trống !")
      .matches(phoneRegExp, "Số điện thoại không hợp lệ!"),
    hoTen: yup.string().required("*Tên không được bỏ trống !"),
  });

  const handleSubmit = (user) => {
    if (loadingUpdateUser) {
      return;
    }
    dispatch(putUserUpdate(user));
  };
  const handleToggleHidePassword = () => {
    if (typePassword === "password") {
      settypePassword("text");
    } else {
      settypePassword("password");
    }
  };
  const getIdSeat = (danhSachGhe) => {
    return danhSachGhe
      .reduce((listSeat, seat) => {
        return [...listSeat, seat.tenGhe];
      }, [])
      .join(", ");
  };
  return (
    <div className="bootstrap snippet mb-4">
      <br />
      <div className="row">
        <div className="col-sm-3">
          <div className="text-center">
            <img
              src={FAKE_AVATAR}
              className={`avatar rounded-circle img-thumbnail ${
                isDesktop ? "w-100" : "w-50"
              }`}
              alt="avatar"
            />
            <h1 className="my-2">{successInfoUser?.taiKhoan}</h1>
          </div>
          {currentUser.maLoaiNguoiDung === "QuanTri" && (
            <div className="text-center mb-2">
              <Fab
                variant="extended"
                color="primary"
                onClick={() => history.push("/admin/users")}
              >
                <NavigationIcon className={classes.extendedIcon} />
                Tới trang quản trị
              </Fab>
            </div>
          )}
          <ul className="list-group">
            <li className="list-group-item text-muted">Hoạt động</li>
            <li className="list-group-item text-right">
              <span className="float-left">
                <strong>Bình luận</strong>
              </span>
              {dataShort.posts}
            </li>
            <li className="list-group-item text-right">
              <span className="float-left">
                <strong>Bình luận được thích </strong>
              </span>
              {dataShort.likePosts}
            </li>
            <li className="list-group-item text-right">
              <span className="float-left">
                <strong>Số lần thanh toán</strong>
              </span>
              {dataShort.ticket}
            </li>
            <li className="list-group-item text-right">
              <span className="float-left">
                <strong>Tổng tiền $</strong>
              </span>
              {dataShort.total}
            </li>
          </ul>
        </div>
        <div className={`col-sm-9 py-3 px-0`}>
          <AppBar className={classes.appBar} position="static">
            <Tabs value={value} onChange={handleChange} centered={!isDesktop}>
              <Tab
                disableRipple
                classes={{
                  root: classes.tabButton,
                  selected: classes.tabSelected,
                }}
                label="Thông tin tài khoản"
              />
              <Tab
                disableRipple
                classes={{
                  root: classes.tabButton,
                  selected: classes.tabSelected,
                }}
                label="Lịch sử đặt vé"
              />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <Formik
              initialValues={{
                taiKhoan: successInfoUser?.taiKhoan ?? "",
                matKhau: successInfoUser?.matKhau ?? "",
                email: successInfoUser?.email ?? "",
                soDt: successInfoUser?.soDT ?? "",
                maNhom: "GP09",
                maLoaiNguoiDung: "KhachHang",
                hoTen: successInfoUser?.hoTen ?? "",
              }}
              enableReinitialize // cho phép cập nhật giá trị initialValues
              validationSchema={updateUserSchema}
              onSubmit={handleSubmit}
            >
              {(props) => (
                <Form className={`${classes.field}`}>
                  <div className="form-group">
                    <label>Tài khoản&nbsp;</label>
                    <ErrorMessage
                      name="taiKhoan"
                      render={(msg) => (
                        <span className="text-danger">{msg}</span>
                      )}
                    />
                    <Field
                      disabled
                      name="taiKhoan"
                      type="text"
                      className="form-control"
                      onChange={props.handleChange}
                    />
                  </div>
                  <div className={`form-group ${classes.password}`}>
                    <label>Mật khẩu&nbsp;</label>
                    <ErrorMessage
                      name="matKhau"
                      render={(msg) => (
                        <span className="text-danger">{msg}</span>
                      )}
                    />
                    <Field
                      name="matKhau"
                      type={typePassword}
                      className="form-control"
                      onChange={props.handleChange}
                    />
                    <div
                      className={classes.eye}
                      onClick={handleToggleHidePassword}
                    >
                      {typePassword !== "password" ? (
                        <i className="fa fa-eye-slash"></i>
                      ) : (
                        <i className="fa fa-eye"></i>
                      )}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Họ và tên&nbsp;</label>
                    <ErrorMessage
                      name="hoTen"
                      render={(msg) => (
                        <span className="text-danger">{msg}</span>
                      )}
                    />
                    <Field
                      name="hoTen"
                      type="text"
                      className="form-control"
                      onChange={props.handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email&nbsp;</label>
                    <ErrorMessage
                      name="email"
                      render={(msg) => (
                        <span className="text-danger">{msg}</span>
                      )}
                    />
                    <Field
                      name="email"
                      type="email"
                      className="form-control"
                      onChange={props.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Số điện thoại&nbsp;</label>
                    <ErrorMessage
                      name="soDt"
                      render={(msg) => (
                        <span className="text-danger">{msg}</span>
                      )}
                    />
                    <Field
                      name="soDt"
                      type="text"
                      className="form-control"
                      onChange={props.handleChange}
                    />
                  </div>
                  <div className="text-left">
                    <button
                      type="submit"
                      className="btn btn-success"
                      disable={loadingUpdateUser.toString()}
                    >
                      Cập nhật
                    </button>
                    {errorUpdateUser && (
                      <div className="alert alert-danger">
                        <span>{errorUpdateUser}</span>
                      </div>
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </TabPanel>
          <TabPanel
            value={value}
            index={1}
            style={{ padding: isDesktop ? "0px 0px" : "0px 16px" }}
            isDesktop={isDesktop}
          >
            <div className="table-responsive">
              <table className="table table-striped table-hover table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Stt</th>
                    <th scope="col">Tên phim</th>
                    <th scope="col">Thời lượng phim</th>
                    <th scope="col">Ngày đặt</th>
                    <th scope="col">Tên Rạp</th>
                    <th scope="col">Mã vé</th>
                    <th scope="col">Tên ghế</th>
                    <th scope="col">Giá vé(vnđ)</th>
                    <th scope="col">Tổng tiền(vnđ)</th>
                  </tr>
                </thead>
                <tbody>
                  {successInfoUser?.thongTinDatVe
                    .map((sticket, i) => (
                      <tr key={sticket.maVe} className={classes.td}>
                        <th scope="row">{i + 1}</th>
                        <td>{sticket.tenPhim}</td>
                        <td>{sticket.thoiLuongPhim}</td>
                        <td>
                          {new Date(sticket.ngayDat).toLocaleDateString()},{" "}
                          {new Date(sticket.ngayDat).toLocaleTimeString(
                            "en-US",
                            { hour: "2-digit", minute: "2-digit" }
                          )}
                        </td>
                        <td>
                          {sticket.danhSachGhe[0].tenHeThongRap},{" "}
                          {sticket.danhSachGhe[0].tenRap}
                        </td>
                        <td>{sticket.maVe}</td>
                        <td>{getIdSeat(sticket.danhSachGhe)}</td>
                        <td>
                          {new Intl.NumberFormat("it-IT", {
                            style: "decimal",
                          }).format(sticket.giaVe)}
                        </td>
                        <td>
                          {new Intl.NumberFormat("it-IT", {
                            style: "decimal",
                          }).format(sticket.giaVe * sticket.danhSachGhe.length)}
                        </td>
                      </tr>
                    ))
                    .reverse()}
                </tbody>
              </table>
            </div>
          </TabPanel>
        </div>
      </div>
      {loadingInfoUser && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            display: "flex",
            backgroundColor: "rgb(255 255 255 / 67%)",
            zIndex: 1000,
          }}
        >
          <CircularProgress style={{ margin: "auto" }} />
        </div>
      )}
    </div>
  );
}
