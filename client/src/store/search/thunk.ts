import { Dispatch } from "redux";
import * as actions from "./actions";
import * as api from "./api";

export const fetchSearchResultsThunk = (searchTerm: string) => async (dispatch: Dispatch) => {
	dispatch(actions.fetchSearchResults(searchTerm));

	return api.fetchResults(searchTerm).then((data: any) => {
		actions.fetchSearchResultsSuccess(data);
	}).catch((err: any) => {
		actions.fetchSearchResultsError(err.response);
	});
};
