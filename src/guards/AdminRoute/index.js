
import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
function AdminRoute(props) {
  const { currentUser } = useSelector((state) => state.authReducer);
  const { component: UsersManagement, ...routeProps } = props;
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