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
  WithDiscount,
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
        <FullPrice>
          R$ {product.price}
          <span> preço total ou com parcelamento no cartão em até 12x</span>
        </FullPrice>
        <WithDiscount>
          R$ {product.withDiscount}{" "}
          <span className="discount-info"> à vista no boleto bancário com</span>{" "}
          <span>15% de desconto</span>
        </WithDiscount>
      </Actions>
    </Container>
  );
}
