import React, { useContext, useEffect, useState } from "react";
import {
  CartContainer,
  CartCard,
  CartCardImageContainer,
  CardImage,
  CardName,
  CardPrice,
  OtherContainers,
  CheckoutButton,
  RightArrow,
  CartContent,
  OtherContentsWhite,
  OtherContentsDark,
  Remove,
  IncrementContainer,
  IncrementButton,
  CardInfo,
  Others,
} from "./Cart.styled";
import { SectionHeader } from "../../GlobalStyles/GlobalStyles";
import { Context, ACTIONS } from "../../ReducerContext/ReducerContext";

const Cart = () => {
  const [dispatch, state] = useContext(Context);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState(0);

  const handleCheckout = () => {
    alert("Thank you for choosing Spink!");
  };

  useEffect(() => {
    const total = state
      .map((item) => item.price * item.qty)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    const shippingFee = state
      .map((item) => item.price * item.qty * 0.15)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    setSubtotal(total);
    setShipping(shippingFee.toFixed(2));
    setTotal(total + shippingFee);
  }, [state]);

  return (
    <CartContainer>
      <SectionHeader>Cart</SectionHeader>
      <CartContent>
        <CartCard>
          <div className="item__info">
            {state.length === 0 ? (
              <p>Your Shopping Cart is Empty!</p>
            ) : (
              state.map((item) => {
                return (
                  <CardInfo key={item.id}>
                    <CartCardImageContainer>
                      <CardImage src={item.image} />
                    </CartCardImageContainer>
                    <Others>
                      <CardName>{item.name}</CardName>
                      <CardPrice>${item.price}</CardPrice>
                      <Remove
                        onClick={() =>
                          dispatch({
                            type: ACTIONS.REMOVE_FROM_CART,
                            payload: item.id,
                          })
                        }
                      />
                    </Others>
                    <IncrementContainer>
                      <IncrementButton
                        onClick={() =>
                          dispatch({
                            type: ACTIONS.DECREMENT,
                            payload: item.id,
                          })
                        }
                      >
                        -
                      </IncrementButton>
                      <span>{item.qty}</span>
                      <IncrementButton
                        onClick={() =>
                          dispatch({
                            type: ACTIONS.INCREMENT,
                            payload: item.id,
                          })
                        }
                      >
                        +
                      </IncrementButton>
                    </IncrementContainer>
                  </CardInfo>
                );
              })
            )}
          </div>
          <OtherContainers>
            <OtherContentsDark>Subtotal</OtherContentsDark>
            <OtherContentsWhite>${subtotal} </OtherContentsWhite>
          </OtherContainers>
          <OtherContainers>
            <OtherContentsDark>Discount</OtherContentsDark>
            <OtherContentsWhite>$0</OtherContentsWhite>
          </OtherContainers>
          <OtherContainers>
            <OtherContentsDark>Shipping</OtherContentsDark>
            <OtherContentsWhite>${shipping}</OtherContentsWhite>
          </OtherContainers>
          <OtherContainers>
            <SectionHeader style={{ color: "white", fontSize: "24px" }}>
              Total
            </SectionHeader>
            <SectionHeader style={{ color: "white", fontSize: "24px" }}>
              ${total.toFixed(2)}
            </SectionHeader>
          </OtherContainers>
          <CheckoutButton onClick={handleCheckout}>
            Checkout <RightArrow />
          </CheckoutButton>
        </CartCard>
      </CartContent>
    </CartContainer>
  );
};

export default Cart;
