import styled from 'styled-components'

export const mainColor = '#004d40'
export const darkColor = '#00251a'
export const lightColor = '#39796b'
export const grayColor = '#1b1b1b'

export const Btn = styled.button`
    background-color: ${mainColor};
    box-shadow: 0px 5px 10px ${mainColor};
    margin: ${props => props.btnMargin};
    font-size: 14pt;
    border-radius: 5px;
    color: #fff;
    text-align: center;
    padding: 10px 15px;
    border: none;
    cursor: pointer;

    &:disabled {
        background-color: ${grayColor};
        box-shadow: 0px 5px 10px ${grayColor};
        cursor: not-allowed;
    }

`