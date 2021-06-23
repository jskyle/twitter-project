import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getHashtags } from "../store/search/selector";
import Hashtag from "./Hashtag";

const HashTagContainer = styled.div`
	min-width: 250px;
	max-width: 250px;
	background-color: rgb(255,255,255);
	text-align: left;
	float: right;
	
	div {
		padding: 1rem;
	}

	h3 {
		margin-top: 0;
	}

	@media (max-width: 904px) {
		margin-top: 1rem;
		max-width: 500px;
	}
`;

const HashtagContainer = () => {
	const hashtags = useSelector(getHashtags);

	return (
		<>
			{hashtags.length > 0 && (

				<HashTagContainer className="box-shadow">
					<div>
						<h3>Filter by hashtags</h3>
						{hashtags.map((hashtag, idx) => (
							<Hashtag key={`${hashtag}-${idx}`} text={hashtag}/>
						))}
					</div>
				</HashTagContainer>
			)}
		</>
	);
};

export default HashtagContainer;
