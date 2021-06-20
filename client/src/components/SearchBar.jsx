import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
 width: 100%;
 margin-top 1rem;
 height: 36px;
 font-size: 0.9rem;
 border-radius: 3px;
 border: 1px solid gray;
 padding 1.4rem 1.5rem;
`;

const SearchBar = () => {
	return (
		<div>
			<StyledInput type="search" name="tweet-search" id="" placeholder="Search by keyword" results="0" />
		</div>
	);
};

export default SearchBar;
