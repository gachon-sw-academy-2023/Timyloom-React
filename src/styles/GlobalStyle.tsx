import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    };
    button{
        display: flex;
        justify-content: center;
        cursor: pointer;
    };
    input{
        display: flex;
        outline: none;
    }
`;

export default GlobalStyle;
