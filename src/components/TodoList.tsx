import React from "react";
import { Todo, Action } from "../model";
import "./style.css";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  handleRemove: (id: number) => void;
  handleToggle: (id: number) => void;
  dispatch: React.Dispatch<Action>; // Ensure dispatch is included here
}

const TodoList: React.FC<Props> = ({ todos, handleRemove, handleToggle, dispatch }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          handleRemove={handleRemove}
          handleToggle={handleToggle}
          dispatch={dispatch} // Pass dispatch to SingleTodo
        />
      ))}
    </div>
  );
};

export default TodoList;
