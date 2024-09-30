// src/types.ts
export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

// src/types.ts
export enum TaskStatus {
    COMPLETED = 'COMPLETED',
    NOT_COMPLETED = 'NOT_COMPLETED',
    DELAYED = 'DELAYED'
}

export interface Task {
        id: number;
        name: string;
        description: string;
        status: TaskStatus;
        deadline: Date;
        completedDate?: Date;
}
