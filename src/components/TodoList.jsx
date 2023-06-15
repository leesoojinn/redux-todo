import { useState } from "react";
import "css/Style.css";
import TodoContainer from "components/TodoContainer";

function App() {
  const [todolist, setTodolist] = useState([
    { id: 1, title: "리액트 공부하기", content: "리액트 기초를 공부해봅시다" },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [doneList, setDoneList] = useState([]);

  // 제목, 내용 추가
  const addTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const addContentHandler = (event) => {
    setContent(event.target.value);
  };

  const clickAddButtonHandler = (e) => {
    e.preventDefault(); // 폼 제출 방지. 추가하기 누르면 바로 사라짐

    // 추가 버튼 클릭
    const newTodo = {
      id: todolist.length + 1,
      title,
      content,
    };
    setTodolist([...todolist, newTodo]);

    // 입력 내용 초기화
    setTitle("");
    setContent("");
  };

  // 삭제 버튼 클릭
  const clickRemoveButtonHandler = (id, status) => {
    if (status === "working") {
      const newTodos = todolist.filter((todo) => todo.id !== id);
      setTodolist(newTodos);
    } else if (status === "done") {
      const newDoneList = doneList.filter((todo) => todo.id !== id);
      setDoneList(newDoneList);
    }
  };

  // 완료 버튼 클릭
  const clickCompleteButtonHandler = (id) => {
    const todo = todolist.find((todo) => todo.id === id);
    const updatedTodos = todolist.filter((item) => item.id !== id);
    const updatedTodo = { ...todo, isDone: true };
    setTodolist(updatedTodos);
    setDoneList([...doneList, updatedTodo]);
  };

  //취소 버튼 클릭
  const clickCancelButtonHandler = (id) => {
    const doneTodo = doneList.find((item) => item.id === id);
    if (doneTodo) {
      const updatedDoneTodos = doneList.filter((item) => item.id !== id);
      const updatedTodo = { ...doneTodo, isDone: false };
      setDoneList(updatedDoneTodos);
      setTodolist([...todolist, updatedTodo]);
    }
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
      {/* 가로 정렬 */}
      <div className="list-container-wrapper">
        {/* key 값은 맨위에 두기 */}
        {todolist.map((item) => {
          return (
            <TodoContainer
              key={item.id}
              item={item}
              completeButton={clickCompleteButtonHandler}
              cancelButton={clickCancelButtonHandler}
              removeButton={(id) => clickRemoveButtonHandler(id, "working")}
            />
          );
        })}
      </div>
      <div>
        {/* 완료하기 추가 */}
        <div>
          <h2 className="list-title">Done</h2>
        </div>
        <div className="list-container-wrapper">
          {doneList.map((item) => {
            return (
              <TodoContainer
                key={item.id}
                item={item}
                completeButton={clickCompleteButtonHandler}
                cancelButton={clickCancelButtonHandler}
                removeButton={(id) => clickRemoveButtonHandler(id, "done")}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
