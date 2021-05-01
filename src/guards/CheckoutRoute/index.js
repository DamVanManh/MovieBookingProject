import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function CheckoutRoute(props) { // props: { exact, path="/datve/:maLichChieu", component={BookTickets}}
  const { currentUser } = useSelector((state) => state.authReducer);
  const { component: BookTickets, ...routeProps } = props;
  return (
    <Route {...routeProps} render={(props) => {
      if (currentUser) {
        return <BookTickets {...props} />
      }
      return (
        <Redirect
          to={{
            pathname: "/dangnhap",
            state: props.location.pathname
          }}
        />
      )
    }} />
  )
}
export default CheckoutRoute;