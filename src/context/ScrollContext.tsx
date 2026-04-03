import { createContext, useContext } from "react"

interface ScrollContextValue {
    activeSection: string
    scrollTo: (id: string) => void
}

export const ScrollContext = createContext<ScrollContextValue>({
    activeSection: "",
    scrollTo: () => {},
})

export function useScroll() {
    return useContext(ScrollContext)
}