import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Slices/todo';

const TodoInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className="flex gap-2 mb-4 mt-2">
      <input
        className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo..."
      />
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
