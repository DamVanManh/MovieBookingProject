import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function UserProfileRoute(props) {
  const { currentUser } = useSelector((state) => state.authReducer);
  const { component: UserProfile, ...routeProps } = props;
  return (
    <Route {...routeProps} render={(propsInRoute) => {
      if (currentUser) {
        return <UserProfile {...propsInRoute} />
      }
      return (
        <Redirect
          to={{
            pathname: "/dangnhap", // đang ở /taikhoan nếu nhấn đăng xuất thì về /dangnhap, truyền state là "/" > nếu nhấn X trong dang nhap thì về home, dang nhap thanh cong thì ve /taikhoan
            state: "/taikhoan",
          }}
        />
      )
    }} />
  )
}
export default UserProfileRoute;