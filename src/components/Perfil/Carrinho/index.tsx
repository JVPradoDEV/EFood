import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../../../containers/CartItem";
import {
  CartBG,
  CartDiv,
  CartUl,
  CheckoutBTN,
  CheckoutDiv,
  EmptyText,
} from "./styles";
import { close } from "../../../store/reducers/cartSlice";
import type { RootState } from "../../../store/store";
import { useState } from "react";
import { Entrega } from "./Entrega";

export function Carrinho() {
  const dispatch = useDispatch();
  const [deliveryForm, setDeliveryForm] = useState(false);

  const itemsOnCart = useSelector((state: RootState) => state.cart.items);
  const isOpen = useSelector((state: RootState) => state.cart.isOpen);

  if (!isOpen) return null;

  const totalValue = itemsOnCart.reduce((acumulador, itemAtual) => {
    return acumulador + itemAtual.price;
  }, 0);

  const closeCart = () => {
    setDeliveryForm(false);
    dispatch(close());
  };

  const handleContinuarEntrega = () => {
    if (itemsOnCart.length === 0) {
      alert("O carrinho está vázio!");
      return;
    }
    setDeliveryForm(true);
  };

  return (
    <>
      <CartBG onClick={closeCart}>
        <CartDiv onClick={(e) => e.stopPropagation()}>
          {!deliveryForm ? (
            <>
              <CartUl>
                {itemsOnCart.length === 0 ? (
                  <EmptyText>Seu carrinho está vázio.</EmptyText>
                ) : (
                  itemsOnCart.map((item, index) => (
                    <CartItem key={`${item.id}-${index}`} prato={item} />
                  ))
                )}
              </CartUl>
              <CheckoutDiv>
                <div>
                  <h3>Valor total</h3>
                  <p>R$ {totalValue.toFixed(2).replace(".", ",")}</p>
                </div>
                <CheckoutBTN onClick={handleContinuarEntrega}>
                  Continuar com a entrega
                </CheckoutBTN>
              </CheckoutDiv>
            </>
          ) : (
            <Entrega
              setDeliveryForm={setDeliveryForm}
              totalValue={totalValue}
            />
          )}
        </CartDiv>
      </CartBG>
    </>
  );
}
