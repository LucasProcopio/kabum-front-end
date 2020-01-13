import React from "react";
import { useSelector } from "react-redux";

import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container, Cart, Itens } from "./styles";

import logo from "../../assets/images/logo_kabum_.png";

export default function Header() {
  const inCart = useSelector(state => state.cart.inCart);

  function cartProductQuantity(inCart) {
    let cartMessage;
    switch (inCart) {
      case 0:
        cartMessage = "Esta vazio";
        break;
      case 1:
        cartMessage = `${inCart} Produto`;
        break;
      default:
        cartMessage = `${inCart} Produtos`;
        break;
    }
    return cartMessage;
  }

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Kabum logo" />
      </Link>

      <Cart to="/cart">
        <FaShoppingCart fill="#fff" size={35} />
        <div className="cart-info">
          <strong>Meu Carrinho</strong>
          <Itens>{cartProductQuantity(inCart)}</Itens>
        </div>
      </Cart>
    </Container>
  );
}
