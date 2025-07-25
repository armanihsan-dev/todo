import { createSlice } from '@reduxjs/toolkit';

// Get todos from localStorage if they exist
const getInitialTodos = () => {
  const stored = localStorage.getItem('todos');
  return stored ? JSON.parse(stored) : [];
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: getInitialTodos(), // Load from localStorage
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
      localStorage.setItem('todos', JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      const newState = state.filter((todo) => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(newState));
      return newState;
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
      localStorage.setItem('todos', JSON.stringify(state));
    },
    editTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) todo.text = action.payload.newText;
      localStorage.setItem('todos', JSON.stringify(state));
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
