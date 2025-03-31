import { createSlice } from '@reduxjs/toolkit';

const getInitialTodos = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};

const initialState = {
  todos: getInitialTodos(),
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    updateTodoPriority: (state, action) => {
      const { id, priority } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.priority = priority;
        localStorage.setItem('todos', JSON.stringify(state.todos));
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodoPriority } = todoSlice.actions;
export default todoSlice.reducer;