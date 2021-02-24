
import React, { useState } from "react";
import { login } from '../../actions/Auth';
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

function Login() {
  const [user, setUser] = useState({ taiKhoan: "", matKhau: "" });
  // useSelector lấy data từ reducer về
  const { loading, error } = useSelector((state) => state.authReducer);
  // useDispatch: dispatch action
  const dispatch = useDispatch();

  // lấy user từ local lên: khi xóa user dưới local sẽ phải đăng nhập lại
  const currentUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
  const handleChange = evt => {
    const { name, value } = evt.target;
    setUser((currentForm) => ({ ...currentForm, [name]: value }))
  }

  if (loading) {
    return <div>loading</div>
  }

  if (currentUser) {
    console.log('tai khoan hiện tại:', currentUser)
    return <Redirect to='/' />
  }

  return (
    <div className="text-light">
      <div className="row">
        <div className="col-sm-6 mx-auto">
          <div className="form-group">
            <label htmlFor="taiKhoan">Tài Khoản</label>
            <input
              type="text"
              className="form-control"
              id="taiKhoan"
              name="taiKhoan"
              // value={user.taiKhoan} // không biết cái này dùng để làm gì?
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="matKhau">Mật Khẩu</label>
            <input
              type="password"
              className="form-control"
              id="matKhau"
              name="matKhau"
              // value={user.matKhau}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-success"
            onClick={() => dispatch(login(user))} // khi nhấn đăng nhập thì gửi obj state lên action
            disable={loading} // trong trường hợp đang chờ mạng gui api dang nhâp thì cần disable nút này
          >Đăng Nhập</button>

          {/* nếu tồn tại lỗi thì hiện lỗi */}
          {error ? <div className="alert alert-danger"><span> {error}</span></div> : null}
        </div>
      </div>
    </div>
  )
}
export default Login;