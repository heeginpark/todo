import React, { useState } from "react";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  const [todoCheck, setTodoCheck] = useState(false);

  const addCheck = () => {
    setTodoCheck(!todoCheck);
    toggleTodo(todo.id);
  };

  const deleteItem = () => {
    if (window.confirm("삭제하시겠습니까?")) deleteTodo(todo.id);
  };
  //JSX 내에서 사용할 때 특정 조건에 따라 요소를 렌더링하거나 렌더링하지 않는 데 사용
  //용자가 확인을 선택하면, window.confirm()은 true를 반환합니다. 따라서 조건문이 참이 되어 deleteTodo(todo.id)가 호출
  return (
    <tr className={todoCheck ? " checkbox-checked" : "checkbox"}>
      {/* true이면 "checkbox checked" 클래스가 적용 */}
      <td>
        <input type="checkbox" onChange={addCheck} checked={todoCheck}></input>
      </td>

      <td>{todo.title}</td>
      <td>
        <button onClick={deleteItem}>삭제</button>
      </td>
    </tr>
  );
}

export default TodoItem;

// function TodoItem({ props }) {
//   return (
//     <tr>
//       <td>{props.todo.id}</td>
//       <td>{props.todo.title}</td>
//     </tr>
//   );
// }

/*
const { todo } = props;는 ES6의 객체 비구조화 할당 문법입니다. 이 코드는 props 객체로부터 todo라는 속성을 추출하여 새로운 변수로 할당하는 역할을 합니다.

일반적으로 React 컴포넌트에서 props 객체는 컴포넌트에 전달된 모든 속성을 포함하고 있습니다. 따라서 이 속성들을 필요에 따라 추출하고 사용할 수 있습니다.

const { todo } = props; 구문은 다음과 같은 동작을 수행합니다:

props 객체에서 todo라는 속성을 찾습니다.
찾은 todo 속성의 값을 새로운 변수 todo에 할당합니다.
이렇게 하면 이후 코드에서 props.todo 대신에 간단히 todo라는 변수를 사용할 수 있습니다. 코드를 더 간결하고 가독성 있게 만들어줍니다.

그러므로, const { todo } = props; 코드는 props 객체로부터 todo 속성을 추출하여 변수로 할당하는 것입니다.





*/
