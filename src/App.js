import React,{useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import Login from "./Login.js";
import {auth} from "./firebase.js";
import {useStateValue} from "./StateProvider.js";

function App() {
  const[{},dispatch]=useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }
      else{
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
  },[]);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
