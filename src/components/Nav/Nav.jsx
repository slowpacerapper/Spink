import React, { useState, useContext } from "react";
import {
  NavContainer,
  Logo,
  NavLinksContainer,
  NavLinks,
  ShoppingBag,
  MenuIconOne,
  MenuIconTwo,
  NavContents,
  MenuContainer,
  CartSection,
} from "./Nav.styled";
import { Container } from "../../GlobalStyles/GlobalStyles";
import { Context } from "../../ReducerContext/ReducerContext";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const [dispatch, state] = useContext(Context);

  return (
    <NavContainer>
      <Container>
        <NavContents>
          <Logo href="/">Spink</Logo>
          <NavLinksContainer style={!menu ? null : { top: "-1rem" }}>
            <NavLinks href="/">Home</NavLinks>
            <NavLinks href="/Gadgets">Gadgets</NavLinks>
            <NavLinks href="#about">About</NavLinks>
            <NavLinks href="#contact">Contact</NavLinks>
          </NavLinksContainer>
          <CartSection>
            <NavLinks href="/Cart">
              <ShoppingBag />
              Cart{" "}
              <h3
                style={{
                  fontWeight: "bolder",
                  fontSize: ".8rem",
                  color: "white",
                  backgroundColor: "black",
                  borderRadius: "50%",
                  padding: "0.5rem",
                  height: "1.2rem",
                  width: "1.2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {state.length}
              </h3>
            </NavLinks>
          </CartSection>
          <MenuContainer>
            {!menu ? (
              <MenuIconTwo
                onClick={() => {
                  setMenu(!menu);
                }}
              />
            ) : (
              <MenuIconOne
                onClick={() => {
                  setMenu(!menu);
                }}
              />
            )}
          </MenuContainer>
        </NavContents>
      </Container>
    </NavContainer>
  );
};

export default Nav;
