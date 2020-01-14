import React from "react";
import { map, round } from "lodash";
import { useDispatch } from "react-redux";

import { removeCartProduct } from "../../../redux/modules/cart/actions";
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
} from "./styles";

export default function CartList({ products }) {
  const dispatch = useDispatch();

  function addItem(id) {}
  function removeItem(id) {}

  function removeCartItem(id) {
    dispatch(removeCartProduct(id));
  }

  return (
    <List>
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
                <IncreaseBtn type="button" onClick={() => addItem(prod.id)}>
                  <FaAngleUp size={20} fill="#fff" />
                </IncreaseBtn>
                <Quantity>{prod.inCart}</Quantity>
                <DecreaseBtn type="button" onClick={() => removeItem(prod.id)}>
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
