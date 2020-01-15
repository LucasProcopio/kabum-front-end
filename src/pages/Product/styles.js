import styled from "styled-components";
import buyImg from "../../assets/images/comprar_detalhes.png";

export const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
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
  width: 50%;
  background: #f5f5f5;
  margin: 0;
  padding: 10px;
`;
export const Description = styled.div`
  font-size: 18px;
  color: #555;
`;
export const Actions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;
export const FullPrice = styled.p`
  text-align: center;
  font-size: 26px;
  color: #fb680f;
  font-weight: bold;
  > span {
    display: block;
    text-align: center;
    font-size: 20px;
  }
`;
export const WithDiscount = styled.p`
  text-align: center;
  font-size: 26px;
  color: #029905;
  font-weight: bold;
  .discount-info {
    display: block;
    font-size: 20px;
    color: #029905;
  }
  > span {
    font-size: 20px;
    color: #555;
  }
`;
export const BuyBtn = styled.button`
  background-image: url(${buyImg});
  width: 220px;
  height: 50px;
  border: 0;
  background-repeat: no-repeat;
  background-size: contain;
`;
