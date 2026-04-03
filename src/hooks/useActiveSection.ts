import { useEffect, useRef, useState } from "react"
 
export function useActiveSection(sectionIds: string[]) {
    const [activeSection, setActiveSection] = useState<string>(sectionIds[0] ?? "")
    const observersRef = useRef<IntersectionObserver[]>([])
 
    useEffect(() => {
        // Limpia observers anteriores
        observersRef.current.forEach(o => o.disconnect())
        observersRef.current = []
 
        // Espera un tick para que <Outlet /> haya montado los elementos
        const timer = setTimeout(() => {
            sectionIds.forEach(id => {
                const el = document.getElementById(id)
                if (!el) {
                    console.warn(`[useActiveSection] No se encontró el elemento con id="${id}"`)
                    return
                }
 
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        // Solo activa — nunca desactiva desde acá.
                        // La sección que entra gana el activo.
                        if (entry.isIntersecting) {
                            setActiveSection(id)
                        }
                    },
                    {
                        // El rootMargin recorta el área de detección:
                        // ignora los primeros 80px (el header fijo) y
                        // activa cuando la sección ocupa al menos el 40% del viewport restante.
                        rootMargin: "-80px 0px -40% 0px",
                        threshold: 0,
                    }
                )
 
                observer.observe(el)
                observersRef.current.push(observer)
            })
        }, 100)
 
        return () => {
            clearTimeout(timer)
            observersRef.current.forEach(o => o.disconnect())
        }
    }, [sectionIds.join(",")])
 
    function scrollTo(id: string) {
        const el = document.getElementById(id)
        if (!el) {
            console.warn(`[scrollTo] No se encontró el elemento con id="${id}"`)
            return
        }
        el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
 
    return { activeSection, scrollTo }
}