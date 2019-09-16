import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoRow } from "./TodoRow";
import { TodoCreator } from "./TodoCreator";
import { TodoBanner } from "./TodoBanner";
import { VisibilityControl } from "./VisibilityControl";

const TODOS = [
    { action: "Buy flowers", done: false },
    { action: "Get Shoes", done: false },
    { action: "Collect tickets", done: true },
    { action: "Call Joe", done: false }
];

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            userName: "Adam",
            todoItems: TODOS,
            showCompleted: true
        };
    }

    createNewTodo = task => {
        if (!this.state.todoItems.find(item => item.action === task)) {
            this.setState(
                {
                    todoItems: [
                        ...this.state.todoItems,
                        { action: task, done: false }
                    ],
                    newItemText: ""
                },
                () => localStorage.setItem("todos", JSON.stringify(this.state))
            );
        }
    };

    toggleTodo = todo =>
        this.setState({
            todoItems: this.state.todoItems.map(item =>
                item.action === todo.action
                    ? { ...item, done: !item.done }
                    : item
            )
        });

    todoTableRows = doneValue =>
        this.state.todoItems
            .filter(item => item.done === doneValue)
            .map(item => (
                <TodoRow
                    key={item.action}
                    item={item}
                    callback={this.toggleTodo}
                />
            ));

    componentDidMount = () => {
        let data = localStorage.getItem("todos");
        this.setState(data != null ? JSON.parse(data) : TODOS);
    };

    render = () => (
        <div>
            <TodoBanner
                name={this.state.userName}
                tasks={this.state.todoItems}
            />
            <div className="container-fluid">
                <TodoCreator callback={this.createNewTodo} />
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Done</th>
                        </tr>
                    </thead>
                    <tbody>{this.todoTableRows(false)}</tbody>
                </table>
                <div className="bg-secondary text-white text-center b-2">
                    <VisibilityControl
                        description="Completed Tasks"
                        isChecked={this.state.showCompleted}
                        callback={checked =>
                            this.setState({ showCompleted: checked })
                        }
                    />
                </div>

                {this.state.showCompleted && (
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Done</th>
                            </tr>
                        </thead>
                        <tbody>{this.todoTableRows(true)}</tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
