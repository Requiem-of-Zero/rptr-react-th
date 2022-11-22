import React, { useState } from "react";
import { AiFillCheckCircle, AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  ActionButtonContainer,
  EditingInput,
  TodoItemWrapper,
} from "./TodoItem.styles";

const TodoItem = ({
  title,
  status,
  editing,
  todoId,
  deleteTodo,
  setEditing,
  updateTodo,
}) => {
  const [newTodoItem, setUpdate] = useState(title);
  return (
    <TodoItemWrapper>
      {editing ? (
        <EditingInput
          type="text"
          value={newTodoItem}
          onChange={(e) => {
            setUpdate(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              updateTodo(newTodoItem, todoId);
              setEditing(todoId);
            }
          }}
        ></EditingInput>
      ) : (
        <p onClick={() => setEditing(todoId)}>{title}</p>
      )}
      <ActionButtonContainer>
        <AiFillEdit className="edit" onClick={() => setEditing(todoId)} />
        <RiDeleteBin5Line
          className="delete"
          onClick={() => deleteTodo(todoId)}
        />
      </ActionButtonContainer>
    </TodoItemWrapper>
  );
};

export default TodoItem;
