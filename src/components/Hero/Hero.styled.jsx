import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  background-color: var(--tertiary-color);
  padding-top: 5rem;
  max-height: 60vh;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
`;

export const HeroImageContainer = styled.div`
  margin: 0 auto;
  opacity: 0;
  width: 0%;
  height: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 2s ease-in-out;
  @media (max-width: 768px) {
    height: 100%;
  } ;
`;

export const customStyles = {
  opacity: "1",
  width: "70%",
  height: "70%",
};

export const HeroImage = styled.img`
  min-width: 300px;
  max-width: 400px;
  object-fit: cover;
  z-index: 10;
  transform: rotate(40deg);
`;
