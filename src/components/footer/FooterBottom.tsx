interface FooterBottomProps {
    currentYear: number
    onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void
}
 
const FOOTER_LINKS = [
    { id: "presentacion", label: "Inicio"      },
    { id: "habilidades",  label: "Habilidades" },
    { id: "proyectos",    label: "Proyectos"   },
]
 
export default function FooterBottom({ currentYear, onLinkClick }: FooterBottomProps) {
    return (
        <div className="bg-zinc-950 px-10 py-4">
            <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-4">
                <p className="text-zinc-300 text-sm md:text-base text-center md:text-start">
                    © {currentYear} Luciano Villarreal - Todos los derechos reservados.
                </p>

                <div className="flex gap-5">
                    {FOOTER_LINKS.map(({ id, label }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            onClick={(e) => onLinkClick(e, id)}
                            className="text-zinc-400 text-base hover:text-zinc-200 transition-colors duration-300"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}