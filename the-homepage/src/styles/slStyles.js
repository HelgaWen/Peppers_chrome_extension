import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
`;

const Input = styled.input`
  background-color: ${props => props.theme.itemBackground};
  outline: none;
  color: ${props => props.theme.inputColor};
  font-size: 1.2rem;
  font-weight: bold;
  border-color: transparent;
  border-bottom: 1px solid ${props => props.theme.boxShadow};
  margin: 5px;

  ::placeholder {
    color: ${props => props.theme.placeholderColor};
  }
`;

const SubmitButton = styled.input`
  display: none;
`;

const Headline = styled.div`
  width: 100%;
`;

export { Input, Headline, InputContainer, SubmitButton };
