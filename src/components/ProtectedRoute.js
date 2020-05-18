import React, {Component} from 'react';
import { withAuth } from '../context/AuthContext';
import {Route, Redirect} from 'react-router-dom';

function ProtectedRoute(props){
    const { component : Component, ...rest } = props

    return (
        props.isLoggedIn ? <Route {...rest} component={Component} ></Route> : <Redirect push to="/"></Redirect>
    )
}

export default withAuth(ProtectedRoute)