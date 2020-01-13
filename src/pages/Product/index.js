import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProductByIdRequest } from "../../redux/modules/product/actions";

import { Container } from "./styles";

export default function Product(props) {
  const { id } = props.match.params;
  const product = useSelector(state => state.product.detail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductByIdRequest(id));
  }, [dispatch]);

  return (
    <div>Prod</div>
    // <Container>
    //   <ProductDetail>
    //     <ProductImageDetail>

    //   </ProductDetail>
    // </Container>
  );
}
