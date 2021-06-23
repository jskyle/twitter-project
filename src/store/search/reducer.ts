import { produce } from "immer";

import * as actions from "./actions";
import { Initial, Fetching, Success, Error} from "../utils";

const initialState = {
	searchTerm: "",
	tweets: {},
	hashtags: {},
	maxId: null,
	status: Initial,
	error: "",
};

const reducer = produce<any>((base: any, action: any) => {
	switch (action.type) {
	case actions.FETCH_SEARCH_RESULTS: {
		base.status = Fetching;
		base.searchTerm = action.payload;
		break;
	}
	case actions.FETCH_SEARCH_RESULTS_SUCCESS: {
		base.status = Success;
		if (!action.payload.loadMore) {
			base.tweets = action.payload.tweets;
			base.maxId = action.payload.maxId;
		} else {
			base.tweets = {...base.tweets, ...action.payload.tweets};
			base.maxId = action.payload.maxId;
		}
		break;
	}
	case actions.FETCH_SEARCH_RESULTS_ERROR: {
		base.error = action.payload.error;
		base.status = Error;
		break; 
	}
	case actions.UPDATE_HASHTAG_FILTER: {

		if (base.hashtags[action.payload]) {
			const obj = base.hashtags;
			delete obj[action.payload];

			base.hashtags = obj;
		} else {
			base.hashtags = {
				...base.hashtags,
				[action.payload]: action.payload,
			};
		}
		break;
	}
	default: {
		return initialState;
	}
	}
}, initialState);

export default reducer;
