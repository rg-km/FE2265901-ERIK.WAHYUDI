import create from "zustand"
// TODO: answer here
import { persist } from "zustand/middleware"

const useItemStore = 
    create(
        persist(
        (set: => ({
            items: [],
            addItem: (item: any) => {
                const itemExists = get().items.find(
                    (i: any) => i.id === item.id
                );
                set({
                    items: [
                        ...state.items.filter(i => i.id !== item.id),
                        { ...item, quantity: itemExists ? itemExists.quantity + 1 : 1 },
                    ],
                });
            },
            removeItem: (item: any) => {
                set({
                    items: state.items.filter(i => i.id !== item.id),
                });
            }
        })),
        (get: any, api: any) => ({
            items: [],
            addItem: (item: any) => {
                const itemExists = get().items.find(
                    (i: any) => i.id === item.id
                );
                set({
                    items: [
                        ...state.items.filter(i => i.id !== item.id),
                        { ...item, quantity: itemExists ? itemExists.quantity + 1 : 1 },
                    ],
                });
            },
            removeItem: (item: any) => {
                set({
                    items: state.items.filter(i => i.id !== item.id),
                });
            }
        })
    )
    )

// TODO: answer here

export default useItemStore
