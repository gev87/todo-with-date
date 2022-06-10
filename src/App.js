import React from "react";
import "./App.css";
import Dates from "./Components/Dates";
import DateItem from "./Components/DateItem";
import { Routes,Route,BrowserRouter } from "react-router-dom";


function App() {
	

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Dates />} />
					<Route exact path="/dateitem" element={<DateItem />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
