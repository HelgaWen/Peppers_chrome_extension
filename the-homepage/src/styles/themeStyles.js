import styled, { css, keyframes } from 'styled-components';

const wobble = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
  ${'' /* from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  } */}
`;

const ThemeContainer = styled.div`
  background-color: ${props => props.theme.themeBackground};
  position: absolute;
  top: 3%;
  left: 3%;
  display:flex;
  justify-content: center;
  box-shadow: 0 2px 6px ${props => props.theme.boxShadow};
  border-radius: 7px;

  ${props => props.background && css`
    background-color: ${props => props.background};
  `}

  ${props => props.active && css`
    ${'' /* animation: ${rubberBand} 1.5s; */}
    animation: ${wobble} 1.5s;
  `}
`;

const ThemeImage = styled.div`
  content: "";
  box-sizing: border-box;
  width:40px;
  height:40px;
  margin: 5px;
  padding:5px;
  background-image: url(${props => props.current});
  background-repeat: no-repeat;
  object-fit:cover; 
`;



export {
  ThemeContainer,
  ThemeImage
}