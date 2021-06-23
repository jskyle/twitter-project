import React from "react";
import "./App.css";
import { SearchBar, TweetContainer, HashtagContainer } from "./components";

function App() {
	return (
		<div className="App">
			<div className="flex-container">
				<div className="App-header header">
        Tweet Feed
				</div>
				<SearchBar/>
				<HashtagContainer/>
				<TweetContainer/>
			</div>
		</div>
	);
}

export default App;
