/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updateHashtagFilter } from "../store/search/actions";
import { getHashTagsFilter } from "../store/search/selector";

export const StyledHashtag = styled.button`
	background-color: rgb(231,243,250);
	border-radius: 10px;
	padding: 0.5rem 1rem;
	font-size: 1rem;
	border: none;
	color: #1DA1F2;
	margin: 0.5rem 0.5rem 0.5rem 0rem;
	${(props) => props.selected && `
	border: solid 1px #1DA1F2;
	font-weight: 700;
	`

}
`;

const Hashtag = ({ text }) => {
	const dispatch = useDispatch();
	const hashtags = useSelector(getHashTagsFilter);
	const handleOnClick = (e) => {
		dispatch(updateHashtagFilter(e.target.value));
	};

	return (
		<StyledHashtag value={text} onClick={handleOnClick} selected={hashtags[text]}>
			{text}
		</StyledHashtag>
	);
};

export default Hashtag;
