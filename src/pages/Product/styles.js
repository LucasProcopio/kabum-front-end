import styled from "styled-components";
import buyImg from "../../assets/images/comprar_detalhes.png";

export const Container = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
  background: #fff;
  border-radius: 8px;
`;
export const Title = styled.h4`
  font-size: 22px;
  color: #058dc4;
  word-spacing: 1.2px;
  font-weight: bold;
`;
export const ProductImage = styled.img`
  margin: 20px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 5px;
  width: 250px;
  max-width: 280px;
  max-height: 220px;
`;
export const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  margin: 0;
  padding: 10px;
`;
export const Description = styled.div`
  font-size: 18px;
  color: #555;
`;
export const FullPrice = styled.p``;
export const Actions = styled.div``;
export const BuyBtn = styled.div`
  background-image: url(${buyImg});
  width: 220px;
  height: 50px;
  border: 0;
  background-repeat: no-repeat;
  background-size: contain;
`;
