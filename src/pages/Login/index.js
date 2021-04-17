import React, { useState } from "react";
import { login } from '../../reducers/actions/Auth';
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from 'formik'
import logoTix from "../Register/logo/logoTix.png"

export default function Login() {
  const [user, setUser] = useState({ taiKhoan: "", matKhau: "" });
  // useSelector lấy data từ reducer về
  const { loading, error } = useSelector((state) => state.authReducer);
  // useDispatch: dispatch action
  const dispatch = useDispatch();

  // lấy user từ local lên: khi xóa user dưới local sẽ phải đăng nhập lại
  const currentUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
  // const handleChange = evt => {
  //     const { name, value } = evt.target;
  //     setUser((currentForm) => ({ ...currentForm, [name]: value }))
  // }

  if (loading) {
    return <div>loading</div>
  }

  if (currentUser) {
    console.log('tai khoan hiện tại:', currentUser)
    return <Redirect to='/' />
  }

  const signinUserSchema = yup.object().shape({
    taiKhoan: yup.string().required("*Tài khoản không được bỏ trống !"),
    matKhau: yup.string().required("*Mật khẩu không được bỏ trống !"),
  })

  const handleSubmit = (user) => {
    dispatch(login(user))
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
          }}
          validationSchema={signinUserSchema}
          onSubmit={handleSubmit}
          render={(formikProp) => (
            <Form className="col-sm-8 mx-auto">
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
              <button
                style={{backgroundColor:"#3E63b6", borderColor: "#3E63b6" }}
                disable={loading}
                type="submit" className="btn btn-success mt-3 container" >
                Đăng nhập
                    </button>
              {/* nếu tồn tại lỗi thì hiện lỗi */}
              {error ? <div className="alert alert-danger"><span> {error}</span></div> : null}
            </Form>
          )}
        />
      </div>
    </div>
  )

}