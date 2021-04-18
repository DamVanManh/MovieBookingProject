import React, { useState } from "react";
import { register } from '../../reducers/actions/Register';
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from 'formik'
import logoTix from "./logo/logoTix.png"


export default function Register() {
  const [user, setUser] = useState({ taiKhoan: "", matKhau: "", email: "", soDt: "", maNhom: "GP01", maLoaiNguoiDung: "KhachHang", hoTen: "" });
  // useSelector lấy data từ reducer về
  const { loading, error } = useSelector((state) => state.authReducer);
  // useDispatch: dispatch action
  const dispatch = useDispatch();

  // lấy user từ local lên: khi xóa user dưới local sẽ phải đăng nhập lại
  const currentUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
  // const handleChange = evt => {
  //   const { name, value } = evt.target;
  //   setUser((currentForm) => ({ ...currentForm, [name]: value }))
  // }

  if (loading) {
    return <div>loading</div>
  }

  if (currentUser) {
    console.log('tai khoan hiện tại:', currentUser)
    return <Redirect to='/' />
  }
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const signupUserSchema = yup.object().shape({
    taiKhoan: yup.string().required("*Tài khoản không được bỏ trống !"),
    matKhau: yup.string().required("*Mật khẩu không được bỏ trống !"),
    hoTen: yup.string().required("*Tên không được bỏ trống !"),
    soDT: yup.string().required("*Số điện thoại không được bỏ trống !").matches(phoneRegExp, "Số điện thoại không hợp lệ!"),
    email: yup.string().required("*Email không được bỏ trống !").email('* Email không hợp lệ '),
  })



  const handleSubmit = (user) => {
    dispatch(register(user))
  }

  return (
    <div className=" text-light" style={{ padding: "20px 32px 30px" }}>
      <div className="container" >
        <img src={logoTix} alt="logoTix" style={{ width: "200px", marginBottom: "10px", cursor: "pointer", display: "block", marginLeft: "auto", marginRight: "auto" }} />
        <p style={{ textAlign: "center", marginBottom: "10px" }}>Đăng Ký để được nhiều ưu đãi, mua vé và bảo mật thông tin!</p>
      </div>
      <Formik

        initialValues={
          {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            email: ""
          }
        }
        validationSchema={signupUserSchema} // validationSchdema:  thu vien yup nhập sai ko submit được 
        onSubmit={handleSubmit}
        render={(formikProps) => (
          <Form className="col-sm-10 mx-auto">
            <div className="form-group">
              <label>Tài khoản </label>
              {/* input thay bằng Field  */}
              <Field name="taiKhoan" type="text" className="form-control"
                onChange={formikProps.handleChange}
              />
              <ErrorMessage name="taiKhoan">
                {(msg) =>
                  <div className="alert alert-danger" style={{padding:" 2px 2px"}}>
                    {msg}
                  </div>
                }
              </ErrorMessage>
            </div>
            <div className="form-group">
              <label>Mật khẩu </label>
              <Field name="matKhau" type="password" className="form-control"
                onChange={formikProps.handleChange}
              />
              <ErrorMessage name="matKhau">
                {(msg) =>
                  <div className="alert alert-danger"  style={{padding:" 2px 2px"}} >
                    {msg}
                  </div>
                }
              </ErrorMessage>

            </div>
            <div className="form-group">
              <label>Họ và tên </label>
              <Field name="hoTen" type="text" className="form-control"
                onChange={formikProps.handleChange}
              />
              <ErrorMessage name="hoTen">
                {(msg) =>
                  <div className="alert alert-danger"  style={{padding:" 2px 2px"}}>
                    {msg}
                  </div>
                }
              </ErrorMessage>

            </div>

            <div className="form-group">
              <label>Email</label>
              <Field name="email" type="email" className="form-control"
                onChange={formikProps.handleChange}
              />
              <ErrorMessage name="email">
                {(msg) =>
                  <div className="alert alert-danger"  style={{padding:" 2px 2px"}}>
                    {msg}
                  </div>
                }
              </ErrorMessage>

            </div>
            <div className="form-group">
              <label>Số điện thoại</label>
              <Field name="soDT" type="text" className="form-control"
                onChange={formikProps.handleChange}
              />
              <ErrorMessage name="soDT">
                {(msg) =>
                  <div className="alert alert-danger"  style={{padding:" 2px 2px"}}>
                    {msg}
                  </div>
                }
              </ErrorMessage>
            </div>
            <div className="text-center p-2">
              <button type="submit" className="btn btn-success"
                disable={loading}>

                Đăng Ký
              </button>
              {error ? <div className="alert alert-danger"><span> {error}</span></div> : null}
            </div>
          </Form>
        )}
      > </Formik>
    </div>
  )

}