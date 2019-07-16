import styled, { css, keyframes } from "styled-components";

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

const rotate360 = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerAnimation = styled.div`
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  width: 100px;
  height: 100px;
  margin-top: -50px;
  border-radius: 50%;
  border: 1px solid #f6f;
  border-top-color: #0e0;
  border-right-color: #0dd;
  border-bottom-color: #f90;
  animation: ${rotate360} 0.6s linear infinite;
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 20px 0;
  width: 70%;
  border: 1px solid black;
`;

const SearchInput = styled.input`
  font-size: 16px;
  font-weight: 400;
  padding-left: 20px;
  outline: none;

  background-color: transparent;
  border: 0 solid;
  height: 85%;
  overflow: hidden;
  max-width: 100%;
`;

const SearchPlatform = styled.button`
  width: 30%;
  background-color: #fff;
  color: black;
  padding: 16px;
  font-size: 16px;
  outline: none;
  border-right: 1px solid black;
  cursor: pointer;
`;

const SearchDropdown = styled.div`
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  display: none;
  ${props =>
    props.show &&
    css`
      display: block;
    `}
`;

export {
  PageWrapper,
  InputWrapper,
  InputLabel,
  NameInput,
  GreetingWrapper,
  GreetingText,
  ContentCardWrapper,
  ContentCard,
  SpinnerAnimation,
  SearchWrapper,
  SearchInput,
  SearchPlatform,
  SearchDropdown
};
