import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    font-weight: 900;
    font-display: swap;
    src: url('/font/Pretendard-Black.otf') format('opentype');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    font-display: swap;
    src: url('/font/Pretendard-ExtraBold.otf') format('opentype');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-display: swap;
    src: url('/font/Pretendard-Bold.otf') format('opentype');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-display: swap;
    src: url('/font/Pretendard-SemiBold.otf') format('opentype');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-display: swap;
    src: url('/font/Pretendard-Medium.otf') format('opentype');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-display: swap;
    src: url('/font/Pretendard-Regular.otf') format('opentype');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    font-display: swap;
    src: url('/font/Pretendard-Light.otf') format('opentype');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 200;
    font-display: swap;
    src: url('/font/Pretendard-ExtraLight.otf') format('opentype');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 100;
    font-display: swap;
    src: url('/font/Pretendard-Thin.otf') format('opentype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Pretendard';
    background: #fafafa;
  }

  select,
  input,
  button,
  textarea {
    border: 0;
    outline: 0 !important;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;

export const palette = {
  White_Text_Primary: '#1f1f1f',
  White_Text_Sencondary: '#3e3d3f',
  White_Unselected_Primary: '#8e8e8e',
  White_Unselected_Sencondary: '#e9e9e9',
  Point: '#ff5959',
  Success: '#4b79ef',
  BLACK: '#000000',
  WHITE: '#ffffff',
};
