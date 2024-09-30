// src/components/TaskFilter.tsx
import React, { useState } from 'react';
import { TaskStatus } from '../types';

interface TaskFilterProps {
    filterTasks: (name: string, description: string, status: TaskStatus | '', time: string) => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ filterTasks }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState<TaskStatus | ''>('');
    const [time, setTime] = useState('');

    const handleFilter = () => {
        filterTasks(name, description, status, time);
    };

    return (
        <div className='flex flex-row m-2 items-center justify-between mx-4'>
        <div className='grid grid-cols-4 gap-1 p-1 justify-between h-13 w-[95%] '>
            <input
                className=' rounded-md p-1 bg-slate-300 '
                
                type="text"
                placeholder="Filter by Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className=' rounded-md p-1 bg-slate-300'
                type="text"
                placeholder="Filter by Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <select 
            className=' rounded-md p-1 bg-slate-300'
            value={status} onChange={(e) => setStatus(e.target.value as TaskStatus)}>
                <option value="">All</option>
                <option value={TaskStatus.COMPLETED}>Completed</option>
                <option value={TaskStatus.NOT_COMPLETED}>Not Completed</option>
            </select>
            <input
            className=' rounded-md p-1 bg-slate-300'
                type="datetime-local"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            />
        </div>
        <div >
            <button className='w-full rounded-lg p-1 bg-blue-700 shadow-md border-0 text-white px-2' onClick={handleFilter}>Filter</button>

        </div>
        </div>
    );
};

export default TaskFilter;
