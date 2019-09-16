import TweetUtils from './TweetUtils';

describe('TweetUtils', () => {
    test('getListofTweetIds return an array of tweet ids', () => {
        const testMock = {
            tweet1: {},
            tweet2: {},
            tweet3: {}
        };
        const expectedListOfTweetIds = [
            'tweet1',
            'tweet2',
            'tweet3'
        ];
        const actualListOfTweetIds = TweetUtils.getListOfTweetIds(testMock);

        expect(actualListOfTweetIds)
            .toEqual(expectedListOfTweetIds);
    });
});