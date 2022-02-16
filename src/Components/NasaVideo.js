// import React
import React from 'react';

// create NasaVideo structure
const NasaVideo = (props) => {
    return (
        <div className='nasaVideo'>
            <h3>{props.video.title}</h3>
            <p>{props.video.date}</p>
            <iframe
                width="640"
                height="480"
                title={props.video.title}
                src={props.video.url}
                controls
            />
            <p>{props.video.explanation}</p>
        </div>
    )
}
// export NasaVideo
export default NasaVideo