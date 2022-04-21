import React from "react";
import { Container, SectionHeader } from "../../GlobalStyles/GlobalStyles";
import {
  FooterContainer,
  FooterContent,
  FooterGridContent,
  CopyrightSocialsContainer,
  GridList,
  GridLinks,
  GridParagraph,
  Location,
  Mail,
  Phone,
  Copyright,
  Socials,
  SocialsImage,
  GitIcon,
  Linkedin,
  Facebbok,
  Instagram,
  SocialsContent,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <Container>
        <FooterContent>
          <FooterGridContent>
            <SectionHeader style={{ color: "goldenrod", textAlign: "left" }}>
              Spink
            </SectionHeader>
            <GridParagraph>
              Spink is an online gadgets store that deals in the sales of
              quality products.
            </GridParagraph>
            <GridList>
              <li>
                <Location /> Lagos Nigeria
              </li>
              <li>
                <Mail /> Slowpacerapper@gmail.com
              </li>
              <li>
                <Phone /> 08134117444
              </li>
            </GridList>
          </FooterGridContent>
          <FooterGridContent>
            <SectionHeader
              style={{ color: "#aaaaaa", textAlign: "left", fontWeight: "300" }}
            >
              Information
            </SectionHeader>
            <GridList>
              <GridLinks href="#about">About Us</GridLinks>
              <GridLinks href="#delivery">Delivery Information</GridLinks>
              <GridLinks href="#about">Privacy Policy</GridLinks>
              <GridLinks href="#about">Terms and Condition</GridLinks>
            </GridList>
          </FooterGridContent>
          <FooterGridContent>
            <SectionHeader
              style={{ color: "#aaaaaa", textAlign: "left", fontWeight: "300" }}
            >
              Customer Service
            </SectionHeader>
            <GridList>
              <GridLinks href="#shipping">Shipping Policy</GridLinks>
              <GridLinks href="#contact">Help and Contact</GridLinks>
              <GridLinks href="#returns">Returns and Refunds</GridLinks>
              <GridLinks href="#online-stores">Online Stores</GridLinks>
            </GridList>
          </FooterGridContent>
        </FooterContent>
      </Container>
      <CopyrightSocialsContainer>
        <Container>
          <SocialsContent>
            <Copyright>Copyright &copy; Spink all rights reserved</Copyright>
            <Socials>
              <SocialsImage href="#gitaddress">
                <GitIcon />
              </SocialsImage>
              <SocialsImage href="#facebook">
                <Facebbok />
              </SocialsImage>
              <SocialsImage href="#instagram">
                <Instagram />
              </SocialsImage>
              <SocialsImage href="#linkedin">
                <Linkedin />
              </SocialsImage>
            </Socials>
          </SocialsContent>
        </Container>
      </CopyrightSocialsContainer>
    </FooterContainer>
  );
};

export default Footer;
