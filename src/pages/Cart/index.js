import React from "react";
import { useSelector } from "react-redux";

import Loader from "../../components/Loader";
import CartList from "./CartList";

import { Container } from "./styles";

export default function Cart() {
  const loader = useSelector(state => state.cart.loader);

  return <Container>{loader ? <Loader size={34} /> : <CartList />}</Container>;
}
