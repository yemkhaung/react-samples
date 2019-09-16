import React, { Component } from "react";
import Tweet from "./Tweet";
import CollectionActionCreators from "../actions/CollectionActionCreators";

const listStyle = {
    padding: 0
};
const listItemStyle = {
    display: "inline-block",
    listStyle: "none"
};

class TweetList extends Component {
    removeTweetFromCollection = tweet => {
        CollectionActionCreators.removeTweetFromCollection(tweet.id);
    };

    getTweetElement = tweetId => {
        const { tweets, isExport } = this.props;
        const tweet = tweets[tweetId];

        let tweetElement;

        if (isExport) {
            tweetElement = <Tweet tweet={tweet} />;
        } else {
            tweetElement = (
                <Tweet
                    tweet={tweet}
                    onImageClick={this.removeTweetFromCollection}
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

export default TweetList;
