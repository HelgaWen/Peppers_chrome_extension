import styled from 'styled-components';

const NameInput = styled.input`
  margin: 0px;
  padding: 0px;
  outline: none;
  border: none;
  font-size: 2rem;
  background-color: transparent;
  color: #fc6c85;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 20% 0 0 0;
`;

const InputLabel = styled.div`
  font-size: 2rem;
  color: #2a2b42;
  margin-bottom: 3px;
`;

export {
  NameInput,
  InputWrapper,
  InputLabel
}