import styled from 'styled-components';

import { darkColor } from '../../Styled';

export const BoardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 0px 5px 10px ${darkColor};
    border-radius: 10px;
    padding: 15px 20px;
    margin: 20px 10px;
    width: calc(100% - 60px);
    min-height: 200px;
    overflow-y: scroll;

    @media (min-width: 991px) {
        width: calc(100% / 3 - 60px);
        height: 80vh;
    }
`

export const BoardHeader = styled.p`
    color: ${darkColor};
    font-size: 14pt;
    font-weight: 600;
    text-transform: uppercase;

`