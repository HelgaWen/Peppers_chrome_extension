import styled from "styled-components";

const InputContainer = styled.div`
    display: flex;
    
`;

const SlInput = styled.input`
  outline:none;
  border-color: transparent;
  border-bottom: 1px solid black;       
  margin: 5px;
`;

const SlHeadline = styled.div`
    width: 100%;
`;

export {
  SlInput,
  SlHeadline,
  InputContainer
};