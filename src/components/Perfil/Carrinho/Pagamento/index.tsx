import { useState } from "react";
import {
  InputGroup,
  DeliveryForm,
  DeliveryInput,
  DeliveryLabel,
} from "../Entrega/styles";
import { CheckoutBTN } from "../styles";
import { Confirmacao } from "../Confirmacao";

type PagamentoProps = {
  setPayementForm: (value: boolean) => void;
  totalValue: number;
};

export function Pagamento({ setPayementForm, totalValue }: PagamentoProps) {
  const [confirmation, setConfirmation] = useState(false);
  const [cartao, setCartao] = useState("");

  const handleCartao = (e: React.ChangeEvent<HTMLInputElement>) => {
    let valor = e.target.value;
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/(\d{4})(\d{4})(\d{4})(\d{2})/, "$1-$2-$3-$4");
    setCartao(valor);
  };

  return (
    <>
      {!confirmation ? (
        <>
          <DeliveryForm onSubmit={() => setConfirmation(true)}>
            <h2>
              Pagamento - Valor a pagar{" "}
              {totalValue.toFixed(2).replace(".", ",")}
            </h2>
            <DeliveryLabel>Nome no cartão</DeliveryLabel>
            <DeliveryInput required type="text" />
            <InputGroup className="card-cvv">
              <div className="cardNumber">
                <DeliveryLabel>Número do Cartão</DeliveryLabel>
                <DeliveryInput
                  maxLength={16}
                  required
                  type="text"
                  value={cartao}
                  onChange={handleCartao}
                />
              </div>
              <div className="cvv">
                <DeliveryLabel>CVV</DeliveryLabel>
                <DeliveryInput maxLength={3} required type="text" />
              </div>
            </InputGroup>
            <InputGroup className="expires">
              <div className="expire">
                <DeliveryLabel>Mês de vencimento</DeliveryLabel>
                <DeliveryInput maxLength={2} required type="text" />
              </div>
              <div className="expire">
                <DeliveryLabel>Ano de vencimento</DeliveryLabel>
                <DeliveryInput maxLength={2} required type="text" />
              </div>
            </InputGroup>
            <CheckoutBTN type="submit">Finalizar pagamento</CheckoutBTN>
            <CheckoutBTN type="button" onClick={() => setPayementForm(false)}>
              Voltar para a edição de endereço
            </CheckoutBTN>
          </DeliveryForm>
        </>
      ) : (
        <Confirmacao />
      )}
    </>
  );
}
