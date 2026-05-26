import styled from "styled-components";
import { cores } from "../../../styles/cores";

export const CartBG = styled.div`
  position: fixed;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100%;
  justify-items: end;
`;

export const CartDiv = styled.div`
  background-color: ${cores.vermelho};
  width: 360px;
  height: 100%;
`;

export const CartUl = styled.ul`
  padding-top: 32px;
  display: grid;
  gap: 16px;
`;

export const CheckoutDiv = styled.div`
  padding-top: 40px;
  margin: 8px;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    h3,
    p {
      color: ${cores.bege};
      font-weight: 700;
      font-size: 14px;
    }
  }
`;

export const CheckoutBTN = styled.button`
  background-color: ${cores.bege};
  color: ${cores.vermelho};
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  width: 100%;
  height: 24px;

  &:first-of-type {
    margin-top: 24px;
  }
`;

export const EmptyText = styled.p`
  margin-left: 8px;
  font-size: 14px;
  font-weight: regular;
  color: ${cores.bege};
`;
