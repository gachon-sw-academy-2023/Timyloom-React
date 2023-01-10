import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    };
    button{
        justify-content: center;
        cursor: pointer;
    };
    input{
        outline: none;
    }
`;

export default GlobalStyle;
