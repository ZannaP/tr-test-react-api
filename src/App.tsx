import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
	const [people, setPeople] = useState([]);
	
	async function fetchData() {
		const response = await axios.get(
			"https://swapi.dev/api/people"
		);
		setPeople(response.data?.results);
	}

	useEffect(() => {
		fetchData();
	}, []); 

	return (
		<>
			<div className="card">
				{people.length ?
					(<>
						<h4>{people[0].name}</h4>
						<ul>
							<li>Hair color: {people[0].hair_color}</li>
							<li>Eye color: {people[0].eye_color}</li>
							<li>Birth year: { people[0].birth_year }</li>
						</ul>
					</>
					)
					: (<>Loading...</>)
				}
			</div>
		</>
	)
}

export default App
