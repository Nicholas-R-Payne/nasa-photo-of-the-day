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
        transform: scale(1) rotateZ(0);
    }
`

// create styles
const StyledPhoto = styled.div`
    background-color: ${pr => pr.theme.primaryColor};
    
    h3 {
        color: ${pr => pr.theme.secondaryColor};
    }

    p {
        font-weight: bold;
    }

    img {
        opacity: 0;
        transform: scale(2) rotateZ(180deg);
        animation: ${kf} 0.5s ease-in-out forwards;
    }
`

// create NasaPhoto structure
const NasaPhoto = (props) => {
    return (
        <StyledPhoto className='nasaPhoto'>
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl} />
            <p>{props.photo.explanation}</p>
        </StyledPhoto>
    )
}
// export NasaPhoto
export default NasaPhoto