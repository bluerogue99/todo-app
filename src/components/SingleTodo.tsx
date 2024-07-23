import React, { useState, useRef, useEffect } from "react";
import { Todo, Action } from "../model";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDeleteForever, MdOutlineDone } from "react-icons/md";
import "./style.css";

type Props = {
  todo: Todo;
  dispatch: React.Dispatch<Action>;
  handleRemove: (id: number) => void;
  handleToggle: (id: number) => void;
};

const SingleTodo: React.FC<Props> = ({ todo, dispatch, handleRemove, handleToggle }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (edit) {
      inputRef.current?.focus();
    }
  }, [edit]);

  const handleDone = () => {
    handleToggle(todo.id);
  };

  const handleDelete = () => {
    handleRemove(todo.id);
  };

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "edit", payload: { id: todo.id, newTodo: editTodo } });
    setEdit(false);
  };

  return (
    <form className="todos-single" onSubmit={handleEdit}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos-single--text"
        />
      ) : todo.isDone ? (
        <s className="todos-single--text">{todo.todo}</s>
      ) : (
        <span className="todos-single--text">{todo.todo}</span>
      )}
      <div className="icons">
        <RiEdit2Fill
          className="icon edit-icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(true);
            }
          }}
        />
        <MdDeleteForever className="icon delete-icon" onClick={handleDelete} />
        <MdOutlineDone className="icon done-icon" onClick={handleDone} />
      </div>
    </form>
  );
};

export default SingleTodo;
