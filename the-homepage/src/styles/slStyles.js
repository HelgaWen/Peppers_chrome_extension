import styled from "styled-components";
import darkArrow from "./images/dark-arrow.png";
import lightArrow from "./images/light-arrow.png";
import { Button } from "./general";

const InputContainer = styled.div`
  display: flex;
  flex-direction:column;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 182px;
  background-color: ${props => props.theme.itemBackground};
  outline: none;
  color: ${props => props.theme.inputColor};
  font-size: 1.2rem;
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
  margin-top: 5px;
  width: 40px;
  height: 30px;
  padding: 0px;
  transform: rotate(90deg);
  ${props => props.theme.name === "light" ? `background: url(${lightArrow}) no-repeat` : `background: url(${darkArrow}) no-repeat`};
  background-position: center;
  &:hover {
    background-color: ${props => props.theme.background}
    border: none;
  }
`;

const Headline = styled.div`
  margin-top: 0;
  text-align:center;
  width: 100%;
`;

const Text = styled.h3`
  margin-top:0;
`;

export { Input, Headline, InputContainer, SubmitButton, SwitchButton, Text };
