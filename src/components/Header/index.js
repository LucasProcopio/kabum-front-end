import React from "react";

import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container, Cart, Itens } from "./styles";

import logo from "../../assets/images/logo_kabum_.png";

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Kabum logo" />
      </Link>

      <Cart to="/cart">
        <FaShoppingCart fill="#fff" size={35} />
        <div className="cart-info">
          <strong>Meu Carrinho</strong>
          <Itens>Esta vazio</Itens>
        </div>
      </Cart>
    </Container>
  );
}
