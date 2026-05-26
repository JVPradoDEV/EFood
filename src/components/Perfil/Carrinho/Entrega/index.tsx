import React, { useState } from "react";
import { Pagamento } from "../Pagamento";
import { setDeliveryData } from "../../../../store/reducers/cartSlice";
import { CheckoutBTN } from "../styles";
import {
  DeliveryForm,
  DeliveryInput,
  DeliveryLabel,
  InputGroup,
} from "./styles";
import { useDispatch } from "react-redux";

type EntregaProps = {
  setDeliveryForm: (value: boolean) => void;
  totalValue: number;
};

export function Entrega({ setDeliveryForm, totalValue }: EntregaProps) {
  const dispatch = useDispatch();
  const [payamentForm, setPayamentForm] = useState(false);
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let valor = e.target.value;
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/^(\d{5})(\d)/, "$1-$2");
    setCep(valor);
  };

  const handleNumeroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let valor = e.target.value;
    valor = valor.replace(/\D/g, "");
    setNumero(valor);
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const dadosDaEntrega = {
      recebedor: formData.get("recebedor") as string,
      endereco: formData.get("endereco") as string,
      cidade: formData.get("cidade") as string,
      cep: cep,
      numero: numero,
      complemento: formData.get("complemento") as string,
    };

    dispatch(setDeliveryData(dadosDaEntrega));

    setPayamentForm(true);
    console.log("Formulario Enviado!");
    console.log(dadosDaEntrega);
  };

  return (
    <>
      {!payamentForm ? (
        <>
          <DeliveryForm onSubmit={handleSubmit}>
            <h2>Entrega</h2>
            <DeliveryLabel>Quem irá receber</DeliveryLabel>
            <DeliveryInput name="recebedor" required type="text" />
            <DeliveryLabel>Endereço</DeliveryLabel>
            <DeliveryInput name="endereco" required type="text" />
            <DeliveryLabel>Cidade</DeliveryLabel>
            <DeliveryInput name="cidade" required type="text" />
            <InputGroup className="expires">
              <div>
                <DeliveryLabel>CEP</DeliveryLabel>
                <DeliveryInput
                  required
                  maxLength={8}
                  className="half"
                  type="text"
                  value={cep}
                  onChange={handleCepChange}
                />
              </div>
              <div>
                <DeliveryLabel>Número</DeliveryLabel>
                <DeliveryInput
                  required
                  maxLength={15}
                  className="half"
                  type="text"
                  value={numero}
                  onChange={handleNumeroChange}
                />
              </div>
            </InputGroup>
            <DeliveryLabel>Complemento (opcional)</DeliveryLabel>
            <DeliveryInput name="complemento" type="text" />
            <CheckoutBTN type="submit">Continuar para o pagamento</CheckoutBTN>
            <CheckoutBTN onClick={() => setDeliveryForm(false)}>
              Voltar para o carrinho
            </CheckoutBTN>
          </DeliveryForm>
        </>
      ) : (
        <Pagamento setPayementForm={setPayamentForm} totalValue={totalValue} />
      )}
    </>
  );
}
