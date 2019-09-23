import React, { Component } from "react";
import ReactDOMServer from "react-dom/server";
import { connect, Provider } from "react-redux";

import CollectionControls from "./CollectionControls";
import TweetList from "./TweetList";
import Header from "./Header";
import CollectionUtils from "../utils/CollectionUtils";
import store from "../stores";

class Collection extends Component {
    createHTMLMarkupStr = () => {
        const { collectionTweets } = this.props;

        const htmlStr = ReactDOMServer.renderToStaticMarkup(
            <Provider store={store}>
                <TweetList tweets={collectionTweets} isExport={true} />
            </Provider>
        );
        const htmlMarkup = {
            html: htmlStr
        };

        return JSON.stringify(htmlMarkup);
    };

    render() {
        const { collectionTweets } = this.props;
        const numTweetInCollection = CollectionUtils.getNumberOfTweetsInCollection(
            collectionTweets
        );

        if (numTweetInCollection > 0) {
            const htmlMarkup = this.createHTMLMarkupStr();
            return (
                <div>
                    <CollectionControls
                        numberOfTweetsInCollection={numTweetInCollection}
                        htmlMarkup={htmlMarkup}
                    />

                    <TweetList tweets={collectionTweets} />
                </div>
            );
        }

        return <Header text="Your collection is empty" />;
    }
}

const mapStateToProps = state => state.collection;

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Collection);
