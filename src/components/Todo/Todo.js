import React, { useState } from "react";
import GlobalStyle from "../../globalStyles";
import Navigation from "../Navigation/Navigation";
import TodoItem from "../TodoItem/TodoItem";

import {
  TodoHeader,
  TodosContentContainer,
  TodosList,
  TodosWrapper,
} from "./Todo.styles";

const Todo = () => {
  const [toDos, setTodos] = useState([
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

  const addTodo = () => {
    if (newTodo) {
      let newIdx = toDos.length + 1;
      let entry = {
        id: newIdx,
        title: newTodo,
        status: false,
        editing: false,
      };
      setTodos([...toDos, entry]);
    }
  };

  const deleteTodo = (id) => {
    let newState = toDos.filter((task) => task.id !== id);
    setTodos(newState);
  };

  const setEditing = (id) => {
    let newState = [...toDos].map((todo) => {
      let { editing } = todo;
      if (todo.id === id) {
        todo.editing = !editing;
      }
      return todo;
    });
    setTodos(newState);
  };

  const updateTodo = (newTodoTitle, id) => {
    let newState = [...toDos].map((todo) => {
      if (todo.id === id) {
        todo.title = newTodoTitle
      }
      return todo;
    });
    setTodos(newState)
  }

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
          {toDos &&
            toDos.map((todo, i) => {
              return (
                <li key={"todo-" + i}>
                  <TodoItem
                    deleteTodo={deleteTodo}
                    setEditing={setEditing}
                    updateTodo={updateTodo}
                    todoId={todo.id}
                    {...todo}
                  />
                </li>
              );
            })}
        </TodosList>
      </TodosContentContainer>
    </TodosWrapper>
  );
};

export default Todo;
