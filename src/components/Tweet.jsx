/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import Hashtag from "./Hashtag";


const TweetContainer = styled.div`
  display: flex;
	padding: 1rem;
`;


const StyledImageContainer = styled.div`
	padding-right: 1rem;

	img {
		border-radius: 50%;
	}
`;

const StyledTextContainer = styled.div`
	text-align: left;
	color: rgb(56,76,85);

	h6 {
		font-weight: 500;
		margin-top: 0;
		margin-bottom: 0;
		font-size: 1.2rem;
	}

	p {
		font-size: 0.9rem;
		line-height: 1.6;
	}
`;




const Tweet = ({ data }) => {
	const { user, text, entities } = data;

	const link = <a href={text.match(/(?:https?|ftp):\/\/[\n\S]+/g)} target="_blank" rel="noopener noreferrer">{text.match(/(?:https?|ftp):\/\/[\n\S]+/g)}</a>;

	return (
		<TweetContainer className="tweet-container">
			<StyledImageContainer>
				<img src={user.profile_image_url} alt="" srcSet="" />
			</StyledImageContainer>
			<StyledTextContainer>
				<h6>@{user.screen_name}</h6>
				<p>
					{text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, " ")}{" "}
					{link}
				</p>
				<div>
					{entities.hashtags.length > 0 && entities.hashtags.map((a, idx) => (
						<Hashtag key={`${a.text}-${idx}`} text={a.text}/>
					))}
				</div>
			</StyledTextContainer>
		</TweetContainer>
	);
};

export default Tweet;
