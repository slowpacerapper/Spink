import styled from "styled-components";
import { BsArrowRightShort } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

export const CartContainer = styled.div`
  padding-top: 7rem;
  display: flex;
  width: 100%;
  min-height: 70vh;
  flex-flow: column;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid #f5f5f5;
  padding: 2rem 0;
  width: 100%;
  gap: 1rem;
  @media (max-width: 537px) {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
`;

export const CartContent = styled.div`
  padding: 4rem 2rem;
  margin: 3rem auto;
  border-radius: 5px;
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: #333333;
  min-height: 70vh;
  width: 50%;
  min-width: 40%;
  min-width: 300px;
  gap: 1.25rem;
  @media (max-width: 768px) {
    width: 80%;
    padding: 4rem 1rem;
  }
`;

export const CartCard = styled.div`
  display: flex;
  flex-flow: column;
  gap: 1.25rem;
  width: 100%;
  justify-content: center;
  .item__info {
    display: flex;
    flex-flow: column;
    width: 100%;
    margin-bottom: 5rem;
    p {
      color: white;
      line-height: 24px;
      text-align: center;
      font-size: 19px;
    }
  }
`;

export const CartCardImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  background-color: #444444;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 537px) {
    width: 50px;
    height: 50px;
  }
`;

export const CardImage = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

export const CardName = styled.h3`
  font-size: 16px;
  width: 200px;
  font-weight: 500;
  color: white;
  @media (max-width: 537px) {
    font-size: 12px;
    font-weight: 300;
  }
`;

export const CardPrice = styled.h4`
  font-size: 14px;
  font-weight: 400;
  color: white;
  @media (max-width: 537px) {
    font-size: 12px;
    font-weight: 300;
  }
`;

export const OtherContainers = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  border-bottom: 0.5px solid #f5f5f5;
  padding-bottom: 1rem;
`;

export const Others = styled.div`
  display: flex;
  flex-flow: column;
  height: 100px;
  gap: 1.5rem;
  @media (max-width: 537px) {
    height: 50px;
    width: max-content;
    max-width: 8rem !important;
    gap: 0.35rem;
    flex: 1;
  }
`;

export const OtherContentsWhite = styled.p`
  font-size: 14px;
  color: white;
  font-weight: 400;
`;

export const OtherContentsDark = styled.p`
  font-size: 14px;
  color: #c5c5c5;
  font-weight: 400;
`;

export const CheckoutButton = styled.button`
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;
  margin-top: 1.75rem;
  color: #333333;
  border-radius: 5px;
  padding: 1rem 1.25rem;
  width: max-content;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(0.95);
  }
`;

export const RightArrow = styled(BsArrowRightShort)``;
export const Remove = styled(MdOutlineDelete)`
  font-size: 18px;
  transform: translateY(-0.25rem);
  color: #f5f5f5;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(0.95);
  }
`;

export const IncrementContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  gap: 0.5rem;
  border: 0.5px solid #c5c5c5;
  height: max-content;
  width: max-content;
  @media (max-width: 537px) {
    width: 4rem !important;
  }
  span {
    color: #f5f5f5;
    font-size: 12px;
  }
`;

export const IncrementButton = styled.button`
  width: max-content;
  height: inherit;
  border: none;
  color: #f5f5f5;
  padding: 0.5rem 0.5rem;
  background-color: transparent;
  cursor: pointer;
  @media (max-width: 537px) {
    padding: 0.35rem 0.35rem;
  }
  transition: all 0.3s ease;
  &:hover {
    background-color: #f5f5f5;
    color: black;
  }
`;
