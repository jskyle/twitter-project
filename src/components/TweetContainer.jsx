import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilteredTweets } from "../store/search/selector";
import Tweet  from "./Tweet";
import styled from "styled-components";
import { fetchMoreSearchResultsThunk } from "../store/search/thunk";

const StyledContainer = styled.div`
 max-width: 500px;
 margin-top: 1rem;
 background-color: rgb(255,255,255);
 padding-bottom: 1rem;
 float: left;

  .tweet-container:nth-child(even) {
		background-color: rgb(249, 249, 249)
	}
`;

const LoadMoreButton = styled.button`
	text-decoration: none;
	font-size: 1rem;
	font-weight: 500;
	color: #1DA1F2;
	border: none;
	background-color: inherit;
`;

const TweetContainer = () => {
	const tweets = useSelector(getFilteredTweets);
	const dispatch = useDispatch();

	const handleOnClick = () => {
		dispatch(fetchMoreSearchResultsThunk());
	};

	return (
		<>
			{tweets.length > 0 && (
				<StyledContainer className="box-shadow">
					{tweets.map((tweet) => (
						<Tweet key={tweet.id} data={tweet} />
					))} 
					<LoadMoreButton onClick={handleOnClick}>Load More</LoadMoreButton>
				</StyledContainer>
			)}
		</>
	);
};

export default TweetContainer;
