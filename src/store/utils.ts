export const Fetching = "Fetching";
export const Success = "Success";
export const Error = "Error";
export const Initial = "Initial";

export const identity = (x: any) => x;

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

export const getIn = (
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
