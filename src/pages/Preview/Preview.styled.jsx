import styled from "styled-components";

export const PreviewContainer = styled.div`
  padding-top: 7rem;
  padding-bottom: 3rem;
  display: flex;
  flex-flow: column;
  gap: 3rem;
  min-height: 60vh;
  width: 100%;
  overflow: hidden;
`;

export const PreviewContent = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const PreviewImageContainer = styled.div`
  flex: 1;
  min-width: 230px;
  max-height: 500px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #f5f5f5;
`;

export const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const PreviewDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  height: 500px;
  flex-flow: column;
  gap: 1rem;
`;

export const ProductName = styled.h3`
  font-size: 28px;
  line-height: 28px;
  font-weight: 400;
`;

export const ProductInfo = styled.h4`
  font-size: 18px;
  font-weight: 400;
`;

export const AddtoCartContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const AddtoCartButton = styled.button`
  background-color: black;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 1rem 1.25rem;
  width: max-content;
  height: max-content;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(0.95);
  }
`;

export const IncrementContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  gap: 1rem;
  border: 0.5px solid #c5c5c5;
  height: max-content;
  width: max-content;
`;

export const IncrementButton = styled.button`
  width: max-content;
  height: inherit;
  border: none;
  padding: 1rem 1.25rem;
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const PreviewDescription = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-flow: column;
  gap: 1.75rem;
`;

export const DescriptionList = styled.ul`
  display: flex;
  padding-left: 1rem;
  flex-flow: column;
  gap: 1rem;
`;
