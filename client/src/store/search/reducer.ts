import { produce } from "immer";

import * as actions from "./actions";
import { Initial, Fetching, Success, Error} from "./utils";

const initialState = {
  searchTerm: "",
	tweets: {},
	hashtags: {},
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
		const { tweets, hashtags } = action.payload;
		base.status = Success;
		base.tweets = tweets;
		base.hashTags = hashtags;
		break;
	}
	case actions.FETCH_SEARCH_RESULTS_ERROR: {
		base.error = action.payload.error;
		base.status = Error;
		break; 
	}
	default: {
		return initialState;
	}
	}
}, initialState);

export default reducer;
