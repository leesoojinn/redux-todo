import { useState } from "react";
import "css/Style.css";
import TodoContainer from "components/TodoContainer";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deletTodo, statusTodo } from "redux/modules/todos";

function TodoList() {
  const todolist = useSelector((state) => state.todos);
  console.log(todolist);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 제목, 내용 추가
  const addTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const addContentHandler = (event) => {
    setContent(event.target.value);
  };

  const clickAddButtonHandler = (e) => {
    e.preventDefault(); // 폼 제출 방지. 추가하기 누르면 바로 사라짐
    if (!title || !content) {
      // 제목, 내용 비어있을 떄
      return;
    }

    // 추가 버튼 클릭
    const newTodo = {
      id: nanoid(),
      title,
      content,
      isDone: false,
    };
    dispatch(addTodo(newTodo));

    // 입력 내용 초기화
    setTitle("");
    setContent("");
  };

  // 삭제 버튼 클릭
  const clickRemoveButtonHandler = (id) => {
    dispatch(deletTodo(id));
  };

  // 완료 버튼 클릭
  const clickCompleteButtonHandler = (id) => {
    dispatch(statusTodo(id));
  };

  return (
    <div className="layout">
      <form className="add-form">
        <div className="input-container">
          <label className="form-label">제목</label>
          <input
            type="text"
            className="add-title-content"
            value={title}
            onChange={addTitleHandler}
          />
          <label className="form-label">내용</label>
          <input
            type="text"
            className="add-title-content"
            value={content}
            onChange={addContentHandler}
          />
        </div>
        <button className="add-button" onClick={clickAddButtonHandler}>
          추가하기
        </button>
      </form>
      <div>
        <h2 className="list-title">Working</h2>
      </div>
      <div className="list-container-wrapper">
        {todolist
          .filter((todo) => !todo.isDone)
          .map((item) => {
            return (
              <TodoContainer
                key={item.id}
                item={item}
                clickCompleteButtonHandler={clickCompleteButtonHandler}
                clickRemoveButtonHandler={clickRemoveButtonHandler}
              />
            );
          })}
      </div>
      <div>
        <div>
          <h2 className="list-title">Done</h2>
        </div>
        <div className="list-container-wrapper">
          {todolist
            .filter((todo) => todo.isDone)
            .map((item) => {
              return (
                <TodoContainer
                  key={item.id}
                  item={item}
                  clickCompleteButtonHandler={clickCompleteButtonHandler}
                  clickRemoveButtonHandler={clickRemoveButtonHandler}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
