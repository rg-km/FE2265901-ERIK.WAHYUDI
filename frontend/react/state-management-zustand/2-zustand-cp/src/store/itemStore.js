import create from "zustand"
import { persist, devtools } from "zustand/middleware"
import { produce } from "immer"
import { useEffect } from "react"
import { useCartStore } from "./cartStore"
import { useUserStore } from "./userStore"
// TODO: answer here

const useItemStore = 
    create(persist(devtools((set) => ({
        items: [],
        // whitout immer
        // addItem: (item) => set((state) => ({ ...state, items: [...state.items, item] })),
        // with immer
        addItem: (item) => set(produce((state) => {
            state.items.push(item)
        })),
        removeItem: (item) => set(produce((state) => {
            state.items = state.items.filter(i => i.id !== item.id)
        })),
        changeQuantity: (item) => set(produce((state) => {
            const index = state.items.findIndex(i => i.id === item.id)
            state.items[index].quantity = item.quantity
        })),
    }))),{name: "item"});
    
// TODO: answer here

export default useItemStore