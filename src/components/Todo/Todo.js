import React, { useState } from "react";
import { AiFillCheckCircle, AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import GlobalStyle from "../../globalStyles";
import Navigation from "../Navigation/Navigation";

import {
  ActionButtonContainer,
  TodoHeader,
  TodoItem,
  TodosContentContainer,
  TodosList,
  TodosWrapper,
} from "./Todo.styles";

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

  const addTodo = () => {
    if (newTodo) {
      let newIdx = toDo.length + 1;
      let entry = {
        id: newIdx,
        title: newTodo,
        status: false,
        editing: false,
      };
      setTodo([...toDo, entry]);
    }
  };

  const deleteTodo = (id) => {
    let newState = toDo.filter((task) => task.id !== id);
    setTodo(newState);
  };

  return (
    <TodosWrapper>
      {/* <Navigation /> */}
      <GlobalStyle />
      <TodosContentContainer>
        <TodoHeader>My Todo List</TodoHeader>
        <TodosList>
          <div className="search_row">
            <input
              type="text"
              placeholder="Search and Add Task"
              onChange={(e) => setNewTodo(e.target.value)}
              value={newTodo}
            />
            <button onClick={addTodo}>New</button>
          </div>
          {toDo &&
            toDo.map((todo, i) => {
              return (
                <li key={"todo-" + i}>
                  <TodoItem>
                    <p>{todo.title}</p>
                    <ActionButtonContainer>
                      <AiFillEdit className="edit" />
                      <RiDeleteBin5Line
                        className="delete"
                        onClick={() => deleteTodo(todo.id)}
                      />
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
