import styled, { css } from "styled-components";

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NameInput = styled.input`
  margin: 0px;
  padding: 0px;
  outline: none;
  border: none;
  font-size: 1.1rem;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 20px;
`;

const InputLabel = styled.div`
  font-size: 1.1rem;
  color: #2a2b42;
  margin-bottom: 3px;
`;

const GreetingWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  padding: 20px;
  margin-top: 50px;
  border-radius: 7px;
  border: 1px solid black;
`;

const GreetingText = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: rebeccapurple;
`;

const ContentCardWrapper = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  ${props =>
    props.layout &&
    css`
      grid-template-columns: repeat(2, 1fr);
    `}
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
  InputWrapper,
  InputLabel,
  NameInput,
  GreetingWrapper,
  GreetingText,
  ContentCardWrapper,
  ContentCard
};
