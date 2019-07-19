import React from "react";
import { TodoItem, ItemTitle, ItemDescription } from '../styles/todoStyles';

function Item({ item }) {
  return (
    <TodoItem>
      <ItemTitle>{item.title}</ItemTitle>
      <ItemDescription>{item.desc}</ItemDescription>
    </TodoItem>
  );
}

export default Item;
