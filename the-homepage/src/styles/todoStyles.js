import styled, { css } from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${"" /* box-shadow: 0 5px 6px -6px ${props => props.theme.boxShadow}; */}
  padding-bottom: 2px;
`;

const Input = styled.input`
  background-color: ${props => props.theme.itemBackground};
  outline: none;
  color: ${props => props.theme.inputColor};
  border-color: transparent;
  border-bottom: 1px solid ${props => props.theme.color};
  margin: 5px;

  ::placeholder {
    color: ${props => props.theme.placeholderColor};
  }
`;

const Submit = styled.button`
  outline: none;
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.buttonBackground};
  font-size: 0.9rem;
  font-weight: 400;
  border: 1px solid ${props => props.theme.background};
  border-radius: 4px;
  align-self: center;
  width: 50%;
`;

const ItemsContainer = styled.div`
  display: inline-block;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.theme.itemBackground};
  max-height: 200px;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    background: transparent;
    width: 0;
  }
`;

const TodoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.itemBackground};
  box-shadow: 0 5px 6px -6px ${props => props.theme.boxShadow};
  padding-right: 5px;
  word-wrap: break-word;
  border-bottom: 1px solid ${props => props.theme.color};

  ${props =>
    props.clicked &&
    css`
      background-color: ${props => props.theme.background};
      border-radius: 5px;
      padding-bottom: 4px;
      border: 0;
    `}
`;

export { Form, Input, Submit, ItemsContainer, TodoItem };
