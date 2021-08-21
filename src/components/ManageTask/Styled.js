import styled from 'styled-components';

import { darkColor, mainColor, grayColor } from '../../Styled';

export const ManageTaskForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    max-width: 600px;
    padding: 10px;
`

export const ManageTaskUid = styled.p`
    margin: 0;
    font-size: 10pt;
    font-weight: 600;
    color: ${mainColor};
    width: 100%;

    @media (min-width: 991px) {
        width: 50%;
    }
`

export const ManageTaskTitle = styled.p`
    width: 100%;
    color: ${darkColor};
    font-weight: 600;
    font-size: 14pt;
`
export const ManageTaskTitleInput = styled.input.attrs({type: 'input', placeholder: 'Title'})`
    width: 100%;
    border: 0;
    margin: 10px 0;
    padding: 10px 0;
    border-bottom: 2px solid ${mainColor}; 
    color: ${darkColor};

    &:focus {
        outline: 0;
        border-bottom: 2px solid ${darkColor}; 
    }

    &::placeholder {
        color: ${mainColor};
        font-weight: 600;
    }

`
export const ManageTaskDescription = styled.p`
    width: 100%;
    color: ${grayColor};
    margin-top: 0;

`
export const ManageTaskDescriptionArea = styled.textarea`
    width: 100%;
    height: 100px;
    border: 1px solid ${mainColor};
    border-radius: 5px;
    margin: 2px 0 10px 0;
    position: relative;

    &:focus {
        outline: 0;
        border: 1px solid ${darkColor};  
    }


`

export const ManageTaskDescriptionAreaLabel = styled.label`
    content: 'Description:';
    color: ${mainColor};
    font-size: 11pt;
    font-weight: 600;
    margin: 0;

`
export const DropdownBox = styled.div`
    width: calc(100% - 10px);
    display: flex;
    align-items: center;
    margin: 10px 0;
    padding-right: 10px;
    color: ${grayColor};

    @media (min-width: 991px) {
        width: calc(50% - 10px);
        margin: auto;
    }
`

export const DropdownLabel = styled.label`
    margin-right: 10px;
    font-weight: 600;
    
`
export const Dropdown = styled.select`
    border: 0;
    background-color: transparent;
    border-bottom: 2px solid ${mainColor};
    padding: 5px 0;
    width: 100%;

    &:focus {
        outline: 0;
        border-bottom: 2px solid ${darkColor};
    }

    &:disabled {
        color: ${grayColor};
    }
`

export const ManageTaskEdit = styled.p`
    text-decoration: underline;
    color: ${mainColor};
    margin: 0;
    font-size: 10pt;
    width: 100%;
    text-align: right;
    
    span {
        cursor: pointer;
    }

    @media (min-width: 991px) {
        width: 50%;
    }
`