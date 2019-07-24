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
`;

const ThemeContainer = styled.div`
  background-color: ${props => props.theme.iconBGC};
  position: absolute;
  top: 3%;
  left: 3%;
  display:flex;
  justify-content: center;
  box-shadow: 0 2px 6px ${props => props.theme.boxShadow};
  border-radius: 7px;

  ${props => props.active && css`
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
  background-image: url(${props => props.theme.icon});
  background-repeat: no-repeat;
  object-fit:cover; 
`;



export {
  ThemeContainer,
  ThemeImage
}