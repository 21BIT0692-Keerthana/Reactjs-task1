// App.js 
import React from "react"; 
import WordCounter from "./WordCounter"; 
import "./App.css"; 

function App() { 
	return ( 
		<div className="App"> 
			<h1 id="top"> 
			Responsive Paragraph Word Counter
			</h1> 
			
			<WordCounter /> 
		</div> 
	); 
} 

export default App; 
