import React, {Component} from 'react';
import {withAuth} from '../context/AuthContext';
import {Redirect} from 'react-router-dom';


class Login extends Component{
    state = {
        email : "",
        password : ""
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //metode login
        this.props.login(this.state)
    }

    render (){
        if(this.props.isLoggedIn)
            return <Redirect push to="/profile"></Redirect>


        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.email}  type="email" name="email" placeholder="Email"/>
                    <input onChange={this.handleChange} value={this.state.password}  type="password" name="password" placeholder="Password"/>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default withAuth(Login);