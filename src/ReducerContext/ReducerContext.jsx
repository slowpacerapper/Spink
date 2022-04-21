import React, { useReducer, useState } from "react";
import { createContext } from "react";

export const Context = createContext();

export const ACTIONS = {
  ADD_TO_CART: "addToCart",
  REMOVE_FROM_CART: "removeFromCart",
  REFRESH: "refresh",
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const ReducerContext = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.ADD_TO_CART:
        const product = state.find((x) => x.id === action.payload.id);
        if (product) {
          return state;
        }
        return [
          ...state,
          {
            id: action.payload.id,
            name: action.payload.name,
            image: action.payload.image,
            description: action.payload.description,
            price: action.payload.price,
            brand: action.payload.brand,
            type: action.payload.type,
            qty: action.payload.qty,
          },
        ];

      case ACTIONS.INCREMENT:
        return state.map((x) => {
          if (x.id === action.payload) {
            return {
              ...x,
              qty: x.qty + 1,
            };
          }
          return x;
        });

      case ACTIONS.DECREMENT:
        return state.map((x) => {
          if (x.id === action.payload) {
            if (x.qty === 1) {
              return { ...x, qty: (x.qty = 1) };
            } else {
              return {
                ...x,
                qty: x.qty - 1,
              };
            }
          }
          return x;
        });

      case ACTIONS.REMOVE_FROM_CART:
        return state.filter((product) => product.id !== action.payload);

      case ACTIONS.REFRESH:
        return action.payload;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, []);

  return (
    <Context.Provider value={[dispatch, state]}>
      {props.children}
    </Context.Provider>
  );
};

export default ReducerContext;
