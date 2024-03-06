import React from "react";
import "./TodoRoot.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function TodoRoot({ todoList, addTodo, toggleTodo, deleteTodo }) {
  return (
    <div className="todoRoot">
      <h1>할일</h1>
      <TodoInput addTodo={addTodo}></TodoInput>
      <TodoList
        todoList={todoList}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      ></TodoList>
    </div>
  );
}

export default TodoRoot;
