import React from "react";
import "css/Style.css";
import { styled } from "styled-components";

export default function Layout(props) {
  return <Stlayout>{props.children}</Stlayout>;
}

const Stlayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;
