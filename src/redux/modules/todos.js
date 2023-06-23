import { nanoid } from "nanoid";

const initialState = [
  {
    id: nanoid(),
    title: "리액트",
    content: "리액트를 배워봅시다",
    isDone: false,
  },
  {
    id: nanoid(),
    title: "리액트",
    content: "리액트를 배워봅시다",
    isDone: false,
  },
  {
    id: nanoid(),
    title: "리액트",
    content: "리액트를 배워봅시다",
    isDone: false,
  },
];

// action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const STATUS_TODO = "STATUS_TODO";

// todo 추가
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

// todo 제거
export const deletTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

// todo isDone 변경
export const statusTodo = (payload) => {
  return {
    type: STATUS_TODO,
    payload,
  };
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((todo) => {
        return todo.id !== action.payload;
      });
    case STATUS_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export default todos;
