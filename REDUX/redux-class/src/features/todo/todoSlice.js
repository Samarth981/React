//reducres is in there all related todo
import { createSlice, nanoid } from '@reduxjs/toolkit'; // nanoid generates unique IDs

const initialState = {
  todos: [{ id: 'abc', task: 'demo task', isDone: false }],
};

export const todoSlice = createSlice({
  name: 'todo', // Name should be a string
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.todos.push(newTodo); //direct mutation of the array
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    markIsDone: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: true } : todo,
      );
    },
  },
});

export const { addTodo, deleteTodo, markIsDone } = todoSlice.actions; // redux toolkit autometically generates Action creators (fun that create action obj)
export default todoSlice.reducer;
