import AppDispatcher from "../dispatcher/AppDispatcher";
import EventEmitter from "events";

let tweet = null;

// private TweetStore interface: for writing tweets
function setTweet(receivedTweet) {
    tweet = receivedTweet;
}

// emit event to other components listening to TweetStore
function emitChange() {
    TweetStore.emit("change");
}

// Copies all properties, methods of EventEmitter to TweetStore
// thus, making TweetStore as a sub-type of EventEmitter.
// Plus, add listener methods and getTweet interface to TweetStore
const TweetStore = Object.assign({}, EventEmitter.prototype, {
    addChangeListener(callback) {
        this.on("change", callback);
    },

    removeChangeListener(callback) {
        this.removeListener("change", callback);
    },

    // public interface: for reading tweets
    getTweet() {
        return tweet;
    }
});

// this function will be called as callback when AppDispatcher receives an action
function handleAction(action) {
    // we are only interested in actions of type 'receive_tweet'
    if (action.type === "receive_tweet") {
        setTweet(action.tweet);
        emitChange();
    }
}

// register TweetStore to AppDispatcher
TweetStore.dispatchToken = AppDispatcher.register(handleAction);

export default TweetStore;
