import styled from "styled-components";

export const GadgetsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 3rem;
  flex-flow: column;
`;

export const GadgetsHero = styled.div`
  background-color: #f5f5f5;
  padding-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 50vh;
`;

export const OurCollections = styled.div`
  transition: all 1s ease-in-out;
  transform: translateY(10%);
  opacity: 0;
  width: 0%;
  display: grid;
  gap: 2rem;
  align-content: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
`;

export const Typing = styled.span`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 2px;
    height: 100%;
    background-color: black;
    animation: blink 0.5s infinite ease;

    @keyframes blink {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

export const customStyles = {
  opacity: "1",
  width: "100%",
  transform: "translateY(0%)",
};
