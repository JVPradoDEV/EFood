import { useDispatch } from "react-redux";
import { AddCart, Close, ModalBG, ModalDiv } from "./styles";
import type { Prato } from "../../../models/Prato";
import { add } from "../../../store/reducers/cartSlice";

type ModalProps = {
  prato: Prato;
  fecharModal: () => void;
};

export function Modal({ prato, fecharModal }: ModalProps) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(add(prato));
    fecharModal();
  };

  return (
    <>
      <ModalBG>
        <ModalDiv>
          <Close className="close-btn" onClick={fecharModal}>
            X
          </Close>
          <img src={prato.image} />
          <div>
            <h2>{prato.name}</h2>
            <p>{prato.descriptionPlus}</p>
            <p>Serve: de 2 a 3 pessoas</p>

            <AddCart type="button" onClick={handleAddToCart}>
              Adicionar ao Carrinho - R${" "}
              {prato.price.toFixed(2).replace(".", ",")}
            </AddCart>
          </div>
        </ModalDiv>
      </ModalBG>
    </>
  );
}
