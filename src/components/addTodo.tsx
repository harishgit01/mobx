// AddTodo.tsx
import React, { useState } from 'react';
import todoStore from '@/stores/Todo';

const AddTodo: React.FC = () => {
    const [text, setText] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim() !== '') {
            todoStore.addTodo(text.trim());
            setText('');
        }
    };

    return (
        <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Add Todo</h2>
            <form onSubmit={handleSubmit} className="flex">
                <input
                    type="text"
                    value={text}
                    onChange={handleChange}
                    className="rounded-l py-2 px-4 w-full text-b text-black"
                    placeholder="Enter todo..."
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddTodo;
