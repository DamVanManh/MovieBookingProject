import React from "react";

import { Redirect, useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from 'formik'

import logoTix from "../Register/logo/logoTix.png"
import { login } from '../../reducers/actions/Auth'

export default function Login() {
  const { currentUser, errorLogin } = useSelector((state) => state.authReducer);
  let location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  if (currentUser) {
    if (!location.state) {
      location.state = "/"
    }
    return <Redirect to={location.state} />
  }

  const signinUserSchema = yup.object().shape({
    taiKhoan: yup.string().required("*Tài khoản không được bỏ trống !"),
    matKhau: yup.string().required("*Mật khẩu không được bỏ trống !"),
  })

  const handleSubmit = (user) => {
    dispatch(login(user))
  }
  const handleDangKy = () => {
    history.push("/dangky", location.pathname)
  }

  return (
    <div className="text-light" style={{ padding: "60px 32px 30px" }} >
      <div className="container" >
        <img src={logoTix} alt="logoTix" style={{ width: "209px", marginBottom: "60px", cursor: "pointer", display: "block", marginLeft: "auto", marginRight: "auto" }} />
        <p style={{ textAlign: "center", marginBottom: "30px" }}>Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!</p>
      </div>
      <div>
        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
            saveAccount: true,
          }}
          validationSchema={signinUserSchema}
          onSubmit={handleSubmit}
        >{(formikProp) => (
          <Form className="col-sm-10 mx-auto">
            <div className="form-group">
              <label>Tài khoản</label>
              <Field type="text" className="form-control" name="taiKhoan" onChange={formikProp.handleChange} />
              <ErrorMessage name="taiKhoan">
                {(msg) =>
                  <div className="alert alert-danger">
                    {msg}
                  </div>
                }
              </ErrorMessage>
            </div>

            <div className="form-group">
              <label>Mật khẩu</label>
              <Field type="password" className="form-control" name="matKhau" onChange={formikProp.handleChange} />
              <ErrorMessage name="matKhau">
                {(msg) =>
                  <div className="alert alert-danger">
                    {msg}
                  </div>
                }
              </ErrorMessage>
            </div>
            <p className="text-success" style={{ cursor: "pointer" }} onClick={handleDangKy}>* Đăng ký</p>
            <button
              style={{ backgroundColor: "#3E63b6", borderColor: "#3E63b6", cursor: "pointer" }}
              disable={errorLogin?.toString()}
              type="submit" className="btn btn-success mt-3 container" >
              Đăng nhập
                    </button>
            {/* nếu tồn tại lỗi thì hiện lỗi */}
            {errorLogin && <div className="alert alert-danger"><span> {errorLogin}</span></div>}
          </Form>
        )}</Formik>
      </div>
    </div>
  )
}
