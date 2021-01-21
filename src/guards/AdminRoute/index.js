// import React from 'react';
// import { Redirect, Route } from "react-router-dom";
// import { connect } from "react-redux";
// // higher order component: AdminRoute nhận vào props truyền từ App.js và props truyền từ reducer
//  function AdminRoute(props) {// higher order component: props nhận vào là một component
//   const {component: UsersManagement, currentUser, ...routeProps} = props;// <Component /> phải viết hoa chữ cái đầu nên component: UsersManagement giúp đổi tên
//   // ...routeProps chính là phần còn lại: exact path='/admin/users'
//   return (
//     <Route {...routeProps} render={(props) => {
//       // trước khi return về 
//       if (currentUser) {
//         // đã đăng nhập
//         if (currentUser.maLoaiNguoiDung === 'GV') {
//           return <UsersManagement {...props} />
//         }
//         // nếu không phải giảng viên thì về trang home
//         return <Redirect to='/' />
//       }
//       // chưa đăng nhập
//       return <Redirect to='/login' />
//     }} />
//   )
// }
// const mapStateToProps = state => {
//   return {
//     currentUser: state.authReducer.currentUser,
//   }
// }
// export default connect(mapStateToProps)(AdminRoute)


import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
 function AdminRoute(props) {
  const { currentUser } = useSelector((state) => state.authReducer);
  const {component: UsersManagement, ...routeProps} = props;
  return (
    <Route {...routeProps} render={(props) => {
      if (currentUser) {
        if (currentUser.maLoaiNguoiDung === 'QuanTri') {
          return <UsersManagement {...props} />
        }
        return <Redirect to='/' />
      }
      return <Redirect to='/login' />
    }} />
  )
}
export default AdminRoute;