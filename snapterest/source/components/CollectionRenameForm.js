import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "./Header";
import Button from "./Button";
import {
    setEditingName,
    setCollectionName,
    toggleIsEditingName
} from "../actions";

const inputStyle = {
    marginRight: "5px"
};

class CollectionRenameForm extends Component {
    componentDidMount() {
        this.refs.collectionName.focus();
    }

    render() {
        const { editingName, onNameChange, onSubmit, onCancel } = this.props;

        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <Header text="Collection name: " />

                <div className="form-group">
                    <input
                        className="form-control"
                        style={inputStyle}
                        onChange={onNameChange}
                        value={editingName}
                        ref="collectionName"
                    />
                </div>

                <Button label="Change" handleClick={onSubmit} />
                <Button label="Cancel" handleClick={onCancel} />
            </form>
        );
    }
}

const mapStateToProps = state => state.collection;

const mapDispatchToProps = dispatch => ({
    onNameChange: event => {
        dispatch(setEditingName(event.target.value));
    },
    onSubmit: event => {
        event.preventDefault();
        dispatch(setCollectionName(event.target.value));
    },
    onCancel: () => {
        event.preventDefault();
        dispatch(toggleIsEditingName());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CollectionRenameForm);
