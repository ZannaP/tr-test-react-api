import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then((data) => {
        console.log(data);
        setPeople(data.data?.results);
        console.log(people);
        //debugger
      })
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
