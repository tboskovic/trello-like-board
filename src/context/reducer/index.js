export const initialState = {
    showModal: false,
    manageTaskType: null,
    task: null
}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'TASK_MODAL':
            return {
                ...state,
                showModal: action.payload.show,
                manageTaskType: action.payload.type,
                task: action.payload.task
            }
        default: 
            return state;
    }
}