import React, { useEffect, useState, useContext, useRef } from "react";
import {
  Card,
  CardDetails,
  ItemName,
  ItemPrice,
  ItemCardImageContainer,
  ItemImage,
  ExtraInfoContainer,
  AddtoCart,
  PreviewBtn,
  Mark,
  AddtoCartLink,
  customStyles,
} from "./ItemCard.styled";
import { Context, ACTIONS } from "../../ReducerContext/ReducerContext";
import { PreviewContext, PACTIONS } from "../../ReducerContext/PreviewReducer";

const ItemCard = ({
  id,
  name,
  image,
  description,
  brand,
  type,
  price,
  qty,
}) => {
  const [click, setClick] = useState(false);
  const [dispatch] = useContext(Context);
  const [dispatchP, pstate] = useContext(PreviewContext);

  useEffect(() => {
    localStorage.setItem("previewData", JSON.stringify(pstate));
  }, [pstate]);

  const clickHandler = () => {
    setClick(!click);
    setTimeout(() => {
      setClick(click);
    }, 1800);
  };

  return (
    <Card>
      <ItemCardImageContainer>
        <ItemImage src={image} />
        <ExtraInfoContainer>
          <span id="line"></span>
          <span id="cart">
            {!click ? (
              <AddtoCart
                onClick={() => {
                  clickHandler();
                  dispatch({
                    type: ACTIONS.ADD_TO_CART,
                    payload: {
                      id,
                      name,
                      image,
                      description,
                      brand,
                      type,
                      price,
                      qty,
                    },
                  });
                }}
              />
            ) : (
              <Mark />
            )}
          </span>
          <span id="preview">
            <AddtoCartLink href="/Preview">
              <PreviewBtn
                onClick={() =>
                  dispatchP({
                    type: PACTIONS.PREVIEW,
                    payload: {
                      id,
                      name,
                      image,
                      description,
                      brand,
                      type,
                      price,
                      qty,
                    },
                  })
                }
              />
            </AddtoCartLink>
          </span>
        </ExtraInfoContainer>
      </ItemCardImageContainer>
      <CardDetails>
        <ItemName>{name}</ItemName>
        <ItemPrice>${price}</ItemPrice>
      </CardDetails>
    </Card>
  );
};

export default ItemCard;
