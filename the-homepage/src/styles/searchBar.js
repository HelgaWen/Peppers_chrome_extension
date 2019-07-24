import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${props => props.theme.itemBackground};
  display: flex;
  margin-bottom: 30px;
  padding: 5px;
  width: 70%;
  border-radius: 7px;
  box-shadow: 2px 2px 7px ${props => props.theme.boxShadow};
`;

const Button = styled.button`
  border: none;
  outline: none;
  width: 100%;
  background-color: transparent;
  padding: 16px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.background};
  }
`;

const Input = styled.input`
  font-size: 16px;
  font-weight: 400;
  padding-left: 20px;
  outline: none;
  background-color: transparent;
  color: ${props => props.theme.inputColor};
  border: 0 solid;
  height: 85%;
  overflow: hidden;
  max-width: 100%;
  float: left;

  ::placeholder {
    color: ${props => props.theme.placeholderColor};
  }
`;

const Engine = styled.div`
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  border-right: 1px solid ${props => props.theme.boxShadow};
  position: relative;
  padding-right: 2px;

  &:hover {
    > div {
      display: flex;
      flex-direction: column;
    }
  }
`;

const Dropdown = styled.div`
  position: absolute;
  width: 30%;
  background-color: ${props => props.theme.itemBackground};
  box-shadow: 0 2px 7px ${props => props.theme.boxShadow};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 7px;
  border-bottom-left-radius: 7px;
  margin-left: -4px;
  margin-top: 5px;
  min-width: 160px;
  display: none;
  z-index: 1;

  &:not(:hover) {
    display: none;
  }
`;

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  object-fit: cover;
`;

const EngineContainer = styled.div`
  width: 150px;
  height: 50px;
  background-repeat: no-repeat;
  object-fit: fit;
`;

export {
  Wrapper,
  Engine,
  Input,
  Dropdown,
  Button,
  DropdownContainer,
  Image,
  EngineContainer
};
