import styled from 'styled-components';

import { lightColor } from '../../../../Styled';

export const TaskCardWrapper = styled.div`
    border-radius: 10px;
    margin: 5px 0;
    padding: 10px 8px;
    background-color: ${lightColor};
    color: #fff;
    display: flex;
    flex-direction: column;
    cursor: pointer;
`
export const TaskTitle = styled.p`
    font-weight: 600;
    margin-top: 0;

`

export const TaskAssignee = styled.p`
    margin-top: 5px;
    
`
