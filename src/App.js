/** @format */

import logo from "./logo.svg";
import "./App.css";

function App() {
constructor() {
  super()
  this.state = {
    meaningOfLife: 47,
  }
}

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					{this.state.meaningOfLife}
				</p>
				<button
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Update State
				</button>
			</header>
		</div>
	);
}

export default App;
