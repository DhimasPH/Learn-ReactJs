import React, {Component} from 'react';
import './App.css';
import Login from './components/Login';
import AuthContextProvider from './context/AuthContext';
import Profile from './components/Profile';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'


class App extends Component{
  render (){
    return (
      <AuthContextProvider>
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
            <h1>React Login Jwt</h1><br/>
              <Route path='/' exact component={Login}></Route>
              <ProtectedRoute path="/profile" component={Profile}></ProtectedRoute>
            </header>
          </div>
        </BrowserRouter>
      </AuthContextProvider>
    );
  }
}

export default App;
