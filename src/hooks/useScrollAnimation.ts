import { useEffect, useRef } from "react"

export function useScrollAnimation(animationClass: string, threshold = 0.15) {
    const ref = useRef<HTMLElement | null>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            el.classList.add(animationClass)
            observer.disconnect() // se anima una sola vez
            }
        },
        { threshold }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [animationClass, threshold])

    return ref
}