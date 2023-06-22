// 액션 타입 정의
const ADD_TODO = "todos/ADD_TODO";
const REMOVE_TODO = "todos/REMOVE_TODO";

// 액션 생성 함수
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

// 초기 상태 정의
const initialState = {
  todos: [
    { id: 1, title: "리액트 공부하기", content: "리액트 기초를 공부해봅시다" },
  ],
};

// 리듀서 함수
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default todos;
