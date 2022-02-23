import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
	return (
		// BEM
		<div className="app">
			<Router>
				<Switch>
					<Route path="/search">
						<SearchPage />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>

			{/* Home page (the one with the search on*/}

			{/* Searchpage (The result page) */}
		</div>
	);
}

export default App;
