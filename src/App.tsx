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
        debugger
      })
  }, []);
  // const getPeople = async () => { 
  //   const apiResponse = await axios.get('https://swapi.dev/api/people');
  //   setPeople(apiResponse.data);
  // }

  return (
    <>
      <div className="card">
{people}
      </div>
    </>
  )
}

export default App
