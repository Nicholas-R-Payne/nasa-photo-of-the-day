// import React
import React from 'react';
// import styled
import styled, {keyframes} from 'styled-components';

// create animation
const kf = keyframes`
    50% {
        transform: scale(0.8);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`

// create styles
const StyledPhoto = styled.div`
    
`

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