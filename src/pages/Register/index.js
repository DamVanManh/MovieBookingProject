import React, { useState } from "react";
import { register } from '../../reducers/actions/Register';
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

export default function Register() {
  const [user, setUser] = useState({ taiKhoan: "", matKhau: "", email: "", soDt: "", maNhom: "GP01", maLoaiNguoiDung: "KhachHang", hoTen: "" });
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
    <div >
      <div >
        <div className="mx-3 text-light">
          <div className="form-group">
            <label htmlFor="taiKhoan">Tài Khoản</label>
            <input
              type="text"
              className="form-control"
              id="taiKhoan"
              name="taiKhoan"
              value={user.taiKhoan} // khi đăng ký không thành công thì page sẽ load lại > dữ liệu cũ đã ghi sẽ bị xóa > thao tác này sẽ lấy giữ lại đúng giá trị cũ
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
              value={user.matKhau}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="matKhau">email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="soDt">Số Điện Thoại</label>
            <input
              type="number"
              className="form-control"
              id="soDt"
              name="soDt"
              value={user.soDt}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="hoTen">Họ Tên</label>
            <input
              type="text"
              className="form-control"
              id="hoTen"
              name="hoTen"
              value={user.hoTen}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-success"
            onClick={() => dispatch(register(user))}
            disable={loading} // trong trường hợp đang chờ mạng gui api dang ký thì cần disable nút này
          >Đăng Ký</button>

          {/* nếu tồn tại lỗi thì hiện lỗi */}
          {error ? <div className="alert alert-danger"><span> {error}</span></div> : null}
        </div>
      </div>
    </div>
  )
}
