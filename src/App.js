import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Default from "./components/Default";
import Details from "./components/Details";
import Cart from "./components/cart/Cart";
import ProductList from "./components/ProductList";
import Model from "../src/components/Model";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
          </Switch>
          <Model />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
