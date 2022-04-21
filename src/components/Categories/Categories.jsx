import React from "react";
import {
  CategoriesContainer,
  CategoriesContent,
  CategoriesLink,
  CategoriesImage,
} from "./Categories.styled";
import { Container, SectionHeader } from "../../GlobalStyles/GlobalStyles";
import Headphone1 from "../../assets/Images/Headphones/headphone1.png";
import Speaker1 from "../../assets/Images/Speakers/speaker1.png";
import Earbud1 from "../../assets/Images/Earbuds/earbud1.png";

const Categories = ({ search, setSearch }) => {
  const categoryHandler = (value) => {
    setSearch(value);
  };
  return (
    <CategoriesContainer>
      <SectionHeader>Categories</SectionHeader>
      <Container>
        <CategoriesContent>
          <CategoriesLink
            href="#headphone"
            onClick={() => categoryHandler("headphone")}
          >
            <CategoriesImage src={Headphone1} />
          </CategoriesLink>
          <CategoriesLink
            href="#speaker"
            onClick={() => categoryHandler("speaker")}
          >
            <CategoriesImage src={Speaker1} />
          </CategoriesLink>
          <CategoriesLink
            href="#earbud"
            onClick={() => categoryHandler("earbud")}
          >
            <CategoriesImage src={Earbud1} />
          </CategoriesLink>
        </CategoriesContent>
      </Container>
    </CategoriesContainer>
  );
};

export default Categories;
