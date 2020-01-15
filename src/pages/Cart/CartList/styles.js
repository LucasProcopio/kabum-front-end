import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  width: 95%;
  flex-direction: column;
  margin: 0 auto;
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: row;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: border 0.2s ease-in-out;
  padding: 0 10px;

  &:hover {
    border: 1px solid #fb680f;
  }
  > div {
    display: flex;
  }
`;
export const ProductImage = styled.img`
  width: 130px;
  height: 90px;
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  padding-left: 25px;
  width: 315px;
`;
export const Title = styled(Link)`
  color: #555;
  font-size: 22px;
  word-spacing: 1.2px;
  font-weight: normal;
`;
export const DiscountInfo = styled.div`
  display: flex;
  flex-direction: column;
  > p {
    display: block;
    color: #555;
    margin: 5px 0;
  }
`;
export const QtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > p {
    text-align: center;
    font-size: 20px;
    color: #fb680f;
    text-align: center;
  }
  > div {
    display: flex;
    flex-direction: row;
    margin: 10px;
  }
  > button {
    color: #fb680f;
    margin: 5px;
    border: 0;
  }
`;
export const IncreaseBtn = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fb680f;
  color: #fff;
  font-weight: bold;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;
export const DecreaseBtn = styled(IncreaseBtn)`
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;
export const Quantity = styled.p`
  color: #555;
  font-weight: bold;
  width: 90px;
  height: 30px;
  border: 1px solid #f5f5f5;
  line-height: 29px;
  text-align: center;
`;
export const TotalWrapper = styled(QtWrapper)``;
export const TotalPrice = styled.p`
  font-size: 16px;
  color: #fb680f;
  padding: 2px;
  border: 1px solid #fb680f;
  border-radius: 8px;
  margin-top: 10px;
`;

export const Empty = styled.h4`
  font-size: 26px;
  color: #fb680f;
  margin-top: 10px;
  text-align: center;
  margin: 0 auto;
`;
