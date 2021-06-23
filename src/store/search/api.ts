


export const fetchResults = (searchQuery: string): any => {
	return fetch(`/search/tweets.json?q=${searchQuery}&count=5&result_type=popular`, 
		{
			method: "GET", 
			headers: {"Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAI4OHgEAAAAAlbk0HSIAqcc3havrrU9j2NeAQ34%3DzJmzwHuQerd8JJ2TeuHfqwKgBt6bK4tk93w3ocBB2vPuKMF3cG"}
		})
		.then((res) => res.json());
};

export const fetchMoreResults = (searchQuery: string, maxId: number): any => {
	return fetch(`/search/tweets.json?q=${searchQuery}&count=5&result_type=popular&max_id=${maxId}`, 
		{
			method: "GET", 
			headers: {"Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAI4OHgEAAAAAlbk0HSIAqcc3havrrU9j2NeAQ34%3DzJmzwHuQerd8JJ2TeuHfqwKgBt6bK4tk93w3ocBB2vPuKMF3cG"}
		})
		.then((res) => res.json());
};
