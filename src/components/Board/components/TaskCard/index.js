import React, { useState, useEffect, useContext } from 'react';

import { DispatchContext } from '../../../../App';
import { User } from '../../../../models/UserModel';

import { TaskCardWrapper, TaskTitle, TaskAssignee } from './Styled';

export const TaskCard = ({title, id, assigneeId}) => {
    
    const [assignee, setAssignee] = useState();

    const dispatch = useContext(DispatchContext);
    
    useEffect(() => {
        const user = User.findUser(assigneeId);
        user && setAssignee(user);
    }, [assigneeId])

    return (
        <TaskCardWrapper
            onClick={() => dispatch({type: 'TASK_MODAL', payload: {show: true, type: 'show', task: id}})}
            draggable
            onDragStart={(e) => e.dataTransfer.setData('id', id)}
        >
            <TaskTitle>{title}</TaskTitle>
            <TaskAssignee>Assignee: {assignee?.firstName} {assignee?.lastName}</TaskAssignee>
            
        </TaskCardWrapper>
    )
}
