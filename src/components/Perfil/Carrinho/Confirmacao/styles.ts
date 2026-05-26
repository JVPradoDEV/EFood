import styled from "styled-components";
import { DeliveryForm } from "../Entrega/styles";
import { cores } from "../../../../styles/cores";

export const PaymentForm = styled(DeliveryForm)`
  p {
    color: ${cores.bege};
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
  }
`;
