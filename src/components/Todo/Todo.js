import React, { useState } from "react";
import { IconContext } from "react-icons";
import { AiFillCheckCircle } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";
import Navigation from "../Navigation/Navigation";
import {
  ActionButtonContainer,
  TodoHeader,
  TodoItem,
  TodosContentContainer,
  TodosList,
  TodosWrapper,
} from "./Todo.styles";
import GlobalStyle from "../../globalStyles";

const Todo = () => {
  const [toDo, setTodo] = useState([
    {
      id: 1,
      title: "First Task",
      status: false,
      editing: false,
    },
    {
      id: 2,
      title: "Second Task",
      status: false,
      editing: false,
    },
  ]);

  const [newTodo, setNewTodo] = useState("");
  const [updateTodo, setUpdate] = useState("");

  const addTask = () => {};
  console.log(newTodo)
  return (
    <TodosWrapper>
      {/* <Navigation /> */}
      <GlobalStyle />
      <TodosContentContainer>
        <TodoHeader>My Todo List</TodoHeader>
        <TodosList>
          <div className="search_row">
            <input type="text" onChange={(e) => setNewTodo(e.target.value)}/>
            <button onClick={addTask}>New</button>
          </div>
          {toDo &&
            toDo.map((todo, i) => {
              return (
                <li key={"todo-" + i}>
                  <TodoItem>
                    <p>{todo.title}</p>
                    <ActionButtonContainer>
                      <GrEdit />
                      <RiDeleteBin5Line />
                    </ActionButtonContainer>
                  </TodoItem>
                </li>
              );
            })}
        </TodosList>
      </TodosContentContainer>
    </TodosWrapper>
  );
};

export default Todo;
