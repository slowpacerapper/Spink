import styled from "styled-components";

export const CategoriesContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  gap: 2rem;
  padding: 1.5rem 0;
`;

export const CategoriesContent = styled.div`
  display: grid;
  grid-auto-flow: column;
  margin: 0 auto;
  width: 100%;
  border-top: 0.5px solid #c5c5c5;
  border-bottom: 0.5px solid #c5c5c5;
  padding: 1rem 0;
  gap: 1.5rem;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoriesLink = styled.a`
  width: 100px;
  height: 100px;
  background-color: #f5f5f5;
  border-radius: 5px;
  /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); */
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const CategoriesImage = styled.img`
  max-width: 90%;
  max-height: 90%;
`;
