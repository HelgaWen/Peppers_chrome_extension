import styled, { css, keyframes } from 'styled-components';

import cloud from '../styles/images/cloud.png';
import haze from '../styles/images/haze.png';
import lightningcloud from '../styles/images/lightningcloud.png';
import partlycloud from '../styles/images/partlycloudy.png';
import raincloud from '../styles/images/raincloud.png';
import shiningSun from '../styles/images/shining-sun-mini.png';
import snowcloud from '../styles/images/snowcloud.png';

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
  border-radius: 50%;
  border: 1px solid #f6f;
  border-top-color: #0e0;
  border-right-color: #0dd;
  border-bottom-color: #f90;
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