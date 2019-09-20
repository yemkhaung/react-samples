import React, { Component } from "react";
import { connect } from "react-redux";

import CollectionRenameForm from "./CollectionRenameForm";
import CollectionExportForm from "./CollectionExportForm";
import Button from "./Button";
import Header from "./Header";
import { toggleIsEditingName, removeAllTweetsFromCollection } from "../actions";

class CollectionControls extends Component {
    getHeaderText = () => {
        const { numberOfTweetsInCollection } = this.props;
        const { collectionName } = this.props;
        let text;

        if (numberOfTweetsInCollection > 1) {
            text = `${numberOfTweetsInCollection} tweet(s) in your`;
        } else {
            text = `${numberOfTweetsInCollection} tweet in your`;
        }

        return (
            <span>
                {text} <strong>{collectionName}</strong> collection
            </span>
        );
    };

    render() {
        const {
            collectionName,
            isEditingName,
            htmlMarkup,
            onRenameCollection,
            onEmptyCollection
        } = this.props;

        if (isEditingName) {
            return <CollectionRenameForm name={collectionName} />;
        }

        return (
            <div>
                <Header text={this.getHeaderText()} />
                <Button
                    label="Rename collection"
                    handleClick={onRenameCollection}
                />
                <Button
                    label="Empty collection"
                    handleClick={onEmptyCollection}
                />
                <CollectionExportForm
                    title={collectionName}
                    html={htmlMarkup}
                />
            </div>
        );
    }
}

const mapStateToProps = state => state.collection;

const mapDispatchToProps = dispatch => ({
    onRenameCollection: () => {
        dispatch(toggleIsEditingName());
    },
    onEmptyCollection: () => {
        dispatch(removeAllTweetsFromCollection());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CollectionControls);
