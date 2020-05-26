import React, {Component} from 'react';
import Login from './components/Login';
import AuthContextProvider from './context/AuthContext';
import Profile from './components/Profile';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


class App extends Component{
  render (){
    return (
      <AuthContextProvider>
        <BrowserRouter>
            <header>
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand path="/">Aplikasi Sederhana React Js</Navbar.Brand>
              </Navbar>
            </header>
            <Container className="p-3">
              <Route path='/' exact component={Login}></Route>
              <ProtectedRoute path="/profile" component={Profile}></ProtectedRoute>
            </Container>
            <footer className="footer-copyright text-center py-3 myfooter">
              &copy; copyright Dhimas Herlambang {new Date().getFullYear()}
            </footer>
        </BrowserRouter>
      </AuthContextProvider>
    );
  }
}

export default App;
