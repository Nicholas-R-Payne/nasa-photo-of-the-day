// add useState and useEffect
import React, {useState, useEffect} from "react";
// import axios
import axios from 'axios';
import "./App.css";
// import NasaVideo
import NasaVideo from "./Components/NasaVideo";

function App() {
  // create state
  const [data, setData] = useState();
  // initiate useEffect
  useEffect(() => {
    // get data from example query
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.error(err))
  }, [])
  return (
    // render NasaVideo
    <div className="App">
      {data && <NasaVideo video={data} />}
    </div>
  );
}

export default App;
