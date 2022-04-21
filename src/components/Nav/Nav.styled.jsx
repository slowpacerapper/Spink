import styled from "styled-components";
import { CgShoppingBag } from "react-icons/cg";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaHamburger } from "react-icons/fa";


export const NavContainer = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  align-content: center;
  z-index: 100;
  background-color: #f5f5f5;
`;

export const NavContents = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

export const Logo = styled.a`
  color: var(--text-color-one);
  font-size: 24px;
  flex: 0.5;
  font-weight: 500;
  text-decoration: none;
  z-index: 110;
`;

export const NavLinksContainer = styled.ul`
  display: flex;
  flex: 1;
  list-style-type: none;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  transition: all 0.4s ease-in-out;
  @media (max-width: 768px) {
    position: absolute;
    left: 50%;
    top: -800%;
    gap: 2.5rem;
    padding: 4rem;
    width: 100%;
    background-color: #fff;
    z-index: 100;
    transform: translateX(-50%);
    flex-flow: column;
  } ;
`;

export const CartSection = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 0.5;
  gap: 1rem;
`;

export const NavLinks = styled.a`
  color: var(--primary-color);
  font-size: 16px;
  font-weight: 300;
  text-decoration: none;
  padding: 0.5rem 1.25rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: all 0.3s linear;
  &:hover {
    color: #f5f5f5;
    background-color: black;
  }
`;

export const ShoppingBag = styled(CgShoppingBag)`
  transform: translateY(-10%);
`;
export const MenuIconOne = styled(MdOutlineRestaurantMenu)`
  font-size: 16px;
  position: absolute;
  transition: all 0.5s ease-in-out;
`;
export const MenuIconTwo = styled(FaHamburger)`
  position: absolute;
  transition: all 0.5s ease-in-out;
  font-size: 16px;
`;

export const MenuContainer = styled.button`
  display: none;
  align-items: center;
  padding: 0.5rem 1.25rem;
  z-index: 110;
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
  }
`;
