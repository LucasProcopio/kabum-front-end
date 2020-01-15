import React from "react";
import { map } from "lodash";
import { useDispatch, useSelector } from "react-redux";

import {
  removeCartProductItem,
  addCartProductItem,
  removeProductFromCart,
} from "../../../redux/modules/cart/actions";

import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import {
  List,
  ListItem,
  ProductImage,
  InfoWrapper,
  Title,
  DiscountInfo,
  QtWrapper,
  IncreaseBtn,
  DecreaseBtn,
  Quantity,
  TotalWrapper,
  TotalPrice,
  Empty,
} from "./styles";

export default function CartList() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.products);

  function addItem(product) {
    dispatch(addCartProductItem(product));
  }

  function removeItem(product) {
    dispatch(removeCartProductItem(product));
  }

  function removeCartItem(id) {
    dispatch(removeProductFromCart(id));
  }

  return (
    <List>
      {products.length == 0 && (
        <Empty>
          {" "}
          Seu carrinho está vazio{" "}
          <span role="img" aria-label="Rosto triste">
            😢
          </span>
        </Empty>
      )}
      {map(products, prod => (
        <ListItem key={prod.id}>
          <div>
            <ProductImage src={prod.image} alt="Imagem do produo" />
            <InfoWrapper>
              <Title to={`products/${prod.id}`}>{prod.title}</Title>
              <DiscountInfo>
                <p>Com desconto no boleto: R$ {prod.withDiscount}</p>
                <p>Parcelado no cartão: R$ {prod.price}</p>
              </DiscountInfo>
            </InfoWrapper>
          </div>

          <div>
            <QtWrapper>
              <p>Quantidade</p>
              <div>
                <IncreaseBtn type="button" onClick={() => addItem(prod)}>
                  <FaAngleUp size={20} fill="#fff" />
                </IncreaseBtn>
                <Quantity>{prod.inCart}</Quantity>
                <DecreaseBtn type="button" onClick={() => removeItem(prod)}>
                  <FaAngleDown size={20} fill="#fff" />
                </DecreaseBtn>
              </div>
              <button type="button" onClick={() => removeCartItem(prod.id)}>
                Romover do carrinho
              </button>
            </QtWrapper>
            <TotalWrapper>
              <p>Total à vista no boleto</p>
              <TotalPrice>R$ {prod.inCart * prod.price}</TotalPrice>
            </TotalWrapper>
          </div>
        </ListItem>
      ))}
    </List>
  );
}
