import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Prato } from "../../pages/Home";

export type DeliveryData = {
  recebedor: string;
  endereco: string;
  cidade: string;
  cep: string;
  numero: string;
  complemento?: string;
};

type CartState = {
  items: Prato[];
  isOpen: boolean;
  deliveryData: DeliveryData | null;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
  deliveryData: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      state.items.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    setDeliveryData: (state, action: PayloadAction<DeliveryData>) => {
      state.deliveryData = action.payload;
    },
    clearCart: (state) => {
      state.items = [];
      state.deliveryData = null;
    },
  },
});

export const { add, remove, open, close, setDeliveryData, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
