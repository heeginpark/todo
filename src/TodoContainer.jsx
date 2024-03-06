import React, { useState } from "react";
import TodoRoot from "./TodoRoot";

const data = [
  { id: 1, title: "프론트엔드 과제", done: false }, // done: false는 할 일을 완료하지 않았다
  { id: 2, title: "todoList 만들어보기", done: false },
  { id: 3, title: "파이널 프로젝트 주제 선정", done: false },
];

function TodoContainer() {
  const [todoList, setTodoList] = useState(data);

  const addTodo = (title) => {
    const lastIndex = todoList.length - 1; // 마지막 순서를 저장
    const lastId = todoList[lastIndex].id; // 마지막 순서 투두 아이디를 저장
    const todo = { id: lastId + 1, title: title, done: false }; // id와 저장한 투두, done 저장
    setTodoList([...todoList, todo]); //
  };

  const toggleTodo = (id) => {
    // 해당 id의 todo 항목의 done 값을 토글
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodoRoot
        todoList={todoList}
        addTodo={addTodo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default TodoContainer;
