import React, {Component} from 'react';
import {withAuth} from '../context/AuthContext';
import {Redirect} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser , faKey } from '@fortawesome/free-solid-svg-icons'


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
            <div className="card">
                <article className="card-body">
                    <h4 className="card-title text-center mb-4 mt-1">Sign in</h4>
                    <hr/>
                    { this.props.alert !='' && <p className={'text-'+ this.props.alert +' text-center'}> {this.props.message} </p> }
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> </span>
                                </div>
                                <input onChange={this.handleChange} className="form-control" value={this.state.email} required  type="email" name="email" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <FontAwesomeIcon icon={faKey}></FontAwesomeIcon> </span>
                                </div>
                                <input onChange={this.handleChange} className="form-control" value={this.state.password} required  type="password" name="password" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block"> Login  </button>
                        </div>
                        {/* <p className="text-center"><a href="#" className="btn">Forgot password?</a></p> */}
                    </form>
                </article>
            </div>
        );
    }
}

export default withAuth(Login);