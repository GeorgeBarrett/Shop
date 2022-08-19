import { useContext, createContext, ReactNode } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContext = {
    getItemQantity: (id: number) => number
    increaseCartQantity: (id: number) => void
    decreaseCartQantity: (id: number) => void
    removeFromCart: (id: number) => number
}

const ShoppingCartContext = createContext({})

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    return  <ShoppingCartContext.Provider value={{}}>
                {children}
    </ShoppingCartContext.Provider>
}