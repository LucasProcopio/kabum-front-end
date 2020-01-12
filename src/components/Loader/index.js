import React from "react";
import { FaSpinner } from "react-icons/fa";

import { Container } from "./styles";

export default function Loader({ size }) {
  return (
    <Container>
      <FaSpinner fill="#FB680F" size={size} />
    </Container>
  );
}
