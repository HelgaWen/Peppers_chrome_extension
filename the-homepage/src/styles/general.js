import styled from "styled-components";

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
  border: 1px solid black;
  margin: 1%;
  width: 30%;
`;

export {
  PageWrapper,
  ContentCard,
};
