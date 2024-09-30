// src/App.tsx
import React, { useState } from 'react';
import { Task, TaskStatus } from './types';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import TaskFilter from './components/TaskFilter';

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([
        {
            id: 1727718208839,
            name: "sample Task",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            status: TaskStatus.NOT_COMPLETED,
            deadline: new Date("2024-10-04T17:43:00.000Z")
        }
    ]);
    const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);

    const addTask = (task: Task) => {
        setTasks([...tasks, task]);
        setFilteredTasks([...tasks, task]);
    };

    const toggleTaskStatus = (id: number) => {
        const updatedTasks = tasks.map(task =>
            task.id === id
                ? {
                      ...task,
                      status: task.status === TaskStatus.COMPLETED ? TaskStatus.NOT_COMPLETED : TaskStatus.COMPLETED,
                      completedDate: task.status === TaskStatus.COMPLETED ? undefined : new Date(),
                  }
                : task
        );
        setTasks(updatedTasks);
        setFilteredTasks(updatedTasks);
    };

    const deleteTask = (id: number) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
        setFilteredTasks(updatedTasks);
    };

    const filterTasks = (name: string, description: string, status: TaskStatus | '', time: string) => {
        let filtered = tasks;

        if (name) {
            filtered = filtered.filter(task => task.name.includes(name));
        }

        if (description) {
            filtered = filtered.filter(task => task.description.includes(description));
        }

        if (status) {
            filtered = filtered.filter(task => task.status === status);
        }



        setFilteredTasks(filtered);
    };

    return (
        <div className='bg-slate-50  sm:bg-slate-200  md:bg-slate-200  lg:bg-slate-200 xl:bg-slate-200  rounded-lg h-[95vh]  w-[95vw] sm:w-[96vw] md:w-[97vw] lg:w-[97vw] xl:w-[98vw] m-3 p-2'>
          <div className='flex flex-row justify-center w-[98%] m-1 text-base font-bold my-1 border rounded-xl bg-slate-500 text-white'>
            
            <h1>Todo App</h1>
          </div>
            <AddTask addTask={addTask} />
            <TaskFilter filterTasks={filterTasks} />
            <TaskList tasks={filteredTasks} toggleTaskStatus={toggleTaskStatus} deleteTask={deleteTask} />
        </div>
    );
};

export default App;
