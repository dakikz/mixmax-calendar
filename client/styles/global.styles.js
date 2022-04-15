import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  /* CSS Reset by Josh Comeau: https://www.joshwcomeau.com/css/custom-css-reset/ */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    font-size: 16px;
    font-family: apple-system,BlinkMacSystemFont,"Roboto","Helvetica Neue","Trebuchet MS","Segoe",Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    &:before {
    z-index: 0;
    bottom: 20%;
    right: calc(50% - 550px);
    content: "";
    position: absolute;
    width: 500px;
    height: 260px;
    background: rgb(215, 247, 235);
    background: -moz-linear-gradient(
      180deg,
      rgba(215, 247, 235, 1) 0%,
      rgba(215, 247, 235, 0) 100%
    );
    background: -webkit-linear-gradient(
      180deg,
      rgba(215, 247, 235, 1) 0%,
      rgba(215, 247, 235, 0) 100%
    );
    background: linear-gradient(
      180deg,
      rgba(215, 247, 235, 1) 0%,
      rgba(215, 247, 235, 0) 100%
    );
  }
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #app {
    isolation: isolate;
  }
`;
