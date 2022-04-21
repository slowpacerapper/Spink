import React, { useContext, useEffect, useRef, useState } from "react";
import {
  GadgetsContainer,
  GadgetsHero,
  OurCollections,
  Typing,
  customStyles,
} from "./Gadgets.styled";
import { SectionHeader, Container } from "../../GlobalStyles/GlobalStyles";
import SearchBar from "../../components/SearchBar/SearchBar";
import { productDb } from "../../Database/Database";
import {
  searchHandler,
  display,
  products,
} from "../../GeneralFunctions/Generalfunctions";
import DiscountInfo from "../../components/DiscountInfo/DiscountInfo";
import Categories from "../../components/Categories/Categories";

const Gadgets = ({ search, setSearch }) => {
  const text = useRef();
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
    const texts = ["Peace", "Confidence", "Admiration", "Sound"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

    function typeHandler() {
      if (count === texts.length) {
        count = 0;
      }

      currentText = texts[count];
      letter = currentText.slice(0, ++index);
      text.current.textContent = letter;

      if (letter.length === currentText.length) {
        count++;
        index = 0;
      }
    }

    setInterval(typeHandler, 400);
  }, []);

  display(productDb);
  searchHandler(search, productDb);

  return (
    <GadgetsContainer>
      <GadgetsHero>
        <Container>
          <SectionHeader style={{ fontSize: "48px", lineHeight: "58px" }}>
            Feel Authentic <br /> <Typing ref={text}></Typing>
          </SectionHeader>
        </Container>
      </GadgetsHero>

      <Categories search={search} setSearch={setSearch} />

      <Container>
        <SearchBar search={search} setSearch={setSearch} />
      </Container>
      <Container>
        <SectionHeader>Our Collections</SectionHeader>
      </Container>
      <Container>
        <OurCollections ref={item} style={!anim ? null : customStyles}>
          {products}
        </OurCollections>
      </Container>
      <Container>
        <DiscountInfo />
      </Container>
    </GadgetsContainer>
  );
};

export default Gadgets;
