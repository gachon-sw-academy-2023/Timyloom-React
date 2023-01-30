import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto';
    };
    button{
        justify-content: center;
        cursor: pointer;
    };
`;

export default GlobalStyle;
