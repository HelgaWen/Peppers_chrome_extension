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
  justify-content: center;
  border: 1px solid black;
  margin: 1%;
  width: 30%;
`;

export {
  PageWrapper,
  ContentCard,
};
