// src/components/TaskList.tsx
import React, { useEffect } from 'react';
import { Task } from '../types';
import TaskItem from './TaskItem';

interface TaskListProps {
    tasks: Task[];
    toggleTaskStatus: (id: number) => void;
    deleteTask: (id: number) => void;
}


const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTaskStatus, deleteTask }) => {
    // console.log(tasks)
    return (
        <div className="mt-4 mx-4 h-[40vh]  overflow-y-auto">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    toggleTaskStatus={toggleTaskStatus}
                    deleteTask={deleteTask}
                />
            ))}
        </div>
    );
};

export default TaskList;
