// src/components/AddTask.tsx
import React, { useState } from 'react';
import { TaskStatus, Task } from '../types';

interface AddTaskProps {
    addTask: (task: Task) => void;
}

const   AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim() && description.trim() && deadline) {
            const newTask: Task = {
                id: Date.now(),
                name,
                description,
                status: TaskStatus.NOT_COMPLETED,
                deadline: new Date(deadline),
            };
            addTask(newTask);
            setName('');
            setDescription('');
            setDeadline('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="flex flex-col space-y-2 bg-slate-200 rounded-md p-2 m-2">
                <input
                    type="text"
                    placeholder="Task Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-2 shadow bg-slate-300 rounded-lg"
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="p-2 shadow bg-slate-300 rounded-lg"
                />
                <input
                    type="datetime-local"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="p-2 shadow bg-slate-300 rounded-lg"
                />
                <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-lg">
                    Add Task
                </button>
            </div>
        </form>
    );
};

export default AddTask;
