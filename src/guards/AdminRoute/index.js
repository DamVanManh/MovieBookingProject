
import React from 'react';
import { Redirect, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import AlertCanNotAccess from './alertCanNotAccess';

function AdminRoute(props) {
  const { currentUser } = useSelector((state) => state.authReducer);
  const { component: ComponentAdmin, ...rest } = props;
  let location = useLocation();
  return (
    <Route {...rest} render={(routeProps) => {
      if (currentUser) {
        if (currentUser.maLoaiNguoiDung === 'QuanTri') {
          return <ComponentAdmin {...routeProps} />
        }
        return <AlertCanNotAccess />
      }
      return <Redirect to={{
        pathname: "/dangnhap",
        state: location.pathname,
      }} />
    }} />
  )
}
export default AdminRoute;