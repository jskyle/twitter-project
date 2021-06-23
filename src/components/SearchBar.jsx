import React, { useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import _ from "lodash";
import styled from "styled-components";
import { fetchSearchResultsThunk } from "../store/search/thunk";

const StyledInput = styled.input`
 width: 100%;
 height: 36px;
 font-size: 0.9rem;
 border-radius: 4px;
 border: 1px solid #b5b5b5;
 padding 1.4rem 1.5rem;
 max-width: 500px;
 float: left;
`;

const SearchBar = () => {
	const ref = useRef(null);
	const dispatch = useDispatch();
	const debounce = useCallback(
		_.debounce((_searchVal) => {
			if(_searchVal) {
				dispatch(fetchSearchResultsThunk(_searchVal));
			}
		}, 1000),
		[]
	);

	const handleOnChange = () => {
		debounce(ref.current.value);
	};



	return (
		<StyledInput className="small-center" type="search" name="tweet-search" id="" placeholder="Search by keyword" results="0" ref={ref}  onChange={handleOnChange}/>
	);
};

export default SearchBar;
