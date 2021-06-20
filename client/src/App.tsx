import React from "react";
import "./App.css";
import { SearchBar } from "./components";

function App() {
	return (
		<div className="App">
			<header className="App-header">
        Tweet Feed
			</header>
			<div>
				<SearchBar/>
			</div>
		</div>
	);
}

export default App;
