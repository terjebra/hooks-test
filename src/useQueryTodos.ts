import React, { FunctionComponent, useEffect, useState } from "react";

import { Todo } from "./types";

// our components props accept a number for the initial value
const useQueryTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  return todos;
};

export default useQueryTodos;
