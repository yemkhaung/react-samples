import React, { Component } from "react";
import ReactDOMServer from "react-dom/server";
import CollectionControls from "./CollectionControls";
import TweetList from "./TweetList";
import Header from "./Header";
import CollectionUtils from "../utils/CollectionUtils";
import CollectionStore from "../stores/CollectionStore";

class Collection extends Component {
    state = {
        collectionTweets: CollectionStore.getCollectionTweets()
    };

    componentDidMount() {
        CollectionStore.addChangeListener(this.onCollectionChange);
    }

    componentWillUnmount() {
        CollectionStore.removeChangeListener(this.onCollectionChange);
    }

    onCollectionChange = () => {
        this.setState({
            collectionTweets: CollectionStore.getCollectionTweets()
        });
    };

    createHTMLMarkupStr = () => {
        const { collectionTweets } = this.state;
        const htmlStr = ReactDOMServer.renderToStaticMarkup(
            <TweetList tweets={collectionTweets} isExport={true} />
        );

        const htmlMarkup = {
            html: htmlStr
        };

        return JSON.stringify(htmlMarkup);
    };

    render() {
        const { collectionTweets } = this.state;
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

export default Collection;
