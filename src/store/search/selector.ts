import { createSelectorContext } from "../redux-helpers";
import { createSelector as createCachedSelector } from "reselect";

const createSelector = createSelectorContext(["search"]);

export const getTweets = createSelector("tweets");
export const getHashTagsFilter = createSelector("hashtags");

export const getSearchTerm = createSelector("searchTerm");
export const getMaxId = createSelector("maxId");

export const getHashtags = createCachedSelector(getTweets, (tweets: any) => {
	const hashtags = Object.values(tweets).map((a: any) => {
		return a.entities.hashtags.map((b: any) => {
			return b.text;
		});
	});

	return Array.from(new Set(hashtags.flat()));
});

export const getFilteredTweets = createCachedSelector(
	getTweets, 
	getHashTagsFilter, (tweets: any, hashtags: any) => {
		const tweetsArray = Object.values(tweets);

		const values = tweetsArray.filter((tweet: any) => {
			return tweet.entities.hashtags.find((hashtag: any) => {
				return Object.values(hashtags).includes(hashtag.text);
			});
		});

		if (values.length > 0) {
			return values;
		}

		return tweetsArray;
	});
