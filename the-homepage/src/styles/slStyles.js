import styled from "styled-components"; 
import darkArrow from "./images/dark-arrow.png";
import lightArrow from "./images/light-arrow.png";
import { Button } from "./general";

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

const SwitchButton = styled(Button)`
  width: 40px;
  height: 30px;
  padding: 0px;
  ${props => props.theme.theme==="light" ? `background: url(${lightArrow}) no-repeat` : `background: url(${darkArrow}) no-repeat`};
  background-position: 8px center;
  &:hover {
    background-color: ${props => props.theme.background}
    border: none;
  }
`;

const Headline = styled.div`
  width: 100%;
`;

export { Input, Headline, InputContainer, SubmitButton, SwitchButton };
