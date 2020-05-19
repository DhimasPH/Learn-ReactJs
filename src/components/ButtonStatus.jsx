import React, {Component} from 'react';
import { withAuth } from '../context/AuthContext';

function ButtonStatus (props){
    return (
        <div>
            {
                props.isLoggedIn ? <button onClick={props.logout} > Logout </button> : <button >Login </button>
            }
        </div>
    )
}

export default withAuth(ButtonStatus)