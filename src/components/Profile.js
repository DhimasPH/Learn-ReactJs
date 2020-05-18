import React, {Component} from 'react';
import { withAuth } from '../context/AuthContext';

function Profile(props){
    return (
        <div>
            <h2>Halaman profile : {props.user}</h2>
        </div>
    )
}

export default withAuth(Profile)