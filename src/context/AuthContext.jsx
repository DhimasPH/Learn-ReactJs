import React, {Component} from 'react';
import axios from 'axios';

const axoisReq = axios.create();
const AuthContext = React.createContext();


// Konfigurasi axios

axoisReq.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')

    config.headers.Authorization = token
    return config
})

class AuthContextProvider extends Component{
    constructor(){
        super()
        this.state = {
            users : [],
            user : "",
            token : localStorage.getItem('token') || "",
            isLoggedIn : (localStorage.getItem('token') == null) ? false : true
        }
    }

    //login
    login = (credentials) => {
        return axoisReq.post("http://localhost:4000/api/login",credentials)
        .then (response => {

            if(response.data.success){
                const { token } = response.data
                const user = credentials.email
                localStorage.setItem("token",token)

                this.setState({
                    token,
                    isLoggedIn : true
                })
            }else{
                this.setState({
                    isLoggedIn : false
                })
            }
            
            return console.log(response)
            // window.location.href = "/profile";
        })
    }

    //init profil
    initUser = () => {
        return axoisReq.get("http://localhost:4000/api/profile")
        .then (response => {
            this.setState({ user : response.data });
            return response
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
                initUser : this.initUser,
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