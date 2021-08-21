import React from 'react';

import { tasks } from '../../data/tasks';
import { Task } from '../../models/TaskModel';

import { TaskCard } from './components/TaskCard';

import { BoardWrapper, BoardHeader } from './Styled';

export const Board = ({type, update}) => {
    

    const renderTasks = () => {
        if(tasks && Array.isArray(tasks) && tasks.length > 0) {
            return tasks.map(task => {
                if(task.status === type) {
                    return <TaskCard 
                        key={`task_${task.id}`}
                        title={task.title}
                        assigneeId={task.user}
                        id={task.id}
                    />
                }
            })
        }
    }
    
    const changeStatusDragAndDrop = (e) => {
        const id = e.dataTransfer.getData('id');
        Task.changeStatus(id, type, update);
    }

    return (
        <BoardWrapper
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => changeStatusDragAndDrop(e)}
        >
            <BoardHeader>{type.replace(/_/g, ' ')}</BoardHeader>
            {renderTasks()}
        </BoardWrapper>
    )
}
