import React from "react";
import { AboutText } from "./About.styled";
import { Container, SectionHeader } from "../../GlobalStyles/GlobalStyles";

const About = () => {
  return (
    <Container style={{ paddingTop: "3rem" }}>
      <SectionHeader style={{ marginBottom: "1.75rem" }} id="about">
        About Us
      </SectionHeader>
      <AboutText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, iure
        voluptatem quod, aperiam modi vitae voluptatum laborum veritatis, eos
        aspernatur illo sint adipisci aliquam possimus. Velit, mollitia. Ipsum,
        modi consequatur! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Similique, iure voluptatem quod, aperiam modi vitae voluptatum
        laborum veritatis, eos aspernatur illo sint adipisci aliquam possimus.
        Velit, mollitia. Ipsum, modi consequatur! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Similique, iure voluptatem quod, aperiam
        modi vitae voluptatum laborum veritatis, eos aspernatur illo sint
        adipisci aliquam possimus. Velit, mollitia. Ipsum, modi consequatur!
      </AboutText>
    </Container>
  );
};

export default About;
