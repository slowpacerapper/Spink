import styled from "styled-components";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoBagAddOutline } from "react-icons/io5";
import { GrFormCheckmark } from "react-icons/gr";

export const Card = styled.div`
  display: flex;
  min-width: 300px;
  max-height: 400px;
  overflow: hidden;
  flex-flow: column;
  gap: 1rem;
  transition: all 0.5s ease-in-out;
`;

export const CardDetails = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: max-content;
  gap: 0.5rem;
  flex: 1;
`;

export const ItemCardImageContainer = styled.div`
  position: relative;
  display: flex;
  padding: 2rem 0;
  justify-content: center;
  align-content: center;
  background-color: #f5f5f5;
  width: 100%;
  height: 300px;
`;

export const ItemImage = styled.img`
  max-width: 280px;
  max-height: 200px;
  /* object-fit: cover; */
`;

export const ItemName = styled.h4`
  font-weight: 300;
  font-size: 16px;
  color: black;
  text-align: center;
`;

export const ItemPrice = styled.h4`
  font-weight: 500;
  font-size: 14px;
  text-align: center;
`;

export const ExtraInfoContainer = styled.div`
  position: absolute;
  width: 10rem;
  height: 2rem;
  bottom: 0.5rem;
  border-radius: 5px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f5f5f5;
  box-shadow: 0px 0px 4px #c5c5c5;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  transition: all 0.4s ease;
  #line {
    position: absolute;
    width: 1px;
    background-color: #c5c5c5;
    height: 2rem;
    top: 0;
    left: 50%;
  }
  #cart {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: #c5c5c5;
    }
  }
  #preview {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    &:hover {
      background-color: #c5c5c5;
    }
  }
`;

export const AddtoCart = styled(IoBagAddOutline)`
  font-size: 24px;
  cursor: pointer;
`;
export const PreviewBtn = styled(GiSettingsKnobs)`
  font-size: 24px;
`;
export const Mark = styled(GrFormCheckmark)`
  font-size: 24px;
`;

export const AddtoCartLink = styled.a`
  color: black;
`;
