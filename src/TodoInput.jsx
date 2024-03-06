import React, { useState } from "react";

function TodoInput({ addTodo }) {
  const [title, setTitle] = useState(""); // titlt은 현재 입력 필드에 입력된 값을 나타냄

  // 이벤트 핸들러 함수 정의
  // onChange 함수는 입력 필드의 변화를 감지하여 호출
  const onChange = (e) => {
    setTitle(e.target.value); // 필드에 입력된 값
    // setTitle 함수를 사용하여  title 상태를 업데이트
  };

  // 추가 버튼 클릭 핸들러 함수
  // onClick 함수는 사용자가 추가 버튼을 클릭했을 때 호출
  const onClick = () => {
    addTodo(title); // 사용자가 입력한 할 일을 추가
    setTitle(""); //입력필드 초기화
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={onChange}
        className="add"
      ></input>
      <button onClick={onClick}>추가</button>
    </div>
  );
}

export default TodoInput;
