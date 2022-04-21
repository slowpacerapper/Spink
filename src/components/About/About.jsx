import React from "react";
import {
  AboutText,
  AboutContainer,
  AboutHero,
  AbouHeroImage,
} from "./About.styled";
import HeroBg from "../../assets/Images/computer-part-icons-pattern-texture-repeating-seamless-monochrome-black-white-mouse-keyboard-laptop-flash-drive-headphones-111979506.jpeg";
import { Container, SectionHeader } from "../../GlobalStyles/GlobalStyles";

const About = () => {
  return (
    <AboutContainer>
      <AboutHero>
        <AbouHeroImage src={HeroBg} />
        <SectionHeader style={{ fontSize: "38px", color: "goldenrod" }}>
          About Spink
        </SectionHeader>
      </AboutHero>
      <Container style={{ paddingTop: "3rem" }}>
        <AboutText>
          <b>Spink </b> is an organization that specializes in building web apps
          with simple high end user interfaces. This ecommerce web app was
          inspired by some of the beautiful designs found on the dribble
          website.
        </AboutText>
        <AboutText>
          Although it was built with some custom adjustments but the theme still
          follows fifty to eighty percent of the original design on dribble.
          This web app was created with react and styled with styled components.
          Other dependencies, include, react icons, and some react hooks like
          "useReducer" for the state management.
        </AboutText>
        <AboutText>
          We are always looking forward to making complex designs easy and
          always ensuring that it is available to users across multiple
          platforms, like mobilephones, desktops and tablets.
        </AboutText>
        <AboutText>
          If you wish to collaborate with us or have a job for us you can click
          on the <a href="/Contact">Contact</a> link and drop a message. We
          respond at the fastest possible time and our feedbacks are great. We
          will be sharing more our works soon enough. Thank you for choosing
          Spink!
        </AboutText>
      </Container>
    </AboutContainer>
  );
};

export default About;
