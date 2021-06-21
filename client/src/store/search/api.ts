import axiosInstance from "./utils";

export const fetchResults = (searchQuery: string): any => {
	return axiosInstance.get(`/search/${searchQuery}`);
};
