import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  background: #fff;
  border-radius: 8px;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  background: #eee;
  border-radius: 8px;
  width: 95%;
  margin: 0 auto;
  margin-top: 10px;

  > p {
    display: flex;
    align-items: center;
    color: #555;
    padding: 10px;

    img {
      margin: 5px;
    }
  }
`;

export const Input = styled(DebounceInput)`
  width: 150px;
  border: 1px solid #eee;
  padding: 5px;
  color: #555;
  border-radius: 8px;
`;
