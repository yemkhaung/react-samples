import React, { Component } from "react";
import CollectionRenameForm from "./CollectionRenameForm";
import CollectionExportForm from "./CollectionExportForm";
import Button from "./Button";
import Header from "./Header";
import CollectionStore from "../stores/CollectionStore";
import CollectionActionCreators from "../actions/CollectionActionCreators";

class CollectionControls extends Component {
    state = {
        isEditingName: false
    };

    getHeaderText = () => {
        const { numberOfTweetsInCollection } = this.props;
        const name = CollectionStore.getCollectionName();
        let text;

        if (numberOfTweetsInCollection == 1) {
            text = `${numberOfTweetsInCollection} tweet in your`;
        } else {
            text = `${numberOfTweetsInCollection} tweets in your`;
        }

        return (
            <span>
                {text} <strong>{name}</strong> collection
            </span>
        );
    };

    toggleEditCollectionName = () => {
        this.setState(prevState => ({
            isEditingName: !prevState.isEditingName
        }));
    };

    removeAllTweetsFromCollection = () => {
        CollectionActionCreators.removeAllTweetsFromCollection();
    };

    render() {
        const { isEditingName } = this.state;
        const { htmlMarkup } = this.props;

        if (isEditingName) {
            return (
                <CollectionRenameForm
                    onCancelCollectionNameChange={this.toggleEditCollectionName}
                />
            );
        }

        return (
            <div>
                <Header text={this.getHeaderText()} />
                <Button
                    label="Rename collection"
                    handleClick={this.toggleEditCollectionName}
                />
                <Button
                    label="Empty collection"
                    handleClick={this.removeAllTweetsFromCollection}
                />
                <CollectionExportForm htmlMarkup={htmlMarkup} />
            </div>
        );
    }
}

export default CollectionControls;
