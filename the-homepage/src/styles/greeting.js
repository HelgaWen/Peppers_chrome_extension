import styled, { css } from "styled-components";

const GreetingWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  padding: 20px;
`;

const GreetingLine = styled.div`
  z-index: 1;
  width: 10px;
  height: 140px;
  margin-right: 10px;
  margin-top: 12px;
  border-radius: 7px;
  transform-origin: top;

  ${props =>
    props.theme.name === "dark" &&
    css`
      background: #47cd93;
      background: linear-gradient(
        to bottom,
        ${props => props.theme.color} 0%,
        #24c285 0%,
        #337556 52%,
        ${props => props.theme.background} 100%
      );
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#47cd93', endColorstr='#364154', GradientType=0 );
    `}

  ${props =>
    props.theme.name === "light" &&
    css`
    background: linear-gradient(
      to bottom,
      ${props => props.theme.placeholderColor} 0%,
      rgba(255,140,159,1) 30%, 
      rgba(255,184,196,1) 61%, 
      rgba(255,189,198,1) 81%, 
      ${props => props.theme.background} 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fc6c84', endColorstr='#bcbec0', GradientType=1 );
    `}
`;

const GreetingText = styled.p`
  margin: 0.5% 0px 0px 0px;
  font-size: 4rem;
  font-weight: 400;
  ${props =>
    props.theme.name === "light" &&
    css`
      color: ${props => props.theme.placeholderColor};
    `}
`;

const GreetingTextAndClockContainer = styled.div`
  display: flex;
  flex-direction: column;
`;


const ClockWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 1.7rem;
  padding-left: 10px;
`;



export {
  GreetingWrapper,
  GreetingLine,
  GreetingText,
  GreetingTextAndClockContainer,
  ClockWrapper
};
