import React, {useEffect, useState} from 'react';
import './App.css';
import {useFetch} from './components/useFetch';

function App() {

  const keyApi = 'o41IGNPWQIaHJCbTiiw3tYizNso7OhHI4F8eblwC'; // Input your API Key here.

  const myStyle = {
    width: 500
  };

  // Fetching time from data
  const [myTime, setMyTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setMyTime(data);
    });
  });

  const photoData = useFetch(`https://api.nasa.gov/planetary/apod?api_key=${keyApi}`);
  return (
    <div className="App">
      <br />
      <h5>Flask time: </h5><p>{myTime.time}</p>      
      <img src={photoData.url} style={myStyle} />
      <h5>Owner: </h5><p>{photoData.copyright}</p>
      <br />
      <h5>Date: </h5><p>{photoData.date}</p>
    <h5>Explanation: </h5><p>{photoData.explanation}</p>
    </div>
  );
}

export default App;
