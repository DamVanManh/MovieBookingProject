import React, { useEffect } from "react";

import { useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Swal from "sweetalert2";

import { register, resetErrorLoginRegister } from "../../reducers/actions/Auth";
import logoTix from "./logo/logoTix.png";

export default function Register() {
  const { responseRegister, loadingRegister, errorRegister } = useSelector(
    (state) => state.authReducer
  );
  let location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (responseRegister) {
      // đăng ký thành công thì đăng nhập, responseRegister để bỏ qua componentditmount
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Bạn đã đăng ký thành công",
        showConfirmButton: false,
        timer: 2000,
      });
      history.push("/dangnhap", location.state);
    }
  }, [responseRegister]);
  useEffect(() => {
    return () => {
      dispatch(resetErrorLoginRegister());
    };
  }, []);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const signupUserSchema = yup.object().shape({
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
    // trường hợp nào thì cho đăng ký(return true): loadingRegister=false và responseRegister=null
    console.log(`user`, user);
    if (!loadingRegister && !responseRegister) {
      dispatch(register(user));
    }
  };

  return (
    <div className="text-light" style={{ padding: "20px 32px 30px" }}>
      <div className="container">
        <img
          src={logoTix}
          alt="logoTix"
          style={{
            width: "200px",
            marginBottom: "10px",
            cursor: "pointer",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <p style={{ textAlign: "center", marginBottom: "10px" }}>
          Đăng Ký để được nhiều ưu đãi, mua vé và bảo mật thông tin!
        </p>
      </div>
      <Formik
        initialValues={{
          taiKhoan: "",
          matKhau: "",
          email: "",
          soDt: "",
          maNhom: "GP09",
          maLoaiNguoiDung: "KhachHang", // điền QuanTri backend cũng áp dụng KhachHang
          hoTen: "",
        }}
        validationSchema={signupUserSchema} // validationSchdema:  thu vien yup nhập sai ko submit được
        onSubmit={handleSubmit}
      >
        {(formikProps) => (
          <Form className="col-sm-12">
            <div className="form-group">
              <label>Tài khoản&nbsp;</label>
              <ErrorMessage
                name="taiKhoan"
                render={(msg) => <span className="text-danger">{msg}</span>}
              />
              <Field name="taiKhoan" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Mật khẩu&nbsp;</label>
              <ErrorMessage
                name="matKhau"
                render={(msg) => <span className="text-danger">{msg}</span>}
              />
              <Field name="matKhau" type="password" className="form-control" />
            </div>
            <div className="form-group">
              <label>Họ và tên&nbsp;</label>
              <ErrorMessage
                name="hoTen"
                render={(msg) => <span className="text-danger">{msg}</span>}
              />
              <Field name="hoTen" type="text" className="form-control" />
            </div>

            <div className="form-group">
              <label>Email&nbsp;</label>
              <ErrorMessage
                name="email"
                render={(msg) => <span className="text-danger">{msg}</span>}
              />
              <Field name="email" type="email" className="form-control" />
            </div>
            <div className="form-group">
              <label>Số điện thoại&nbsp;</label>
              <ErrorMessage
                name="soDt"
                render={(msg) => <span className="text-danger">{msg}</span>}
              />
              <Field name="soDt" type="text" className="form-control" />
            </div>
            {/* <div className="form-group">
              <label>Loại tài khoản&nbsp;</label>
              <div>
                <label>
                  <Field type="radio" name="maLoaiNguoiDung" value="KhachHang" />
                  Khách Hàng
                </label>
                <label>
                  <Field type="radio" name="maLoaiNguoiDung" value="QuanTri" />
                  Quản Trị
                </label>
              </div>
            </div> */}
            <div className="text-center p-2">
              <button
                type="submit"
                className="btn btn-success"
                disable={loadingRegister.toString()}
              >
                Đăng Ký
              </button>
              {/* error from api */}
              {errorRegister && (
                <div className="alert alert-danger">
                  <span>{errorRegister}</span>
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
