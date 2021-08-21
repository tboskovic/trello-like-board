import React, { useContext } from 'react';

import { DispatchContext } from '../../App';

import { ModalWrapper, ModalWindow, ModalBackground } from './Styled';

export const Modal = ({children}) => {
    
    const dispatch = useContext(DispatchContext);
    
    return (
        <ModalWrapper>
            <ModalBackground
                onClick={() => dispatch({type: 'TASK_MODAL', payload: {show: false}})}
            />
            <ModalWindow>
                {children}
            </ModalWindow>
        </ModalWrapper>
    )
}
