// src/components/TaskItem.tsx
import React from 'react';
import { Task, TaskStatus } from '../types';

interface TaskItemProps {
    task: Task;
    toggleTaskStatus: (id: number) => void;
    deleteTask: (id: number) => void;
}

function calculateDaysLeft(givenDate: Date): number {
    const currentDate = new Date();
    const timeDifference = givenDate.getTime() - currentDate.getTime();
    
    // if (timeDifference <= 0) {
    //     return 'Time is up';
    // }

    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return(daysLeft)
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTaskStatus, deleteTask }) => {


    return (
        <div className="flex flex-col items-start p-1 pr-2 py-1 bg-gray-50 rounded-lg mb-2 shadow-md h-36 sm:h-36 md:h-36 lg:h-24 xl:h-24 border border-b-0 border-slate-300 ">
            <div className='flex flex-row w-full items-center justify-start mb-1 h-fit '>
            <h2 className="text-base font-bold px-1 my-1 mx-2 text-slate-800 w-fit">{task.name}</h2>
            {task.status == TaskStatus.COMPLETED ? "" : calculateDaysLeft(task.deadline) >= 0 ? <div className='flex flex-row w-fit text-white text-xs rounded-lg bg-green-400 px-2'> {calculateDaysLeft(task.deadline)} days left</div> :  <div className='flex flex-row text-xs text-white rounded-lg bg-red-400 w-fit px-2'>delayed by {calculateDaysLeft(task.deadline) * -1} days</div>}
            </div>
            {/* <div className='flex flex-row w-full justify-between h-fit'> */}
            <div className='flex flex-row w-full justify-between items-center flex-wrap h-9'>
                <p className=" text-base text-start px-2 border rounded-sm bg-slate-100 border-slate-200 w-[90%] sm:w-[75%] md:w-[75%] lg:w-[75%] xl:w-[85%] h-14 overflow-y-auto sm:overflow-y-auto md:overflow-x-auto lg:overflow-x-auto xl:overflow-x-auto h-max-[200px] text-gray-600 text-wrap sm:text-nowrap md:text-nowrap lg:text-nowrap xl:text-nowrap ml-2">{task.description}</p>
                {/* <p className="text-sm">Status: {task.status}</p> */}
                <div className="flex space-x-2 p-2">
                <button
                    className={`px-2 py-1  text-white  text-sm text-center rounded-xl h-7 ${task.status === TaskStatus.COMPLETED ? "bg-green-500": "bg-red-500"} `}
                    onClick={() => toggleTaskStatus(task.id)}
                >
                    {task.status === TaskStatus.COMPLETED ? 'completed' : 'Incomplete'}
                </button>
                <button
                    className="px-2 py-1 bg-slate-950 text-white text-sm text-center rounded-xl h-7 "
                    onClick={() => deleteTask(task.id)}
                >
                    Delete
                </button>
            {/* </div> */}
            </div>
                {/* <p className="text-sm">Time left: {calculateTimeLeft(task.deadline)}</p> */}
            
            </div>
        </div>
    );
};

export default TaskItem;
