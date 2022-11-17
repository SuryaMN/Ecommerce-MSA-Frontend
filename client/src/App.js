import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Inventory from "./components/Inventory";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import AddProduct from "./components/AddProduct";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/inventory" component={Inventory} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/addProduct" component={AddProduct} />
        <Route exact path="/inventory/:id" component={ProductPage} />
      </Router>
    </div>
  );
}

export default App;
