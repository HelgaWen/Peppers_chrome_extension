import styled from 'styled-components';

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
  color: black;
`;

export {
    GreetingWrapper,
    GreetingText
}