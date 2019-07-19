import styled from "styled-components";

const TodoForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TodoInput = styled.input`
  outline:none;
  border-color: transparent;
  border-bottom: 1px solid black;       
  margin: 5px;
   
`;

const TodoSubmit = styled.button`
  outline:none;
  border: 1px solid orange;
  align-self:center;
  width: 70%;
`;

const TodoItemsContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  background-color:transparent;
  width: 100%;
  overflow:scroll;
  max-height:200px
`;

const TodoItem = styled.div`
  text-align: center;
  border-bottom: 1px solid orange;
  padding-bottom: 2px;
  padding-right:5px;
  word-wrap:break-word;
`;

const ItemTitle = styled.h1`
  font-size: 12px;
  color: black;
`;

const ItemDescription = styled.p`
  font-size: 10px;
  color:grey;
`;

export {
  TodoForm,
  TodoInput,
  TodoSubmit,
  TodoItemsContainer,
  TodoItem,
  ItemTitle,
  ItemDescription
};