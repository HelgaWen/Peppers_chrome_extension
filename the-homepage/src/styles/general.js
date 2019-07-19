import styled, { css } from "styled-components";

// * {
//   box-sizing: border-box;
// }

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`;

const ContentCard = styled.div`
display: flex;
${props => props.column ? 'flex-direction: column' : 'flex-direction: row'}
  justify-content: center;
  ${'' /* border: 1px solid black; */}
  box-shadow: 3px 3px 7px black;
  border-radius:7px;
  padding: 5px;
  margin: 1%;
  max-width: 80%;
  overflow:hidden;

  ${props => props.noborder && css`
    border:0;
    box-shadow: none;
  `}
`;

export {
  PageWrapper,
  ContentCard,
};
