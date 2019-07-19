import React from "react";
import { TodoItem, ItemTitle, ItemDescription } from '../styles/todoStyles';

function Item({ item }) {

  function deleteItem(event) {
    let clickedItem = event.target;
    clickedItem.parentElement.style.display = 'none';
  }
  return (
    <TodoItem onClick={deleteItem}>
      <ItemTitle>{item.title}</ItemTitle>
      <ItemDescription>{item.desc}</ItemDescription>
    </TodoItem>
  );
}

export default Item;
