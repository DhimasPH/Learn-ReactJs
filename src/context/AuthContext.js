import React, {Component} from 'react';
import axios from 'axios';

const axoisReq = axios.create();
const AuthContext = React.createContext();


class AuthContextProvider extends Component{
    constructor(){
        super()
        this.state = {
            users : [],
            user : localStorage.getItem('user') || "",
            token : localStorage.getItem('token') || "",
            isLoggedIn : (localStorage.getItem('user') == null) ? false : true
        }
    }

    //login
    login = (credentials) => {
        return axoisReq.post("http://localhost:4000/api/login",credentials)
        .then (response => {
            const { token } = response.data
            const user = credentials.email
            localStorage.setItem("token",token)
            localStorage.setItem("user",user)

            this.setState({
                user,
                token,
                isLoggedIn : true
            })

            return console.log(response)
            // window.location.href = "/profile";
        })
    }

    //logout

    logout = () => {
        localStorage.removeItem('token')
        this.setState({
            isLoggedIn : false
        })

        return console.log("Logout berhasil")
    }

    render (){
        return (
            <AuthContext.Provider value ={{
                login : this.login,
                logout : this.logout,
                ...this.state
            }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

// Higher order component

export const withAuth = (WrappedComponent) => {
    return class extends Component {
        render () {
            return (
                <AuthContext.Consumer>
                    {(context) => (
                        <WrappedComponent {...this.props} {...context}></WrappedComponent>
                    )}
                </AuthContext.Consumer>
            )
        }
    }
}

export default AuthContextProvider