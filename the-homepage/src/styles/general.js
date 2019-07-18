import styled from "styled-components";

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`;

const ContentCard = styled.div`
  display: flex;
  flex-direction:column;    
  justify-content: center;
  border: 1px solid black;
  margin: 1%;
  max-width: 80%;
  overflow:hidden;
`;

export {
  PageWrapper,
  ContentCard,
};
