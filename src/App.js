// add useState and useEffect
import React, {useState, useEffect} from "react";
// import axios
import axios from 'axios';
import "./App.css";

function App() {
  // create state
  const [data, setData] = useState();
  // initiate useEffect
  useEffect(() => {
    // get data from example query
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.error(err))
  }, [])
  return (
    <div className="App">
    </div>
  );
}

export default App;

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY