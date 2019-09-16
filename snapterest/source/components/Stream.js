import React, { Component } from "react";
import TweetStore from "../stores/TweetStore";

import StreamTweet from "./StreamTweet";
import Header from "./Header";
import TweetStore from "../stores/TweetStore";
import { connect } from "net";

class Stream extends Component {
    render() {
        const { tweet } = this.state;
        const headerText = "Waiting for public photos from Twitter...";

        if (tweet) {
            return <StreamTweet tweet={tweet} />;
        }

        return <Header text={headerText} />;
    }
}

const mapStateToProps = ({tweet}) => ({tweet});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Stream);
