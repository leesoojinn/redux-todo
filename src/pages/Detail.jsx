import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

function Detail() {
  const { id } = useParams();
  const todos = useSelector((state) => state.todos);

  const navigate = useNavigate();
  const todo = todos.filter((todo) => {
    return todo.id === id;
  });

  return (
    <StContainer>
      <StBox>
        <div>
          <StDetailHeader>
            <p>ID: {id}</p>
            <StGetBackButton
              borderColor="#ddd"
              onClick={() => {
                navigate("/");
              }}
            >
              이전으로
            </StGetBackButton>
          </StDetailHeader>
          <StTitle>{todo[0].title}</StTitle>
          <StContent>{todo[0].content}</StContent>
        </div>
      </StBox>
    </StContainer>
  );
}

export default Detail;

export const StContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StBox = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StDetailHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

export const StGetBackButton = styled.button`
  border: 1px solid #eee;
  background-color: #fff;
  height: 40px;
  width: 120px;
  border-radius: 12px;
  cursor: pointer;
`;

export const StTitle = styled.h1`
  padding: 0 24px;
`;

export const StContent = styled.main`
  padding: 0 24px;
`;
