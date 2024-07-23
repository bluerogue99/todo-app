import React, { useState } from "react";

interface Props {
  addTodo: (todo: string) => void;
}

const InputField: React.FC<Props> = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      addTodo(todo);
      setTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input">
      <input
        className="input-box" 
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter task"
      />
      <button className="input-submit" type="submit">Add</button>
    </form>
  );
};

export default InputField;
