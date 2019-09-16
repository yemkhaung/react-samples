import React, { Component } from "react";
import { Provider } from "react-redux";
import { SportsStoreDataStore } from "./data/DataStore";
import { Switch, Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import { ShopConnector } from "./shop/ShopConnector";

export class App extends Component {
    render = () => (
        <Provider store={SportsStoreDataStore}>
          <Router>
            <Switch>
              <Route path="/shop" component={ShopConnector} />
              <Redirect to="/shop" />
            </Switch>
          </Router>
        </Provider>
    );
}

export default App;
