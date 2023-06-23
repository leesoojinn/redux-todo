import React from "react";
import "css/Style.css";
import { Link } from "react-router-dom";

function TodoContainer({
  item,
  clickCompleteButtonHandler,
  clickRemoveButtonHandler,
}) {
  return (
    <>
      <div key={item.id} className="list-container">
        <div className="todo-container">
          <Link to={`/detail/${item.id}`}>상세</Link>
          <h2>{item.title}</h2>
          <div>{item.content}</div>
          <div className="button-set">
            <button
              className="todo-delete-button button"
              onClick={() => clickRemoveButtonHandler(item.id)}
            >
              삭제하기
            </button>

            <button
              className="todo-complete-cancel-button button"
              onClick={() => clickCompleteButtonHandler(item.id)}
            >
              {item.isDone ? "취소" : "완료"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoContainer;
