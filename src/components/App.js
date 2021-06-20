import React, { Component } from 'react';
import './App.css';
import VisibleItemList from "./VisibleItemList";
import VisibleCart from "./VisibleCart";
import {Route} from 'react-router-dom';
import Header from "./Header/index";
import VisibleNotification from "./Notification"
import LoginPage from './pages/Login';
import NewUser from './pages/NewUser.js';

const MainPage = () => {
    return (
        <div className="listingContainer">
            <div>
                <Header/>
            </div>
            <div>
                <VisibleNotification/>
            </div>
            <div>
                <VisibleItemList/>
            </div>
        </div>
    );
};

class App extends Component {
  render() {
    return (
        <div>
            <Route exact path="/" component={MainPage}/>
            <Route path="/cart" component={VisibleCart}/>
            <Route path="/login" component={LoginPage}></Route>
            <Route path="/register" component ={NewUser}/>
        </div>
    );
  }
}

export default App;
