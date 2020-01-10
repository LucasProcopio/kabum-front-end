import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 180px;
  width: 90%;
  padding: 48px;
  margin: 0 auto;
`;

export const Itens = styled.p`
  color: rgba(255, 255, 255, 0.5);
  text-align: right;
`;

export const Cart = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 255px;
  height: 80px;
  padding: 25px;
  background: rgba(147, 147, 147, 0.35);
  border-radius: 8px;
  letter-spacing: 1.2px;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
`;
