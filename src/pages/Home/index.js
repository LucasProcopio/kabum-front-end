import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "./styles";
import Loader from "../../components/Loader";
import ProductList from "./ProductList";

import { fetchProductsRequest } from "../../redux/modules/product/actions";

export default function Home() {
  const loader = useSelector(state => state.product.loader);
  const products = useSelector(state => state.product.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  return (
    <Container>
      {loader ? <Loader size={34} /> : <ProductList products={products} />}
    </Container>
  );
}
