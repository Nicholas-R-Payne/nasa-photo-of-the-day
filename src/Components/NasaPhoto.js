// import React
import React from 'react';

// create NasaPhoto structure
const NasaPhoto = (props) => {
    console.log(props.photo)
    return (
        <div className='nasaPhoto'>
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl} />
            <p>{props.photo.explanation}</p>
        </div>
    )
}
// export NasaPhoto
export default NasaPhoto