export interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
  }
  
  // Define a union type for actions
  export type Action =
    | { type: "add"; payload: string }
    | { type: "remove"; payload: number }
    | { type: "done"; payload: number }
    | { type: "edit"; payload: { id: number; newTodo: string } };
  