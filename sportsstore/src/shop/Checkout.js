import React, { Component } from "react";
import { ValidatedForm } from "../forms/ValidatedForm";

export class Checkout extends Component {
    defaultAttrs = { type: "text", required: true };
    formModel = [
        { label: "Name" },
        { label: "Email", attrs: { type: "email" } },
        { label: "Address" },
        { label: "City" },
        { label: "Zip/Postal Code", name: "zip" },
        { label: "Country" }
    ];

    handleSubmit = formData => {
        const order = {
            ...formData,
            products: this.props.cart.map(item => ({
                quantity: item.quantity,
                product_id: item.product_id
            }))
        };
        this.props.placeOrder(order);
        this.props.clearCart();
        this.props.history.push("/shop/thanks");
    };

    handleCancel = () => {
        this.props.history.push("/shop/cart");
    };

    render = () => (
        <div className="container-fluid">
            <div className="row">
                <div className="col bg-dark text-white">
                    <div className="navbar-brand">SPORTS STORE</div>
                </div>
            </div>
            <div className="row">
                <div className="col m-2">
                    <ValidatedForm
                        defaultAttrs={this.defaultAttrs}
                        formModel={this.formModel}
                        submitCallback={this.handleSubmit}
                        cancelCallback={this.handleCancel}
                        submitText="Place Order"
                        cancelText="Return to Cart"
                    />
                </div>
            </div>
        </div>
    );
}
