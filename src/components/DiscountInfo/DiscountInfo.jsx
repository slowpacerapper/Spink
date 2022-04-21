import React from "react";
import { Container, SectionHeader } from "../../GlobalStyles/GlobalStyles";
import {
  DiscountContainer,
  DiscountSubHeading,
  NewsLetterForm,
  Newletter,
  NewsLetterButton,
} from "./Discount.styled";

const DiscountInfo = () => {
  return (
    <DiscountContainer>
      <SectionHeader>Get Discount Information</SectionHeader>
      <DiscountSubHeading>
        Subscribe to the Spink mailing list to recieve updates on new arrivals,
        special offers and other discount information
      </DiscountSubHeading>
      <Container>
        <NewsLetterForm>
          <Newletter
            type="email"
            id="newsletter"
            placeholder="Subscribe"
            name="newsletter"
          />
          <NewsLetterButton>Subscribe</NewsLetterButton>
        </NewsLetterForm>
      </Container>
    </DiscountContainer>
  );
};

export default DiscountInfo;
