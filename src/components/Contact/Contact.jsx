import React, { useState } from "react";
import { useRef } from "react";
import HeroBg from "../../assets/Images/computer-part-icons-pattern-texture-repeating-seamless-monochrome-black-white-mouse-keyboard-laptop-flash-drive-headphones-111979506.jpeg";
import {
  ContactContainer,
  ContactHero,
  ContactHeroImage,
  ContactForm,
  ContactInput,
  ContactButton,
  ContactLinks,
} from "./Contact.styled";
import emailjs from "@emailjs/browser";

import {
  GitIcon,
  Linkedin,
  Facebbok,
  Instagram,
} from "../Footer/Footer.styled";
import { GrFormCheckmark } from "react-icons/gr";

import { SectionHeader, Container } from "../../GlobalStyles/GlobalStyles";

const Contact = () => {
  const form = useRef();
  const [results, setResults] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yv72tad",
        "template_gvl8zxy",
        form.current,
        "gPCVLkImp6KNbUGGh"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setResults(!results);
            setTimeout(() => {
              setResults(results);
            }, 2000);
          }
          //   console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <ContactContainer>
      <ContactHero>
        <ContactHeroImage src={HeroBg} />
        <SectionHeader style={{ fontSize: "38px", color: "goldenrod" }}>
          Contact Spink
        </SectionHeader>
      </ContactHero>
      <Container>
        <SectionHeader style={{ color: "#999999" }}>
          Have a job for us?
        </SectionHeader>
      </Container>
      <Container>
        <ContactForm ref={form} onSubmit={sendEmail}>
          <ContactInput
            type="text"
            name="fullname"
            placeholder="Full name"
            id="name"
          />
          <ContactInput
            type="email"
            name="email"
            placeholder="Email Address"
            id="email"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
          <ContactButton type="submit">
            {!results ? (
              "Send"
            ) : (
              <GrFormCheckmark style={{ fontSize: "20px", fill: "green" }} />
            )}
          </ContactButton>
        </ContactForm>
      </Container>
    </ContactContainer>
  );
};

export default Contact;
