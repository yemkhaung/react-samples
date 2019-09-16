import React, { Component } from "react";
import Header from "./Header";
import Tweet from "./Tweet";
import CollectionActionCreators from "../actions/CollectionActionCreators";

class StreamTweet extends Component {
    render() {
        const { tweet,  } = this.props;

        return (
            <section>
                <Header text="Latest photo from Twitter" />
                <Tweet tweet={tweet} onImageClick={this.addTweetToCollection} />
            </section>
        );
    }
}

export default StreamTweet;
