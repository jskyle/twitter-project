import axios from "axios";


export const Fetching = "Fetching";
export const Success = "Success";
export const Error = "Error";
export const Initial = "Initial";

const identity = (x: any, state: any) => x;

const getInArity2 = (
	path: Array<string | number>,
	map: Array<any> | { [key: string]: any }
) => {
	return path.reduce((acc: any, step: string | number) => {
		if (!acc) return undefined;
		return acc[step];
	}, map);
};
const getInArity1 = (path: Array<string | number>) => (
	map: Array<any> | { [key: string]: any }
) => getInArity2(path, map);

const getIn = (
	path: Array<string | number>,
	map?: Array<any> | { [key: string]: any }
) => {
	if (map) return getInArity2(path, map);
	return getInArity1(path);
};

export const createAction = (type: any, payloadKey = "payload") => {
	const action = (payload: any, meta = {}) => ({
		type,
		[payloadKey]: payload,
		meta,
	});

	action.toString = () => type;

	return action;
};

export const createSelector = (path: any, transformationFn = identity) => (state: any) =>
	transformationFn(getIn(path, state), state);

export const createSelectorContext = (root: any) => (path: string, transformationFn: any) => {
	if (typeof path === "string") return createSelector([...root, path], transformationFn);
	return createSelector([...root, ...path], transformationFn);
};


const baseURL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({ baseURL });

export default axiosInstance;
