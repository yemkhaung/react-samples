import React, { Component, lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { SportsStoreDataStore } from "./data/DataStore";
import { Switch, Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import { ShopConnector } from "./shop/ShopConnector";
// import Admin from "./admin/Admin";
import { AuthProviderImpl } from "./auth/AuthProviderImpl";

const Admin = lazy(() => import("./admin/Admin"));

export class App extends Component {
    render = () => (
        <Provider store={SportsStoreDataStore}>
            <AuthProviderImpl>
                <Router>
                    <Switch>
                        <Route path="/shop" component={ShopConnector} />
                        <Route
                            path="/admin"
                            render={routeProps => (
                                <Suspense fallback={<h3>Loading...</h3>}>
                                    <Admin {...routeProps} />
                                </Suspense>
                            )}
                        />
                        <Redirect to="/shop" />
                    </Switch>
                </Router>
            </AuthProviderImpl>
        </Provider>
    );
}

export default App;
