import create from "zustand";
// TODO: answer here
import {persist} from "zustand/middleware";
import (inner) from "zustand/middleware/inner";

const cartQuantityMiddleware = (config) => (set, get, api) =>
  config(
    // TODO: answer here
    (...args) => {
      set(...args);
      const moreThanStockItem = get().items.filter(
        (item) => item.quantity > item.stock
      );
      const lessThanZeroItem = get().items.filter(
        (item) => item.quantity < 1);
      if (moreThanStockItem.length > 0) {
        return set(state => ({
          items: state.items.map(item => {
            item.id === moreThanStockItem[0].id
              ? (item.quantity = item.stock)
              : item;
          }),
        }));
      } else if (lessThanZeroItem.length > 0) {
        return set(state => ({
          items: state.items.map(item => {
            item.id === lessThanZeroItem[0].id
              ? (item.quantity = 1)
              : item;
          }),
        }));
      }
    }
    ,
    get,
    api,
  )

const useCartStore = create((set, get, api) => ({
  items: [],
  addItem: (item) => {
    const itemExists = get().items.find( (i) => i.id === item.id);
    set (state => ({
      items: [
        ...state.items.filter(i => i.id !== item.id),
        {...item, quantity: itemExists ? itemExists.quantity + 1 : 1},
      ],
    }));
  },
  removeItem: (item) => {
    set (state => ({
      items: state.items.filter(i => i.id !== item.id),
    }));
  },
  changeQuantity: (item, quantity) => {
    set (state => ({
      items: state.items.map(i => {
        if (i.id === item.id) {
          i.quantity = quantity;
        }
        return i;
      }),
    }));
  },
  clearCart: () => {
    set (state => ({
      items: [],
    }));
  },
  ...persist(
    "items",
    inner(
      cartQuantityMiddleware,
    ),
  ),
}));
{name: "cart"}
// TODO: answer here



export default useCartStore
