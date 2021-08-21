import React, { useState, useEffect, useContext } from 'react';

import { Task } from '../../models/TaskModel';
import { DispatchContext, StateContext } from '../../App';
import { users } from '../../data/users';

import {ManageTaskForm,
    ManageTaskUid,
    ManageTaskTitle,
    ManageTaskTitleInput,
    ManageTaskDescription,
    ManageTaskDescriptionArea,
    ManageTaskDescriptionAreaLabel,
    DropdownBox,
    DropdownLabel,
    Dropdown,
    ManageTaskEdit} from './Styled';
import { Btn } from '../../Styled';

export const ManageTask = () => {

    const [actionType, setActionType] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [status, setStatus] = useState();
    const [user, setUser] = useState();
    
    const dispatch = useContext(DispatchContext)
    const { manageTaskType, task } = useContext(StateContext);
    
    
    useEffect(() => {
        if(manageTaskType) {
            setActionType(manageTaskType);
        }
    }, [manageTaskType])

    useEffect(() => {
        if(actionType === 'show') {
            const result = Task.findTask(task);
            setTitle(result?.title);
            setDescription(result?.description);
            setStatus(result?.status);
            setUser(result?.user);
        }
     
    }, [actionType])

    const renderTitle = () => {
        if(actionType) {
            if(actionType === 'show') {
                return <ManageTaskTitle>{title}</ManageTaskTitle>
            } else {
                return <ManageTaskTitleInput
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            }
        }
    }

    const renderDescription = () => {
        if(actionType) {
            if(actionType === 'show') {
                return <ManageTaskDescription>{description}</ManageTaskDescription>
            } else {
                return <>
                    <ManageTaskDescriptionAreaLabel>Description:</ManageTaskDescriptionAreaLabel>
                    <ManageTaskDescriptionArea 
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />     
                </>
            }
        }
    }

    const renderUsers = () => {
        if(users && Array.isArray(users) && users.length > 0) {
            return users.map(userRecord => {
                return <option 
                            key={userRecord.id} 
                            value={userRecord.id}
                            // selected={userRecord.id === user}
                        >
                            {userRecord.firstName} {userRecord.lastName}
                        </option>
                    
            })
        }
    }

    const taskAction = (e) => {
        e.preventDefault();
        if(title &&
            description &&
            status && user) {
                if(actionType === 'create') {
                    Task.createTask(title, description, status, user)
                } else {
                    Task.editTask(task ,title, description, status, user)
                }
                dispatch({type: 'TASK_MODAL', payload: {show: false}})
            }
    }
    return (
        <ManageTaskForm
            onSubmit={(e) => taskAction(e)}
        >
            <ManageTaskUid>
                {
                    actionType !== 'create' ? 
                    `Task ${task}` : 
                    'Create new task'
                }
            </ManageTaskUid>
            {actionType === 'show' && 
                <ManageTaskEdit>
                    <span
                        onClick={() => setActionType('edit')}
                    >
                        Edit task
                    </span>
                </ManageTaskEdit>
            }
            {renderTitle()}
            {renderDescription()}
            <DropdownBox>
                <DropdownLabel>Status:</DropdownLabel>
                <Dropdown
                    value={status || 'select'}
                    onChange={(e) => setStatus(e.target.value)}
                    name='status'
                    disabled={actionType === 'show'}
                >
                    <option value='select' disabled>Select status</option>
                    <option value='todo'>To-do</option>
                    <option value='in_progress'>In progress</option>
                    <option value='done'>Done</option>
                </Dropdown>
            </DropdownBox>
            <DropdownBox>
                <DropdownLabel>User:</DropdownLabel>
                <Dropdown
                    value={user || 'select'}
                    onChange={(e) => setUser(e.target.value)}
                    name='users'
                    disabled={actionType === 'show'}
                >
                    <option value='select' disabled>Select user</option>
                    {renderUsers()}
                </Dropdown>
            </DropdownBox>
            {(actionType && actionType !== 'show') && 
                <Btn 
                    btnMargin='25px 0 0 auto' 
                    type='submit'
                    disabled={!title || !description || !status || !user}
                >
                    {actionType === 'create' ? 'Create' : 'Edit'}
                </Btn>}
        </ManageTaskForm>
    )
}
