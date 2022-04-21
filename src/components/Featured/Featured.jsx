import React, { useEffect, useState, useRef } from "react";
import { SectionHeader, Container } from "../../GlobalStyles/GlobalStyles";
import {
  FeaturedContainer,
  FeaturedContent,
  customStyles,
} from "./Featured.styled";
import { productDb } from "../../Database/Database";
import {
  display,
  searchHandler,
  products,
} from "../../GeneralFunctions/Generalfunctions";

const Featured = ({ search }) => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  const [anim, setAnim] = useState(false);
  const item = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries[0].isIntersecting ? setAnim(!anim) : setAnim(!anim);
      },
      { threshold: 1 }
    );

    observer.observe(item.current);
  }, []);

  useEffect(() => {
    let speakersList = [];
    let headphonesList = [];
    let earbudsList = [];
    let speakerDb = productDb.filter((item) => item.type === "speaker");
    let headphoneDb = productDb.filter((item) => item.type === "headphone");
    let earbudDb = productDb.filter((item) => item.type === "earbud");
    for (let i = 0; i < 4; i++) {
      speakersList.push(speakerDb[i]);
      headphonesList.push(headphoneDb[i]);
      earbudsList.push(earbudDb[i]);
    }
    setFeaturedProducts([...speakersList, ...headphonesList, ...earbudsList]);
  }, []);

  display(featuredProducts);
  searchHandler(search, featuredProducts);

  return (
    <FeaturedContainer>
      <SectionHeader>Featured Products</SectionHeader>
      <Container>
        <FeaturedContent ref={item} style={!anim ? null : customStyles}>
          {products}
        </FeaturedContent>
      </Container>
    </FeaturedContainer>
  );
};

export default Featured;
