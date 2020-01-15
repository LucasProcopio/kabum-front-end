import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const filteredProducts = useSelector(state => state.product.filtered);
  const list = filteredProducts.length > 0 ? filteredProducts : products;

  function addToCart(id) {
    dispatch(addProductRequest(id));
  }

  return (
    <Container>
      <List>
        {map(list, prod => (
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
                <DetailsButton to={`products/${prod.id}`} />
              </Actions>
            </div>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
