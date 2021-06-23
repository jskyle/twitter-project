import { createAction } from "../utils";

export const FETCH_SEARCH_RESULTS = "FETCH_SEARCH_RESULTS";
export const fetchSearchResults = createAction(FETCH_SEARCH_RESULTS);

export const FETCH_SEARCH_RESULTS_SUCCESS = "FETCH_SEARCH_RESULTS_SUCCESS";
export const fetchSearchResultsSuccess = createAction(FETCH_SEARCH_RESULTS_SUCCESS);

export const FETCH_SEARCH_RESULTS_ERROR = "FETCH_SEARCH_RESULTS_ERROR";
export const fetchSearchResultsError = createAction(FETCH_SEARCH_RESULTS_ERROR);

export const UPDATE_HASHTAG_FILTER =  "UPDATE_HASHTAG_FILTER";
export const updateHashtagFilter = createAction(UPDATE_HASHTAG_FILTER);
