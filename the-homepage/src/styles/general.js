import styled, { css } from "styled-components";

// * {
//   box-sizing: border-box;
// }

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.background};
`;

const ContentCard = styled.div`
  display: flex;
  ${props => (props.column ? "flex-direction: column" : "flex-direction: row")}
  justify-content: center;
  background-color: ${props => props.theme.itemBackground};
  box-shadow: 3px 3px 7px ${props => props.theme.boxShadow};
  border-radius: 7px;
  padding: 5px;
  margin: 1%;
  max-width: 80%;
  overflow: hidden;
  position: absolute;

  ${props =>
    props.noborder &&
    css`
      border: 0;
      box-shadow: none;
      background-color: transparent;
    `}

  ${props =>
    props.cssPosition &&
    css`
      width: ${props => props.cssPosition.width};
      height: ${props => props.cssPosition.height};
      left: ${props => props.cssPosition.x}px;
      top: ${props => props.cssPosition.y}px;
    `}
`;

export { PageWrapper, ContentCard };
