import React, { Component } from "react";
import Header from "./Header";
import Button from "./Button";
import CollectionActionCreators from "../actions/CollectionActionCreators";
import CollectionStore from "../stores/CollectionStore";

const inputStyle = {
    marginRight: "5px"
};

class CollectionRenameForm extends Component {
    state = {
        inputValue: CollectionStore.getCollectionName()
    };

    setInputValue = inputValue => {
        this.setState({
            inputValue
        });
    };

    componentDidMount() {
        this.collectionNameInput.focus();
    }

    handleInputValueChange = event => {
        const inputValue = event.target.value;
        this.setInputValue(inputValue);
    };

    handleFormSubmit = event => {
        event.preventDefault();

        const { onCancelCollectionNameChange } = this.props;
        const { inputValue: collectionName } = this.state;

        CollectionActionCreators.setCollectionName(collectionName);
        onCancelCollectionNameChange();
    };

    handleFormCancel = event => {
        event.preventDefault();

        const { onCancelCollectionNameChange } = this.props;
        const collectionName = CollectionStore.getCollectionName();

        this.setInputValue(collectionName);
        onCancelCollectionNameChange();
    };

    render() {
        const { inputValue } = this.state;

        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <Header text="Collection name: " />

                <div className="form-group">
                    <input
                        className="form-control"
                        style={inputStyle}
                        onChange={this.handleInputValueChange}
                        value={inputValue}
                        ref={input => {
                            this.collectionNameInput = input;
                        }}
                    />
                </div>

                <Button label="Change" handleClick={this.handleFormSubmit} />
                <Button label="Cancel" handleClick={this.handleFormCancel} />
            </form>
        );
    }
}

export default CollectionRenameForm;
