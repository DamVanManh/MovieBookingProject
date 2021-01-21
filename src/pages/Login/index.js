// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { login } from '../../actions/Auth';
// import { Redirect } from "react-router-dom";

// class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       taiKhoan: "",
//       matKhau: "",
//     };
//   }
//   handleChange = evt => { // khi điền thông tin vào input thì thay đổi thông tin tương ứng trong state
//     const { name, value } = evt.target
//     this.setState({
//       [name]: value,
//     })
//   }
//   render() {
//     // nếu đã đăng nhập thành công thì chuyển sang trang home, đăng nhập thành công back lại không được do biến currentUser luôn có giá trị
//     if (this.props.currentUser) {
//       return <Redirect to='/' />
//     }
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-sm-6 mx-auto">
//             <div className="form-group">
//               <label htmlFor="taiKhoan">Tài Khoản</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="taiKhoan"
//                 name="taiKhoan"
//                 value={this.state.taiKhoan} // không biết cái này dùng để làm gì?
//                 onChange={this.handleChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="matKhau">Mật Khẩu</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="matKhau"
//                 name="matKhau"
//                 value={this.state.matKhau}
//                 onChange={this.handleChange}
//               />
//             </div>
//             <button className="btn btn-success"
//               onClick={() => this.props.login(this.state)} // khi nhấn đăng nhập thì gửi obj state lên action
//               disable={this.props.loading} // trong trường hợp đang chờ mạng gui api dang nhâp thì cần disable nút này
//             >Đăng Nhập</button>
//             {/* nếu tồn tại lỗi thì hiện lỗi */}
//             {this.props.error ?
//               <div className="alert alert-danger">
//                 <span> {this.props.error}</span>
//               </div>
//               : null
//             }
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     login: (value) => dispatch(login(value))
//   }
// }
// const mapStateToProps = state => {
//   return {
//     currentUser: state.authReducer.currentUser,
//     loading: state.authReducer.loading,
//     error: state.authReducer.error,
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Login)



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
    <div className="container">
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