import styled from "styled-components";

const InputContainer = styled.div`
    display: flex;
`;

const Input = styled.input`
  outline:none;
  border-color: transparent;
  border-bottom: 1px solid black;       
  margin: 5px;
`;

const Headline = styled.div`
    width: 100%;
`;

export {
  Input,
  Headline,
  InputContainer
};