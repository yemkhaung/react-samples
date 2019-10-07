import React, { Component } from "react";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { GraphQlUrl } from "../data/Urls";
import { ApolloProvider } from "react-apollo";
import { OrdersConnector } from "./OrdersConnector";

const graphqlClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: GraphQlUrl
    })
});

export class Admin extends Component {
    render = () => (
        <ApolloProvider client={graphqlClient}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col bg-info text-white">
                        <div className="navebar-brand">SPORTS STORE</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col p-2">
                        <OrdersConnector />
                    </div>
                </div>
            </div>
        </ApolloProvider>
    );
}
