import { useDispatch } from "react-redux";
import { remove } from "../../store/reducers/cartSlice";
import type { Prato } from "../../models/Prato";
import lixeira from "../../assets/lixeira-de-reciclagem.png";
import { CartLi, DelBtn } from "./styles";

type CartProps = {
  prato: Prato;
};

export function CartItem({ prato }: CartProps) {
  const dispatch = useDispatch();

  return (
    <>
      <CartLi>
        <img src={prato.image} />
        <div>
          <h2>{prato.name}</h2>
          <p>R$ {prato.price.toFixed(2).replace(".", ",")}</p>
        </div>
        <DelBtn onClick={() => dispatch(remove(prato.id))}>
          <img src={lixeira} />
        </DelBtn>
      </CartLi>
    </>
  );
}
