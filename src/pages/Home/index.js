import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../components/Loader";
import ProductList from "./ProductList";

import iconeListagem from "../../assets/images/icone_listagem.png";
import { Container, Filter, Input } from "./styles";

import {
  fetchProductsRequest,
  fetchProductByName,
} from "../../redux/modules/product/actions";

export default function Home() {
  const loader = useSelector(state => state.product.loader);
  const products = useSelector(state => state.product.list);
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProductByName(name));
  }, [name, dispatch]);

  return (
    <Container>
      {loader ? (
        <Loader size={34} />
      ) : (
        <>
          <Filter>
            <p>
              <img src={iconeListagem} alt="Icone de lista" />
              Filtrar por:
            </p>
            <Input
              minLength={3}
              debounceTimeout={450}
              type="text"
              name="name"
              placeholder="Nome"
              onChange={e => setName(e.target.value)}
            />
          </Filter>
          <ProductList products={products} />
        </>
      )}
    </Container>
  );
}
