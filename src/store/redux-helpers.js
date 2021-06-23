import { getIn, identity } from "./utils";


export const createAction = (type, payloadKey = "payload") => {
	const action = (payload, meta = {}) => ({
		type,
		[payloadKey]: payload,
		meta,
	});

	action.toString = () => type;

	return action;
};


export const createSelector = (path, transformationFn = identity) => (state) =>
	transformationFn(getIn(path, state), state);

export const createSelectorContext = (root) => (path, transformationFn) => {
	if (typeof path === "string") return createSelector([...root, path], transformationFn);
	return createSelector([...root, ...path], transformationFn);
};
