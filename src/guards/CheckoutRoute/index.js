import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function CheckoutRoute(props) {
    const { currentUser } = useSelector((state) => state.authReducer);
    const { component: BookTickets, ...routeProps } = props;
    return (
        <Route {...routeProps} render={(props) => {
            if (currentUser) {
                return <BookTickets {...props} />
            }
            else {
                return <Redirect to='/dangnhap' />
            }
        }} />
    )
}
export default CheckoutRoute;