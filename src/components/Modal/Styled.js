import styled from 'styled-components';

export const ModalWrapper = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
`

export const ModalBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
`

export const ModalWindow = styled.div`
    background-color: #fff;
    border-radius: 3px;
    padding: 15px 20px;
    margin: 10px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
`