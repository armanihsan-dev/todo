import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo } from '../Slices/todo';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center bg-white shadow p-3 rounded-sm"
        >
          <div className="flex items-center gap-2 flex-1">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
              className="accent-indigo-600"
            />
            {editId === todo.id ? (
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={() => {
                  dispatch(editTodo({ id: todo.id, newText: editText }));
                  setEditId(null);
                }}
                className="border p-1 rounded w-full"
                autoFocus
              />
            ) : (
              <span
                onDoubleClick={() => {
                  setEditId(todo.id);
                  setEditText(todo.text);
                }}
                className={`flex-1 ${
                  todo.completed ? 'line-through text-gray-400' : ''
                }`}
              >
                {todo.text}
              </span>
            )}
          </div>
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="text-red-500 hover:text-red-600 font-medium"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
