import Header from "components/Header";
import Layout from "components/Layout";
import TodoList from "components/TodoList";
import React from "react";

export default function Main() {
  return (
    <Layout>
      <Header />
      <TodoList />
    </Layout>
  );
}
