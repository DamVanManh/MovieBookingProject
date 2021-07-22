import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import logoTix from "../Register/logo/logoTix.png";
import { login, resetErrorLoginRegister } from "../../reducers/actions/Auth";
import { LOADING_BACKTO_HOME } from "../../reducers/constants/Lazy";

const useStyles = makeStyles((theme) => ({
  eye: {
    position: "absolute",
    top: 32,
    right: 9,
    cursor: "pointer",
    color: "#000",
  },
  logoTix: {
    width: "209px",
    marginBottom: "13px",
    cursor: "pointer",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  text: {
    textAlign: "center",
    marginBottom: "30px",
  },
}));
export default function Login() {
  const { currentUser, errorLogin } = useSelector((state) => state.authReducer);
  let location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const [typePassword, settypePassword] = useState("password");
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    // đăng nhập thành công thì quay về trang trước đó
    if (currentUser) {
      if (location.state === "/") {
        // nếu trang trước đó là "/" thì phải hiện loading do trang home mất nhiều thời gian tải
        dispatch({ type: LOADING_BACKTO_HOME });
        setTimeout(() => {
          history.push("/");
        }, 50);
        return undefined;
      }
      history.push(location.state);
    }
  }, [currentUser]);
  useEffect(() => {
    return () => {
      dispatch(resetErrorLoginRegister());
    };
  }, []);

  const signinUserSchema = yup.object().shape({
    taiKhoan: yup.string().required("*Tài khoản không được bỏ trống !"),
    matKhau: yup.string().required("*Mật khẩu không được bỏ trống !"),
  });

  const handleSubmit = (user) => {
    dispatch(login(user));
  };
  const handleDangKy = () => {
    history.push("/dangky", location.state);
  };

  const handleHold = () => {
    if (!isDesktop) {
      return;
    }
    settypePassword("text");
  };
  const handleRelease = () => {
    if (!isDesktop) {
      return;
    }
    settypePassword("password");
  };
  const handleShowPassword = () => {
    if (isDesktop) {
      return;
    }
    if (typePassword === "password") {
      settypePassword("text");
    } else {
      settypePassword("password");
    }
  };

  return (
    <div className="text-light" style={{ padding: "60px 32px 30px" }}>
      <div className="container">
        <img src={logoTix} alt="logoTix" className={classes.logoTix} />
        <p className={classes.text}>
          Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!
        </p>
      </div>
      <div>
        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
          }}
          validationSchema={signinUserSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="col-sm-10 mx-auto">
              <div className="form-group position-relative">
                <label>Tài khoản&nbsp;</label>
                <ErrorMessage
                  name="taiKhoan"
                  render={(msg) => <small className="text-danger">{msg}</small>}
                />
                <Field type="text" className="form-control" name="taiKhoan" />
              </div>

              <div className="form-group position-relative">
                <label>Mật khẩu&nbsp;</label>
                <ErrorMessage
                  name="matKhau"
                  render={(msg) => <small className="text-danger">{msg}</small>}
                />
                <Field
                  type={typePassword}
                  className="form-control"
                  name="matKhau"
                />
                <div
                  className={classes.eye}
                  onMouseDown={handleHold}
                  onMouseUp={handleRelease}
                  onClick={handleShowPassword}
                >
                  {typePassword === "password" ? (
                    <i
                      className={isDesktop ? "fa fa-eye-slash" : "fa fa-eye"}
                    ></i>
                  ) : (
                    <i
                      className={isDesktop ? "fa fa-eye" : "fa fa-eye-slash"}
                    ></i>
                  )}
                </div>
              </div>
              <p
                className="text-success"
                style={{ cursor: "pointer" }}
                onClick={handleDangKy}
              >
                * Đăng ký
              </p>
              <button
                style={{
                  backgroundColor: "#3E63b6",
                  borderColor: "#3E63b6",
                  cursor: "pointer",
                }}
                disable={errorLogin?.toString()}
                type="submit"
                className="btn btn-success mt-3 container"
              >
                Đăng nhập
              </button>
              {/* error from api */}
              {errorLogin && (
                <div className="alert alert-danger">
                  <span> {errorLogin}</span>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
