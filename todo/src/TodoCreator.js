import React, { Component } from "react";

export class TodoCreator extends Component {

    constructor() {
        super();
        this.state = {
            newItemText: ""
        }
    }

    createNewTodo = () => {
        this.props.callback(this.state.newItemText);
        this.state.newItemText = "";
    }

    updateNewTextValue = (event) => {
        this.setState({
            newItemText: event.target.value
        })
    }

    render = () => (
        <div className="my-1">
            <input
                type="text"
                className="form-control"
                value={this.state.newItemText}
                onChange={this.updateNewTextValue}
            />
            <button
                className="btn btn-primary mt-1"
                onClick={this.createNewTodo}
            >
                Add
            </button>
        </div>
    );
}
