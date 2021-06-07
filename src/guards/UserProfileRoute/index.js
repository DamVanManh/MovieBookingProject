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
            pathname: "/dangnhap",
            state: "/taikhoan",
          }}
        />
      )
    }} />
  )
}
export default UserProfileRoute;