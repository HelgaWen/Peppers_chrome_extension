import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 5px 6px -6px black;
    padding-bottom: 2px;
`;

const Input = styled.input`
  outline:none;
  border-color: transparent;
  border-bottom: 1px solid black;       
  margin: 5px;
   
`;

const Submit = styled.button`
  outline:none;
  border: 1px solid orange;
  border-radius: 4px;
  align-self:center;
  width: 70%;
`;

const ItemsContainer = styled.div`
  display:inline-block;
  flex-direction: column;
  justify-content: center;
  background-color:transparent;
  max-height:200px;
  width: 100%;
  overflow-x:hidden;
  overflow-y:scroll;
  ::-webkit-scrollbar{
    background:transparent;
    width: 0;
  }
`;

const TodoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 5px 6px -6px black;
  padding-right:5px;
  word-wrap:break-word;

  ${props => props.clicked ? 'background-color: peachpuff' : 'background-color: white'}
`;

export {
  Form,
  Input,
  Submit,
  ItemsContainer,
  TodoItem,
};