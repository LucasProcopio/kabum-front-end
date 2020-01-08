import { createGlobalStyle } from "styled-components";
import bgImage from "../assets/bg.jpg";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700&display=swap');
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing:  border-box;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
  }
  body, input, button {
    font-size: 14px;
    font-family: "Open Sans Condensed", sans-serif;
  }
  #root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${bgImage});
    background-repeat: no-repeat;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
`;
