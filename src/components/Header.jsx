import React from "react";
import "css/Style.css";
import { styled } from "styled-components";

function Header() {
  return (
    <SttopTitle>
      <div>My Todo List</div>
      <div>React</div>
    </SttopTitle>
  );
}

export default Header;

const SttopTitle = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 20px;
`;
