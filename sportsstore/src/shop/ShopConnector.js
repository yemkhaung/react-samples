import React, { Component } from "react";
import { connect } from "react-redux";
import { loadData } from "../data/ActionCreators";
import { addToCart, updateCartQuantity, removeFromCart, clearCart } from "../data/CartActionCreators";
import { Switch, Route, Redirect } from "react-router-dom";
import { Shop } from "./Shop";
import { DataTypes } from "../data/Types";

const mapStateToProps = datastore => ({
    ...datastore
});

const mapDispatchToProps = {
    loadData,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    clearCart
};

const filterProducts = (products = [], category) =>
    !category || category === "All"
        ? products
        : products.filter(p => p.category.toLowerCase() === category.toLowerCase());

export const ShopConnector = connect(
    mapStateToProps,
    mapDispatchToProps
)(
    class extends Component {
        render() {
            return (
                <Switch>
                    <Route
                        path="/shop/products/:category?"
                        render={routeProps => (
                            <Shop
                                {...this.props}
                                {...routeProps}
                                products={filterProducts(this.props.products, routeProps.match.params.category)}
                            />
                        )}
                    />
                    <Redirect to="/shop/products" />
                </Switch>
            );
        }

        componentDidMount() {
            this.props.loadData(DataTypes.PRODUCTS);
            this.props.loadData(DataTypes.CATEGORIES);
        }
    }
);
