import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Product from "./components/Product/Product";
import Order from "./components/Orders/Order";
import Details from "./components/Details/Details";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/products" className="app__products">
            <Header />
            <div className="app__asideProduct">
              <Aside />
              <Product />
            </div>
          </Route>

          <Route path="/orders">
            <Header />
            <div className="app__asideProduct">
              <Aside />
              <Order />
            </div>
          </Route>

          <Route path="/details">
            <Header />
            <div className="app__asideProduct">
              <Aside />
              <Details />
            </div>
          </Route>

          <Route className="/">
            <Header />
            <div className="app__asideProduct">
              <Aside />
              <Home />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
