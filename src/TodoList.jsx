import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todoList, toggleTodo, deleteTodo }) {
  const trlist = todoList.map((todo) => (
    <TodoItem
      todo={todo}
      key={todo.id}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
    />
  ));

  return (
    <table>
      <thead>
        <tr>
          <td>check</td>
          <td>할일</td>
          <td>삭제</td>
        </tr>
      </thead>
      <tbody>{trlist}</tbody>
    </table>
  );
}
export default TodoList;
