import styled from "styled-components";
import { cores } from "../../../styles/cores";

export const ModalBG = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalDiv = styled.div`
  background-color: ${cores.vermelho};
  padding: 32px;
  max-width: 1024px;
  position: relative;

  display: flex;
  gap: 24px;

  p {
    color: ${cores.branco};
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }

  h2 {
    font-weight: 900;
    color: ${cores.branco};
    font-size: 18px;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  div {
    display: grid;
  }
`;

export const AddCart = styled.button`
  width: 218px;
  height: 24px;
  background-color: ${cores.bege};
  color: ${cores.vermelho};
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
`;

export const Close = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  background: none;
  color: ${cores.branco};
  right: 8px;
  top: 8px;
  cursor: pointer;
  position: absolute;
`;
