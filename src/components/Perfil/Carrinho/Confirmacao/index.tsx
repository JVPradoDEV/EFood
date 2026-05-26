import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { close, clearCart } from "../../../../store/reducers/cartSlice";
import { CheckoutBTN } from "../styles";
import { PaymentForm } from "./styles";

export function Confirmacao() {
  const dispatch = useDispatch();
  const [orderId, setOrderId] = useState("");

  const handleFinalizarPedido = () => {
    dispatch(clearCart());
    dispatch(close());
  };

  useEffect(() => {
    const gerador = Math.random().toString(36).substring(2, 10).toUpperCase();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOrderId(gerador);
  }, []);

  return (
    <>
      <PaymentForm>
        <h2>Pedido Realizado! - #{orderId}</h2>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
        <CheckoutBTN type="button" onClick={handleFinalizarPedido}>
          Concluir
        </CheckoutBTN>
      </PaymentForm>
    </>
  );
}
