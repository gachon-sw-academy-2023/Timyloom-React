import { createGlobalStyle } from 'styled-components';

import Gmarket_L from '@/assets/fonts/GmarketSansTTF/GmarketSansTTFLight.ttf';
import Gmarket_M from '@/assets/fonts/GmarketSansTTF/GmarketSansTTFMedium.ttf';
import Gmarket_B from '@/assets/fonts/GmarketSansTTF/GmarketSansTTFBold.ttf';

import Test_B from '@/assets/fonts/chicanos-font/CovesBold.otf';

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family:  'GmarketSansTTFMedium';
    };
    button{
        justify-content: center;
        cursor: pointer;
    };

    @font-face {
        font-family: 'Test_B';
        src: local('Test_B'), local('Test_B');
        font-style: normal;
        src: url(${Test_B}) format('opentype');
  }

  @font-face {
        font-family: 'GmarketSansTTFBold';
        src: local('GmarketSansTTFBold'), local('GmarketSansTTFBold');
        font-style: normal;
        src: url(${Gmarket_B}) format('truetype');
  }
  @font-face {
        font-family: 'GmarketSansTTFMedium';
        src: local('GmarketSansTTFMedium'), local('GmarketSansTTFMedium');
        font-style: normal;
        src: url(${Gmarket_M}) format('truetype');
  }
  @font-face {
        font-family: 'GmarketSansTTFLight';
        src: local('GmarketSansTTFLight'), local('GmarketSansTTFLight');
        font-style: normal;
        src: url(${Gmarket_L}) format('truetype');
  }
`;

export default GlobalStyle;
