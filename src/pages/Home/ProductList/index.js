import React from "react";

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

export default function ProductList({ products }) {
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
                <BuyButton type="button" disabled buy={true} />
                <DetailsButton type="button" />
              </Actions>
            </div>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
