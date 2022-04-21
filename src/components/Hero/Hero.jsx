import React, { useEffect, useRef, useState } from "react";
import {
  HeroContainer,
  HeroImageContainer,
  HeroImage,
  customStyles,
} from "./Hero.styled";
import HeroImg from "../../assets/Images/Headphones/headphone19.png";

const Hero = () => {
  const [animate, setAnimate] = useState(false);
  const heroItem = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries[0].isIntersecting ? setAnimate(!animate) : setAnimate(animate);
      },
      { threshold: 0.5 }
    );

    observer.observe(heroItem.current);
  }, []);

  return (
    <HeroContainer>
      <HeroImageContainer ref={heroItem} style={!animate ? null : customStyles}>
        <HeroImage src={HeroImg} />
      </HeroImageContainer>
    </HeroContainer>
  );
};

export default Hero;
