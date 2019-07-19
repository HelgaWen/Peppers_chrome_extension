import styled, { css, keyframes } from 'styled-components';

const WeatherCardWrapper = styled.div`
  text-align:center;
`;

const rotate360 = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const WeatherImage = styled.div`
  content: "";
  box-sizing: border-box;
  width: 156px;
  height: 156px;
  margin: 5px;
  padding:5px;
  ${'' /* animation: ${rotate360} 0.6s linear infinite; */}

  ${props => props.weather && css`
    border: 0;
    background-repeat: no-repeat;
    object-fit:fit;
    background-image: url(${props.weather});
    ${'' /* animation: ${rotate360} 25s linear infinite; */}
  `}
`;

export {
  WeatherImage,
  WeatherCardWrapper
}