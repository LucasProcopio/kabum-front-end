import styled from "styled-components";
import { Link } from "react-router-dom";
import buyOn from "../../../assets/images/comprar.png";
import buyOff from "../../../assets/images/comprar_off.png";
import details from "../../../assets/images/detalhes-listagem.png";

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  width: 95%;
  flex-direction: column;
  margin: 0 auto;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: 15px 10px;
  height: 110px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: border 0.2s ease-in-out;

  &:hover {
    border: 1px solid #fb680f;
  }

  > div {
    display: flex;
    flex-direction: row;
  }
`;

export const Title = styled.p`
  font-size: 20px;
  color: #058dc4;
  word-spacing: 1.2px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  > img {
    width: 180px;
  }
`;

export const Price = styled.p`
  font-size: 20px;
  color: #058dc4;
  word-spacing: 1.2px;
  font-weight: bold;
  margin: 0 10px;
`;
export const Actions = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BuyButton = styled.button`
  width: 120px;
  height: 32px;
  background-image: url(${props => (props.buy ? buyOn : buyOff)});
  background-repeat: no-repeat;
  background-size: contain;
  border: 0;
  margin-bottom: 10px;
`;
export const DetailsButton = styled(Link)`
  width: 120px;
  height: 32px;
  background-image: url(${details});
  background-repeat: no-repeat;
  background-size: contain;
  border: 0;
`;

export const ProductImage = styled.img``;
