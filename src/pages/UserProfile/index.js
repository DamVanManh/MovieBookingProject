import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from "@material-ui/core"
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from 'formik'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Swal from "sweetalert2";
import CircularProgress from '@material-ui/core/CircularProgress';

import { FAKE_AVATAR } from '../../constants/config';
import { getInfoUser, putUserUpdate, resetUserList } from "../../reducers/actions/UsersManagement";
import { getComment } from '../../reducers/actions/MovieDetail';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: 'transparent',
    color: 'black',
    boxShadow: 'none',
  },
  field: {
    maxWidth: 500,
  },
  password: {
    position: "relative"
  },
  eye: {
    position: "absolute",
    top: 31,
    right: 9,
    cursor: "pointer",
  }
}))

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box p={3}>
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
  const classes = useStyles();
  const dispatch = useDispatch();
  const { successInfoUser, loadingInfoUser } = useSelector((state) => state.usersManagementReducer);
  const { currentUser } = useSelector((state) => state.authReducer);
  const { commentList } = useSelector(state => state.movieDetailReducer);
  const [dataShort, setdataShort] = useState({ ticket: 0, posts: 0, likePosts: 0, total: 0 })
  const { successUpdateUser, errorUpdateUser, loadingUpdateUser } = useSelector((state) => state.usersManagementReducer);
  const [value, setValue] = React.useState(0);
  const [typePassword, settypePassword] = useState("password")

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(getInfoUser({ taiKhoan: currentUser?.taiKhoan }))
    dispatch(getComment())
    return () => dispatch(resetUserList())
  }, [])
  useEffect(() => {
    if (commentList) {
      const { posts, likePosts } = commentList.reduce((obj, post) => {
        let posts = obj.posts
        let likePosts = obj.likePosts
        if (post.avtId === currentUser.taiKhoan) {
          posts++
          likePosts += post.userLikeThisComment.length
        }
        return { ...obj, posts, likePosts }
      }, { posts: 0, likePosts: 0 })
      setdataShort(data => ({ ...data, posts, likePosts }))
    }
    if (successInfoUser) {
      const ticket = successInfoUser.thongTinDatVe.length
      const total = successInfoUser.thongTinDatVe.reduce((total, ticket) => {
        return total + ticket.danhSachGhe.length * ticket.giaVe
      }, 0)
      setdataShort(data => ({ ...data, ticket, total }))
    }
  }, [commentList, successInfoUser])
  useEffect(() => {
    if (successUpdateUser) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Cập nhật thành công',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }, [successUpdateUser])

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const updateUserSchema = yup.object().shape({
    taiKhoan: yup.string().required("*Tài khoản không được bỏ trống !"),
    matKhau: yup.string().required("*Mật khẩu không được bỏ trống !"),
    email: yup.string().required("*Email không được bỏ trống !").email('* Email không hợp lệ '),
    soDt: yup.string().required("*Số điện thoại không được bỏ trống !").matches(phoneRegExp, "Số điện thoại không hợp lệ!"),
    hoTen: yup.string().required("*Tên không được bỏ trống !"),
  })

  const handleSubmit = (user) => {
    if (loadingUpdateUser) {
      return
    }
    dispatch(putUserUpdate(user))
  }
  const handleToggleHinePassword = () => {
    if (typePassword === "password") {
      settypePassword("text")
    } else {
      settypePassword("password")
    }
  }

  return (
    <div className="bootstrap snippet mb-4">
      <br />
      <div className="row">
        <div className="col-sm-3">
          <div className="text-center">
            <img src={FAKE_AVATAR} className="avatar rounded-circle img-thumbnail" alt="avatar" />
            <h1>{successInfoUser?.taiKhoan}</h1>
          </div><br />
          <ul className="list-group">
            <li className="list-group-item text-muted">Activity</li>
            <li className="list-group-item text-right"><span className="float-left"><strong>Posts</strong></span>{dataShort.posts}</li>
            <li className="list-group-item text-right"><span className="float-left"><strong>Like Posts</strong></span>{dataShort.likePosts}</li>
            <li className="list-group-item text-right"><span className="float-left"><strong>Ticket</strong></span>{dataShort.ticket}</li>
            <li className="list-group-item text-right"><span className="float-left"><strong>Total $</strong></span>{dataShort.total}</li>
          </ul>
        </div>
        <div className="col-sm-9 pt-3">
          <AppBar className={classes.appBar} position="static" >
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
              <Tab label="Thông tin tài khoản" />
              <Tab label="Thông tin đặt vé" />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <Formik
              initialValues={{
                taiKhoan: successInfoUser?.taiKhoan,
                matKhau: successInfoUser?.matKhau,
                email: successInfoUser?.email,
                soDt: successInfoUser?.soDT,
                maNhom: "GP09",
                maLoaiNguoiDung: "KhachHang",
                hoTen: successInfoUser?.hoTen,
              }}
              enableReinitialize // cho phép cập nhật giá trị initialValues
              validationSchema={updateUserSchema}
              onSubmit={handleSubmit}
            >{(props) => (
              <Form className={`${classes.field}`}>
                <div className="form-group">
                  <label>Tài khoản&nbsp;</label>
                  <ErrorMessage name="taiKhoan" render={msg => <span className="text-danger">{msg}</span>} />
                  <Field disabled name="taiKhoan" type="text" className="form-control"
                    onChange={props.handleChange}
                  />
                </div>
                <div className={`form-group ${classes.password}`}>
                  <label>Mật khẩu&nbsp;</label>
                  <ErrorMessage name="matKhau" render={msg => <span className="text-danger">{msg}</span>} />
                  <Field name="matKhau" type={typePassword} className="form-control"
                    onChange={props.handleChange}
                  />
                  <div className={classes.eye} onClick={handleToggleHinePassword}>
                    {typePassword === "password" ? <i class="fa fa-eye-slash"></i> : <i class="fa fa-eye"></i>}
                  </div>
                </div>
                <div className="form-group">
                  <label>Họ và tên&nbsp;</label>
                  <ErrorMessage name="hoTen" render={msg => <span className="text-danger">{msg}</span>} />
                  <Field name="hoTen" type="text" className="form-control"
                    onChange={props.handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Email&nbsp;</label>
                  <ErrorMessage name="email" render={msg => <span className="text-danger">{msg}</span>} />
                  <Field name="email" type="email" className="form-control"
                    onChange={props.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Số điện thoại&nbsp;</label>
                  <ErrorMessage name="soDt" render={msg => <span className="text-danger">{msg}</span>} />
                  <Field name="soDt" type="text" className="form-control"
                    onChange={props.handleChange}
                  />
                </div>
                <div className="text-left">
                  <button type="submit" className="btn btn-success" disable={loadingUpdateUser.toString()}>Cập nhật</button>{errorUpdateUser && <div className="alert alert-danger"><span>{errorUpdateUser}</span></div>}
                </div>
              </Form>
            )}</Formik>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Stt</th>
                  <th scope="col">Tên Phim</th>
                  <th scope="col">Thời lượng phim</th>
                  <th scope="col">Ngày đặt</th>
                  <th scope="col">Số lượng ghế</th>
                  <th scope="col">Giá vé(vnđ)</th>
                  <th scope="col">Tổng tiền(vnđ)</th>
                </tr>
              </thead>
              <tbody>
                {successInfoUser?.thongTinDatVe.map((sticket, i) => (
                  <tr key={sticket.maVe}>
                    <th scope="row">{i + 1}</th>
                    <td>{sticket.tenPhim}</td>
                    <td>{sticket.thoiLuongPhim}</td>
                    <td>{new Date(sticket.ngayDat).toLocaleString()}</td>
                    <td>{sticket.danhSachGhe.length}</td>
                    <td>{new Intl.NumberFormat('it-IT', { style: 'decimal' }).format(sticket.giaVe)}</td>
                    <td>{new Intl.NumberFormat('it-IT', { style: 'decimal' }).format(sticket.giaVe * sticket.danhSachGhe.length)}</td>
                  </tr>
                )).reverse()}
              </tbody>
            </table>
          </TabPanel>
        </div>
      </div>
      {loadingInfoUser && <div style={{ position: "fixed", top: 0, right: 0, bottom: 0, left: 0, display: "flex", backgroundColor: "rgb(255 255 255 / 67%)", zIndex: 1000, }}>
        <CircularProgress style={{ margin: "auto" }} />
      </div>}
    </div>
  )
}
