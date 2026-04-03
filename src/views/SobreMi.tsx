import { useEffect, useRef, useState } from "react"
import {
    faBook,
    faBriefcase,
    faScrewdriverWrench,
    faLocationDot,
    faGraduationCap,
    faBuildingColumns,
    faClock,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// Hook interno: revela el elemento cuando entra al viewport
function useReveal(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect()
                }
            },
            { threshold }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return { ref, visible }
}

// ── Datos ─────────────────────────────────────────────────────────────────────

const INFO_ROWS = [
    { icon: faLocationDot,     label: "Ubicación",     value: "Córdoba, Argentina",       accent: false },
    { icon: faGraduationCap,   label: "Educación",     value: "UTN · Ing. en Sistemas",   accent: false },
    { icon: faBuildingColumns, label: "Empresa",       value: "Agencia Wualá · 2022–hoy", accent: false },
    { icon: faClock,           label: "Disponibilidad", value: "Disponible ahora",         accent: true  },
]

const CARDS = [
    {
        icon: faBook,
        title: "Formación académica",
        text: "Ingeniería en Sistemas en la UTN, donde continúo fortaleciendo mi base en desarrollo de software. Complemento con cursos en React, TypeScript, Node.js y stack MERN. Actualmente ampliando conocimientos en React Native e inglés profesional.",
    },
    {
        icon: faScrewdriverWrench,
        title: "Stack técnico",
        text: "Frontend y backend completo: HTML, CSS, SASS, JavaScript, React y TypeScript en el cliente; Node.js, Express, PHP, MySQL y MongoDB en el servidor. También trabajo con Next.js, NestJS, APIs REST y Git.",
    },
    {
        icon: faBriefcase,
        title: "Experiencia profesional",
        text: "Desde 2022 en la agencia de e-commerce Wuala: desarrollo de módulos para PrestaShop, integraciones con APIs, automatización de procesos y gestión técnica de tiendas en PrestaShop, Shopify y Tienda Nube.",
    },
]

// ── Componente ────────────────────────────────────────────────────────────────

export default function SobreMi() {
    const titleReveal = useReveal()
    const panelReveal = useReveal()

    // Un hook por card para que cada una se observe de forma independiente
    const card0 = useReveal(0.1)
    const card1 = useReveal(0.1)
    const card2 = useReveal(0.1)
    const cardReveals = [card0, card1, card2]

    return (
        <section className="container mx-auto mt-20 md:mt-32" id="sobreMi">
            <div
                ref={titleReveal.ref}
                className={["text-center mb-16 opacity-0", titleReveal.visible ? "animate-slide-top" : ""].join(" ")}
            >
                <p className="text-cyan-600 text-base font-bold uppercase tracking-[.15em] mb-2">
                    Conóce
                </p>

                <h2 className="text-4xl font-bold text-zinc-900">
                    Un poco sobre mí
                </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-start">
                <div
                    ref={panelReveal.ref}
                    className={`${panelReveal.visible ? "animate-slide-left" : ""}`}
                >
                    <div className="bg-cyan-950 rounded-2xl p-8 md:p-5 flex flex-col gap-6">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-cyan-600 border-2 border-cyan-500 flex items-center justify-center text-zinc-100 font-extrabold text-xl flex-shrink-0 select-none">
                                LV
                            </div>

                            <div>
                                <p className="text-zinc-100 font-bold text-lg leading-tight">
                                    Luciano Villarreal
                                </p>

                                <p className="text-cyan-400 text-xs uppercase tracking-widest mt-0.5">
                                    Fullstack Developer
                                </p>
                            </div>
                        </div>

                        <div className="h-px bg-cyan-700" />

                        <div className="flex flex-col gap-5 md:gap-8">
                            {INFO_ROWS.map(({ icon, label, value, accent }) => (
                                <div key={label} className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-cyan-900 flex items-center justify-center flex-shrink-0">
                                        <FontAwesomeIcon icon={icon} className="text-cyan-400 text-lg" />
                                    </div>
                                    
                                    <div>
                                        <p className="text-zinc-300 text-xs uppercase tracking-wider leading-none">
                                            {label}
                                        </p>
                                        <p className={["text-md font-semibold leading-tight mt-0.5", accent ? "text-cyan-400" : "text-white"].join(" ")}>
                                            {value}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5 w-full md:w-4/6 px-5 md:px-0">
                    {CARDS.map(({ icon, title, text }, i) => (
                        <div
                            key={title}
                            ref={cardReveals[i].ref}
                            className={["opacity-0", cardReveals[i].visible ? "animate-slide-right" : ""].join(" ")}
                            style={{ animationDelay: cardReveals[i].visible ? `${i * 120}ms` : "0ms" }}
                        >
                            <div className="bg-zinc-200/50 shadow-md border-l-4 border-l-cyan-950 border border-zinc-300 rounded-2xl p-3 md:p-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-8 md:w-10 h-8 md:h-10 rounded-lg bg-cyan-950 flex items-center justify-center flex-shrink-0">
                                        <FontAwesomeIcon icon={icon} className="text-cyan-400 text-base md:text-lg" />
                                    </div>
                                    <h3 className="text-sm md:text-base font-bold text-cyan-950 uppercase tracking-wide">
                                        {title}
                                    </h3>
                                </div>
                                <p className="text-zinc-900 text-sm md:text-base text-justify">
                                    {text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}