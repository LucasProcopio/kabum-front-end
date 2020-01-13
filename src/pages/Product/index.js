import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProductByIdRequest } from "../../redux/modules/product/actions";

import {
  Container,
  Title,
  ProductImage,
  ProductDetail,
  Description,
  Actions,
  BuyBtn,
  FullPrice,
} from "./styles";

export default function Product(props) {
  const { id } = props.match.params;
  const product = useSelector(state => state.product.detail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductByIdRequest(id));
  }, [dispatch, id]);

  return (
    <Container>
      <ProductDetail>
        <Title>{product.title}</Title>
        <ProductImage src={product.showCaseImg} alt="Imagem do produto" />
        <Description>{product.descrition}</Description>
      </ProductDetail>
      <Actions>
        <BuyBtn type="button" />
        <FullPrice>{product.price}</FullPrice>
      </Actions>
    </Container>
  );
}
