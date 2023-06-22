import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ todos }) {
  // console.log(todos);
  const { id } = useParams();
  console.log(id);
  const todo = todos.find((findtodo) => {
    return findtodo.id === parseInt(id);
  });

  console.log(todo);
  return (
    <div>
      <h1>상세 페이지</h1>

      <>
        <h2>{todo.title}</h2>
        <div>{todo.content}</div>
      </>
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Detail);
