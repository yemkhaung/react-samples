import React, { Component } from "react";
import { connect } from "react-redux";

import Tweet from "./Tweet";
import { removeTweetFromCollection } from "../actions";

const listStyle = {
    padding: 0
};
const listItemStyle = {
    display: "inline-block",
    listStyle: "none"
};

class TweetList extends Component {
    getTweetElement = tweetId => {
        const { tweets, isExport, onRemoveTweetFromCollection } = this.props;
        const tweet = tweets[tweetId];

        let tweetElement;

        if (isExport) {
            tweetElement = <Tweet tweet={tweet} />;
        } else {
            tweetElement = (
                <Tweet
                    tweet={tweet}
                    onImageClick={onRemoveTweetFromCollection}
                />
            );
        }

        return (
            <li style={listItemStyle} key={tweet.id}>
                {tweetElement}
            </li>
        );
    };

    render() {
        const { tweets } = this.props;

        const tweetElements = Object.keys(tweets).map(this.getTweetElement);

        return <ul style={listStyle}>{tweetElements}</ul>;
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    onRemoveTweetFromCollection: ({ id }) => {
        dispatch(removeTweetFromCollection(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TweetList);
