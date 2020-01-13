import React from "react";
import { useDispatch } from "react-redux";

import { map } from "lodash";
import {
  Container,
  List,
  ListItem,
  Title,
  Price,
  Actions,
  ProductImage,
  InfoWrapper,
  BuyButton,
  DetailsButton,
} from "./styles";
import availableImg from "../../../assets/images/icone_disponivel.gif";

import { addProductRequest } from "../../../redux/modules/cart/actions";

export default function ProductList({ products }) {
  const dispatch = useDispatch();

  function addToCart(id) {
    dispatch(addProductRequest(id));
  }

  return (
    <Container>
      <List>
        {map(products.data, prod => (
          <ListItem key={prod.id}>
            <div>
              <ProductImage src={prod.image} alt="Imagem do produo" />
              <InfoWrapper>
                <Title>{prod.title}</Title>
                <img src={availableImg} alt="Disponibilidade do produto" />
              </InfoWrapper>
            </div>

            <div>
              <Price>R$ {prod.price}</Price>
              <Actions>
                <BuyButton
                  type="button"
                  onClick={() => addToCart(prod.id)}
                  buy={true}
                />
                <DetailsButton to={`product/${prod.id}`} />
              </Actions>
            </div>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
