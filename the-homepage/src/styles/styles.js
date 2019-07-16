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
  
  content: '';
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
  animation: ${rotate360} .6s linear infinite;

  ${props => props.two && css`
    width: 150px;
    height:150px;
    margin-top: -75px;
    animation: ${rotate360} .8s linear infinite;
    animation-direction: reverse;
  `}
  ${props => props.three && css`
    width: 200px;
    height:200px;
    margin-top: -100px;
    animation: ${rotate360} 1s linear infinite;
  `}
  ${props => props.four && css`
    width: 250px;
    height:250px;
    margin-top: -125px;
    animation: ${rotate360} 1.2s linear infinite;
    animation-direction: reverse;
  `}
  ${props => props.five && css`
    width: 300px;
    height:300px;
    margin-top: -150px;
    animation: ${rotate360} 1.4s linear infinite;
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
  SpinnerAnimation
};
