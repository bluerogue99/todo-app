import { Todo, Action } from "./model";

export const TodoReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false }
      ];
    case "remove":
      return state.filter(todo => todo.id !== action.payload);
    case "done":
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "edit":
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, todo: action.payload.newTodo } : todo
      );
    default:
      return state;
  }
};
