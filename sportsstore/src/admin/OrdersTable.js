import React, { Component } from "react";
import { PaginationControls } from "../PaginationControls";
import { OrdersRow } from "./OrdersRow";

export class OrdersTable extends Component {
    render = () => (
        <div>
            <h4 className="bg-info text-white text-center p-2">{this.props.totalSize} Orders</h4>
            <PaginationControls keys={["ID", "Name"]} {...this.props} />
            <table className="table-sm table-sm table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th className="text-right">Total</th>
                        <th className="text-center">Shipped</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.orders.map(order => (
                        <OrdersRow
                            key={order.id}
                            order={order}
                            toggleShipped={() => this.props.toggleShipped(order.id, !order.shipped)}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
