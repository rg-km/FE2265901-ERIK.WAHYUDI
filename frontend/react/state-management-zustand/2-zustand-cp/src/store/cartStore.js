import create from "zustand";
import { immer } from "zustand/middleware/immer";
import { useStore } from "zustand";
// TODO: answer here

const cartQuantityMiddleware = (config) => (set, get, api) =>
  config(
    (nextState, action) => {
      if (action.type === "ADD_TO_CART") {
        nextState.cart.push(action.payload);
      } else if (action.type === "REMOVE_FROM_CART") {
        nextState.cart = nextState.cart.filter(
          (item) => item.id !== action.payload
        );
      } else if (action.type === "CHANGE_QUANTITY") {
        nextState.cart = nextState.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        );
      }
    },
    (setState, getState) => {
      setState((state) => {
        state.cart = getState().cart;
      });
    }
  );
  

    // TODO: answer here
    (args) => {
      const moreThanStockItems = args.items.filter(
        (item) => item.quantity > item.stock
      );

      const lessThanZeroItems = args.items.filter((item) => item.quantity < 1);

      if (moreThanStockItems.length > 0) {
        throw new Error(`tIDAK BOLEH MELEBIHI STOCK`);
      }
      if (lessThanZeroItems.length > 0) {
        throw new Error(`tIDAK BOLEH KURANG DARI NOL`);
      }
    },
    get,
    api
  );

const useCartStore = create;
// TODO: answer here
immer(
  cartQuantityMiddleware((set) => ({
    items: [],
    addItem: (item) =>
      set((state) => ({
        items: [...state.items, item],
      })),
    removeItem: (item) =>
      set((state) => ({
        items: state.items.filter((i) => i !== item),
      })),
  })),

  (set) => ({
    items: [],
    addItem: (item) =>
      set((state) => ({
        items: [...state.items, item],
      })),
    removeItem: (item) =>
      set((state) => ({
        items: state.items.filter((i) => i !== item),
      })),
    changeQuantity: (item, quantity) =>
      set((state) => ({
        items: state.items.map((i) => (i === item ? { ...i, quantity } : i)),
      })),
  })
);

export default useCartStore;