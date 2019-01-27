import React, { FunctionComponent } from "react";
import { Todo } from "./types";
import useQueryTodos from "./useQueryTodos";

import styled from "styled-components";

const TodoItem = styled.div`
  border: 2px solid;
  padding: 0.2em;
`;

const TodoList: FunctionComponent<{}> = () => {
  const todos = useQueryTodos();

  return (
    <div>
      {todos.map((todo: Todo) => {
        return <TodoItem>{todo.id}</TodoItem>;
      })}
    </div>
  );
};

export default TodoList;
