import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProductByIdRequest } from "../../redux/modules/product/actions";
import { addProductRequest } from "../../redux/modules/cart/actions";

import Loader from "../../components/Loader";

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
  const loader = useSelector(state => state.product.loader);
  const product = useSelector(state => state.product.detail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductByIdRequest(id));
  }, [dispatch, id]);

  function addToCart() {
    dispatch(addProductRequest(id));
  }

  return (
    <Container>
      {loader ? (
        <Loader size={34} />
      ) : (
        <>
          <ProductDetail>
            <Title>{product.title}</Title>
            <ProductImage src={product.showCaseImg} alt="Imagem do produto" />
            <Description>{product.descrition}</Description>
          </ProductDetail>
          <Actions>
            <BuyBtn type="button" onClick={addToCart} />
            <FullPrice>
              R$ {product.price}
              <span> preço total ou com parcelamento no cartão em até 12x</span>
            </FullPrice>
            <WithDiscount>
              R$ {product.withDiscount}{" "}
              <span className="discount-info">
                {" "}
                à vista no boleto bancário com
              </span>{" "}
              <span>15% de desconto</span>
            </WithDiscount>
          </Actions>
        </>
      )}
    </Container>
  );
}
