import React, { useReducer } from "react";
import { Todo } from "./model";
import { TodoReducer } from "./reducer";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import './App.css';

const App: React.FC = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  const addTodo = (todo: string) => {
    dispatch({ type: "add", payload: todo });
  };

  const handleRemove = (id: number) => {
    dispatch({ type: "remove", payload: id });
  };

  const handleToggle = (id: number) => {
    dispatch({ type: "done", payload: id });
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField addTodo={addTodo} />
      <TodoList
        todos={todos}
        handleRemove={handleRemove}
        handleToggle={handleToggle}
        dispatch={dispatch} // Ensure dispatch is passed to TodoList
      />
    </div>
  );
};

export default App;
