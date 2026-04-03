import { useEffect, useState } from "react"
import NavDesktop from "./NavDesktop"
import NavMobile from "./NavMobile"

interface NavbarProps {
    activeSection: string
    onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void
}

const MOBILE_LINKS = [
    { id: "sobreMi",     name: "Sobre Mí"    },
    { id: "habilidades", name: "Habilidades" },
    { id: "proyectos",   name: "Proyectos"   },
]

export default function Navbar({ activeSection, onNavClick }: NavbarProps) {
    const [scrolled,  setScrolled]  = useState(false)
    const [menuOpen,  setMenuOpen]  = useState(false)

    useEffect(() => {
        function onScroll() { setScrolled(window.scrollY > 20) }
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    function handleMobileClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
        onNavClick(e, id)
        setMenuOpen(false)
    }

    return (
        <>
            <header className="relative w-full z-50">
                <section
                    className={[
                        "fixed w-full px-10 py-4 transition-all duration-300",
                        scrolled ? "bg-zinc-900 shadow-lg" : "bg-zinc-900/90",
                    ].join(" ")}
                >
                    <div className="container flex justify-between items-center mx-auto">
                        <div className="flex flex-col gap-0.5">
                            <a
                                href="#presentacion"
                                onClick={(e) => onNavClick(e, "presentacion")}
                                className="font-bold text-2xl text-gray-50 leading-none transition-all duration-300 hover:text-cyan-400"
                            >
                                Luciano Villarreal
                            </a>

                            <span className="text-cyan-400 text-xs uppercase tracking-[.12em] font-normal leading-none">
                                Fullstack Developer
                            </span>
                        </div>

                        <NavDesktop activeSection={activeSection} onNavClick={onNavClick} />
                        <NavMobile  menuOpen={menuOpen} onToggle={() => setMenuOpen(p => !p)} />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-px bg-white/8" />
                </section>
            </header>

            <div
                className={[
                    "fixed left-0 right-0 z-40 bg-zinc-900 border-t border-white/10",
                    "overflow-hidden transition-all duration-300 md:hidden",
                    "top-[69px]",
                    menuOpen ? "max-h-72 shadow-xl" : "max-h-0",
                ].join(" ")}
            >
                <nav className="flex flex-col gap-1 px-6 py-3">
                    {MOBILE_LINKS.map(({ id, name }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            onClick={(e) => handleMobileClick(e, id)}
                            className={[
                                "flex items-center gap-2 px-3 py-2.5 rounded-lg text-base font-bold transition-all",
                                activeSection === id
                                    ? "text-cyan-400 bg-zinc-800"
                                    : "text-gray-50 hover:text-cyan-400 hover:bg-zinc-800",
                            ].join(" ")}
                        >
                            <span className={[
                                "w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 transition-all duration-300",
                                activeSection === id ? "opacity-100" : "opacity-0",
                            ].join(" ")} />
                            {name}
                        </a>
                    ))}

                    <a
                        href="#contacto"
                        onClick={(e) => handleMobileClick(e, "contacto")}
                        className={[
                            "mt-1 mb-1 px-3 py-2.5 rounded-lg text-base font-bold transition-all duration-300 border",
                            activeSection === "contacto"
                                ? "bg-cyan-500 text-zinc-950 border-cyan-500"
                                : "bg-transparent text-white border-zinc-600 hover:bg-zinc-700",
                        ].join(" ")}
                    >
                        Contacto
                    </a>
                </nav>
            </div>
        </>
    )
}