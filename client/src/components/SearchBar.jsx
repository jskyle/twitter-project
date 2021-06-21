import React, { useRef, useCallback } from "react";
import _ from "lodash";
import styled from "styled-components";

const StyledInput = styled.input`
 width: 100%;
 margin-top 2rem;
 height: 36px;
 font-size: 0.9rem;
 border-radius: 3px;
 border: 1px solid gray;
 padding 1.4rem 1.5rem;
`;

const SearchBar = () => {
	const ref = useRef(null);

	const debounce = useCallback(
		_.debounce((_searchVal) => {
			console.log(_searchVal);
		}, 1000),
		[]
	);

	const handleOnChange = () => {
		debounce(ref.current.value);
	};



	return (
		<div>
			<StyledInput type="search" name="tweet-search" id="" placeholder="Search by keyword" results="0" ref={ref}  onChange={handleOnChange}/>
		</div>
	);
};

export default SearchBar;
