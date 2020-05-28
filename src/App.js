import React, {useEffect, useState} from 'react';
import './App.css';
import {useFetch} from './components/useFetch';




function App() {
  const myStyle = {
    width: 500
  };
  const photoData = useFetch('https://api.nasa.gov/planetary/apod?api_key=dWpXGqrEgV0MaxhYaRfl4wIQIAKYyfHt8dubgNdL');
  return (
    <div className="App">      
      <img src={photoData.url} style={myStyle} />
      <h5>Owner: </h5><p>{photoData.copyright}</p>
      <br />
      <h5>Date: </h5><p>{photoData.date}</p>
    <h5>Explanation: </h5><p>{photoData.explanation}</p>
    </div>
  );
}

export default App;
