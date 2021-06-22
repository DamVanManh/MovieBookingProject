
import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function AdminRoute(props) {
  const { currentUser } = useSelector((state) => state.authReducer);
  const { component: ComponentAdmin, ...rest } = props;
  return (
    <Route {...rest} render={(routeProps) => {
      if (currentUser) {
        if (currentUser.maLoaiNguoiDung === 'QuanTri') {
          return <ComponentAdmin {...routeProps} />
        }
        return <Redirect to='/' />
      }
      return <Redirect to='/dangnhap' />
    }} />
  )
}
export default AdminRoute;