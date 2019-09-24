import React, { Component } from "react";

export class CartDetailsRows extends Component {
    handleChange = (product, event) => {
        this.props.updateCartQuantity(product, event.target.value);
    };

    render = () => {
        if (!this.props.cart || this.props.cart.length === 0) {
            return (
                <tr>
                    <td colSpan="5">Your cart is empty</td>
                </tr>
            );
        }
        return (
            <React.Fragment>
                {this.props.cart.map(item => (
                    <tr key={item.product.id}>
                        <td>
                            <input
                                type="number"
                                onChange={e => this.handleChange(item.product, e)}
                                value={item.quantity}
                            />
                        </td>
                        <td>{item.product.name}</td>
                        <td>${item.product.price.toFixed(2)}</td>
                        <td>${(item.quantity * item.product.price).toFixed(2)}</td>
                        <td>
                            <button onClick={() => this.props.removeFromCart(item.product)}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                ))}
                <tr>
                    <th className="text-right" colSpan="3">Total Price: </th>
                    <th colSpan="2">${this.props.cartPrice.toFixed(2)}</th>
                </tr>
            </React.Fragment>
        );
    };
}
