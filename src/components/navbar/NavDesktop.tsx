import Nav from "../Nav"

interface NavDesktopProps {
    activeSection: string
    onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void
}

export default function NavDesktop({ activeSection, onNavClick }: NavDesktopProps) {
    return (
        <nav className="hidden md:flex items-center gap-5">
            <Nav
                href="#sobreMi"
                name="Sobre Mí"
                isActive={activeSection === "sobreMi"}
                onClick={(e) => onNavClick(e, "sobreMi")}
            />
            <Nav
                href="#habilidades"
                name="Habilidades"
                isActive={activeSection === "habilidades"}
                onClick={(e) => onNavClick(e, "habilidades")}
            />
            <Nav
                href="#proyectos"
                name="Proyectos"
                isActive={activeSection === "proyectos"}
                onClick={(e) => onNavClick(e, "proyectos")}
            />
            <a
                href="#contacto"
                onClick={(e) => onNavClick(e, "contacto")}
                className={[
                    "ml-2 px-4 py-2 rounded-lg text-base transition-all duration-300 border",
                    activeSection === "contacto"
                        ? "bg-cyan-500 text-zinc-950 border-cyan-500"
                        : "bg-transparent text-white hover:bg-zinc-700",
                ].join(" ")}
            >
                Contacto
            </a>
        </nav>
    )
}