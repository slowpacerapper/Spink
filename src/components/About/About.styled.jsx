import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  gap: 2rem;
  padding: 4rem 0;
`;

export const AboutHero = styled.div`
  position: relative;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  overflow: hidden;
`;

export const AbouHeroImage = styled.img`
  width: 100%;
  object-fit: cover;
  position: absolute;
  opacity: 0.05;
`;

export const AboutText = styled.p`
  font-size: 18px;
  /* border-top: 0.5px solid #c5c5c5;
  border-bottom: 0.5px solid #c5c5c5; */
  padding: 1rem;
  border-radius: 5px;
  font-weight: 300;
  line-height: 24px;
  color: #333333;
  a {
    color: goldenrod;
    font-weight: 400;
    font-size: 18px;
  }
`;
