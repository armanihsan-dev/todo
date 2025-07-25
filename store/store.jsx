import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Slices/todo.jsx';
export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
