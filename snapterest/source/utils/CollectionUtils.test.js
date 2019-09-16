import CollectionUtils from './CollectionUtils';

describe('CollectionUtils', () => {
    const collectionTweetsMock = {
        collectionTweet7: {},
        collectionTweet8: {},
        collectionTweet9: {}
    };

    test('getNumberOfTweetsInCollection returns a number of tweets in collection', () => {
        const actualNumberOfTweetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(collectionTweetsMock);
        const expectedNumberOfTweettsInCollection = 3;

        expect(actualNumberOfTweetsInCollection)
            .toBe(expectedNumberOfTweettsInCollection);
    });

    test('isEmptyCollection checks if collection is not empty', () => {
        const acutalIsEmptyCollectionValue =  CollectionUtils.isEmptyCollection(collectionTweetsMock);

        expect(acutalIsEmptyCollectionValue).toBeDefined();
        expect(acutalIsEmptyCollectionValue).toBe(false);
        expect(acutalIsEmptyCollectionValue).not.toBe(true);
    });
});