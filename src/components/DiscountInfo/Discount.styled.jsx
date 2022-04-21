import styled from "styled-components";

export const DiscountContainer = styled.div`
  width: 100%;
  gap: 1.25rem;
  margin: 3rem 0;
  margin-top: 1rem;
  padding: 1rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

export const DiscountSubHeading = styled.h4`
  font-size: 18px;
  line-height: 24px;
  font-weight: 300;
  text-align: center;
`;

export const NewsLetterForm = styled.form`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-flow: column;
  width: 100%;
`;

export const Newletter = styled.input`
  padding-left: 2rem;
  width: 100%;
  height: 2.5rem;
  border: 0.5px solid #c5c5c5;
  outline: none;
  border-radius: 5px;
  font-family: "Josefin Sans", sans-serif;
  &::placeholder {
    font-weight: 400;
  }
`;

export const NewsLetterButton = styled.button`
  border: 0.5px solid #c5c5c5;
  background-color: transparent;
  font-family: "Josefin Sans", sans-serif;
  border-radius: 5px;
  padding: 0.5rem 1.25rem;
  cursor: pointer;
  color: black;
  &:hover {
    background-color: #f5f5f5;
  }
`;
