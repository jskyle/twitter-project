/* eslint-disable @typescript-eslint/ban-types */
import { Dispatch } from "redux";
import * as actions from "./actions";
import * as api from "./api";
import { getMaxId, getSearchTerm } from "./selector";

const convertArrayToObject = (array: any) =>
	array.reduce(
		(obj: any, item: any) => ({
			...obj,
			[item.id]: item,
		}),
		{}
	);

const findMaxId = (array: any) => {
	const array1 = array.map((e: any) => e.id);
	return Math.min(...array1);
};

export const fetchSearchResultsThunk = (searchTerm: string) => async (dispatch: Dispatch) => {
	dispatch(actions.fetchSearchResults(searchTerm));

	return api.fetchResults(searchTerm).then((data: any) => {

		dispatch(actions.fetchSearchResultsSuccess({ 
			tweets: convertArrayToObject(data.statuses),
			loadMore: false,
			maxId: findMaxId(data.statuses),
		}));
	}).catch((err: any) => dispatch(actions.fetchSearchResultsError(err.response)));
};

export const fetchMoreSearchResultsThunk = () => async (
	dispatch: Dispatch,
	getState: Function,
) => {
	const state = getState();
	const maxId = getMaxId(state);
	const searchTerm = getSearchTerm(state);

	return api.fetchMoreResults(searchTerm, maxId).then((data: any) => {
		dispatch(actions.fetchSearchResultsSuccess({
			tweets: convertArrayToObject(data.statuses),
			loadMore: true,
			maxId: findMaxId(data.statuses),
		}));
	}).catch((err: any) => dispatch(actions.fetchSearchResultsError(err.response)));
};
