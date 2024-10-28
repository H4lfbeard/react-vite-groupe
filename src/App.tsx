import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a
					href="https://playvalorant.com/fr-fr/platform-selection/?gad_source=1&gclid=Cj0KCQjw7Py4BhCbARIsAMMx-_KGflUjh41oZP7LwBygO0eEw9bLKNEoVlVCn8bJv9UR5XJo0nNVCigaAk58EALw_wcB&gclsrc=aw.ds"
					target="_blank" rel="noreferrer"
				>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Valorant_logo_-_pink_color_version.svg"
						className="logo"
						alt="Valorant logo"
					/>
				</a>
			</div>
			<h1>Choose your team</h1>
			<div className="card">
				{/* <button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button> */}
			</div>
		</>
	);
}

export default App;
