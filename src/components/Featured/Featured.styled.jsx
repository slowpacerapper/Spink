import styled from "styled-components";

export const FeaturedContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
`;

export const FeaturedContent = styled.div`
  opacity: 0;
  width: 0%;
  transform: translateY(10%);
  transition: all 1s ease-in-out;
  display: grid;
  gap: 2rem;
  align-content: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
`;

export const customStyles = {
  opacity: "1",
  width: "100%",
  transform: "translateY(0%)",
};
