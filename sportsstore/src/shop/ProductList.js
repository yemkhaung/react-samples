import React, { Component } from "react";


export class ProductList extends Component {
    render = () => {
        if (this.props.products == null || this.props.products.length == 0) {
            return <h5 className="p-2">No products!</h5>
        }
        return this.props.products.map(p => (
            <div className="card bg-light m-1 p-1">
                <h4>
                    {p.name}
                    <span className="badge badge-primary badge-pill float-lg-right">
                        ${p.price.toFixed(2)}
                    </span>
                </h4>
                <div className="card-text bg-white p-1">{p.description}</div>
            </div>
        ));
    }
        
}
