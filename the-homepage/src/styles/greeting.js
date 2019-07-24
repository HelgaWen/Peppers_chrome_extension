import styled, { css } from "styled-components";

const GreetingWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  padding: 20px;
`;

const GreetingLine = styled.div`
  z-index: 1;
  left: 120px;
  top: 120px;
  width: 5px;
  height: 80px;
  margin-right: 5px;
  border-radius: 4px;
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
        rgba(252, 108, 132, 1) 0%,
        rgba(250, 135, 154, 1) 11%,
        rgba(252, 184, 195, 1) 44%,
        rgba(247, 247, 242, 1) 80%,
        rgba(247, 247, 242, 1) 100%
      );
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fc6c84', endColorstr='#f7f7f2', GradientType=0 );
    `}
`;

const GreetingText = styled.p`
  margin-top: 10px;
  font-size: 2rem;
  font-weight: 400;
  ${props =>
    props.theme.name === "light" &&
    css`
      color: ${props => props.theme.placeholderColor};
    `}
`;

export { GreetingWrapper, GreetingLine, GreetingText };
