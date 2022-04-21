import React from "react";
import { createContext, useReducer } from "react";

export const PACTIONS = {
  PREVIEW: "preview",
  INCREMENT: "increment",
};

export const PreviewContext = createContext();

const PreviewReducer = (props) => {
  const previewReducer = (pstate, action) => {
    switch (action.type) {
      case PACTIONS.PREVIEW:
        return [
          {
            id: action.payload.id,
            name: action.payload.name,
            image: action.payload.image,
            description: action.payload.description,
            brand: action.payload.brand,
            type: action.payload.type,
            price: action.payload.price,
            qty: action.payload.qty,
          },
        ];

      case PACTIONS.INCREMENT:
        return pstate.map((item) => {
          return {
            ...item,
            qty: item.qty + 1,
          };
        });

      default:
        return pstate;
    }
  };

  const [pstate, dispatchP] = useReducer(previewReducer, []);
  return (
    <PreviewContext.Provider value={[dispatchP, pstate]}>
      {props.children}
    </PreviewContext.Provider>
  );
};

export default PreviewReducer;
