import { useState } from "react";
import "./App.css";

function App() {
  const [todolist, setTodolist] = useState([
    { id: 1, title: "리액트 공부하기", content: "리액트 기초를 공부해봅시다" },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const addContentHandler = (event) => {
    setContent(event.target.value);
  };

  // 버튼 클릭
  const buttonClick = () => {
    alert("눌림!!!");
  };

  return (
    <div className="layout">
      <div className="top-title">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <form className="add-form">
        <div className="input-container">
          <label className="form-label">제목</label>
          <input
            type="text"
            className="add-title-content"
            value={title}
            onChange={addTitleHandler}
          />
          {title}
          <label className="form-label">내용</label>
          <input
            type="text"
            className="add-title-content"
            value={content}
            onChange={addContentHandler}
          />
          {content}
        </div>
        <button className="add-button">추가하기</button>
      </form>
      <div className="list-container">
        {todolist.map((item) => {
          return (
            <div key={item.id} className="list-container">
              {" "}
              {/* key 값은 맨위에 두기 */}
              <h2 className="list-title">Working</h2>
              <div className="list-wrapper">
                <div className="todo-container">
                  <div>
                    {item.title}
                    <br />
                    {item.content}
                  </div>
                  <div className="button-set">
                    <button className="todo-delete-button button">
                      삭제하기
                    </button>
                    <button className="todo-complete-button button">
                      완료
                    </button>
                  </div>
                </div>
              </div>
              <h2 className="list-title">Done</h2>
              {/* 완료하기 추가 */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
