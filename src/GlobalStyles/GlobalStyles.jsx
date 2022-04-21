import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
    --primary-color:#6c6783;
    --text-color-one: #232327;
    --tertiary-color:#F5F5F5;
    --complementary-color:#BC8247;
    --secondary-color: rgb(236, 82, 82);;
    --paragraphs: 14px;
    --font-weight-paragraphs: 400;
    --headings: 24px;
    --font-weight-headings: 600;
}

*{
    margin:0;
    padding:0;
    box-sizing:border-box ;
    font-family: 'Josefin Sans', sans-serif;
    scroll-behavior: smooth;
    scroll-padding-top:6rem;
}

body{
    width: 100vw;
    background-color:#ffffff;
    scroll-behavior: smooth;
    /* overflow-x: hidden; */
    /* font-family:'Raleway', sans-serif; */
}
`;

export const Container = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const SectionHeader = styled.h3`
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  line-height: 28px;
`;

export default GlobalStyles;
