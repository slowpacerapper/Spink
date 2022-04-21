import React, { useContext, useEffect, useState } from "react";
import {
  PreviewContainer,
  PreviewContent,
  PreviewImageContainer,
  PreviewImage,
  PreviewDetailsContainer,
  ProductName,
  ProductInfo,
  AddtoCartContainer,
  AddtoCartButton,
  IncrementContainer,
  IncrementButton,
  PreviewDescription,
  DescriptionList,
} from "./Preview.styled";
import { Container } from "../../GlobalStyles/GlobalStyles";
import { Context, ACTIONS } from "../../ReducerContext/ReducerContext";
import { PreviewContext, PACTIONS } from "../../ReducerContext/PreviewReducer";

const Preview = () => {
  const [dispatch] = useContext(Context);
  const [dispatchP, pstate] = useContext(PreviewContext);
  const [prevData, setPrevData] = useState([]);
  const [notify, setNotify] = useState(false);

  const notifyHandler = (data) => {
    dispatch({ ...data });
    setNotify(!notify);
    setTimeout(() => {
      setNotify(notify);
    }, 1000);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("previewData"));
    setPrevData(data);
  }, [pstate]);

  return (
    <PreviewContainer>
      <Container>
        {prevData.map((product) => {
          return (
            <PreviewContent key={product.id}>
              <PreviewImageContainer>
                <PreviewImage src={product.image} />
              </PreviewImageContainer>
              <PreviewDetailsContainer>
                <ProductName>{product.name}</ProductName>
                <ProductInfo>Price: ${product.price}</ProductInfo>
                <ProductInfo>Brand: {product.brand}</ProductInfo>
                <ProductInfo>Type: {product.type}</ProductInfo>
                <AddtoCartContainer>
                  <AddtoCartButton
                    onClick={() =>
                      notifyHandler({
                        type: ACTIONS.ADD_TO_CART,
                        payload: {
                          id: product.id,
                          name: product.name,
                          image: product.image,
                          description: product.description,
                          brand: product.brand,
                          type: product.type,
                          price: product.price,
                          qty: product.qty,
                        },
                      })
                    }
                  >
                    {!notify ? "Add to Cart" : "Added to Cart"}
                  </AddtoCartButton>
                </AddtoCartContainer>
                <PreviewDescription>
                  <ProductInfo>Description</ProductInfo>
                  <DescriptionList>
                    <li>{product.description[0]}</li>
                    <li>{product.description[1]}</li>
                    <li>{product.description[2]}</li>
                    <li>{product.description[3]}</li>
                  </DescriptionList>
                </PreviewDescription>
              </PreviewDetailsContainer>
            </PreviewContent>
          );
        })}
      </Container>
    </PreviewContainer>
  );
};

export default Preview;
