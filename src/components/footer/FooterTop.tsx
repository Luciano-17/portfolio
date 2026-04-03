import RedSocial from "./RedSocial"

interface FooterTopProps {
    onContactClick: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export default function FooterTop({ onContactClick }: FooterTopProps) {
    return (
        <div className="bg-zinc-900 px-10 py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col gap-1.5">
                    <p className="text-zinc-100 font-bold text-xl leading-none text-center md:text-start">
                        Luciano Villarreal
                    </p>

                    <p className="text-cyan-400 text-xs md:text-sm uppercase tracking-[.12em] leading-none text-center md:text-start">
                        Fullstack Developer
                    </p>
                    
                    <p className="text-zinc-300 text-sm md:text-base mt-1 max-w-xs leading-relaxed text-center md:text-start">
                        Desarrollador web fullstack especializado en e-commerce y SaaS. Córdoba, Argentina.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-4">
                    <div className="flex gap-6">
                        <RedSocial
                            link="https://www.linkedin.com/in/luciano-villarreal-dev/"
                            bgColor="bg-[#0077b5]"
                            name="LinkedIn"
                            groupHover="group-hover:text-cyan-400"
                        />
                        <RedSocial
                            link="https://github.com/Luciano-17"
                            bgColor="bg-[#696969]"
                            name="GitHub"
                            groupHover="group-hover:text-gray-300"
                        />
                        <RedSocial
                            link="https://www.instagram.com/_lucianovi/"
                            bgColor="bg-[#b5417d]"
                            name="Instagram"
                            groupHover="group-hover:text-rose-400"
                        />
                        <RedSocial
                            link="http://wa.me/3515282167?text=Hola!%20Vengo%20de%20tu%20portafolio..."
                            bgColor="bg-[#2c8416]"
                            name="WhatsApp"
                            groupHover="group-hover:text-green-400"
                        />
                    </div>

                    <a
                        href="#contacto"
                        onClick={onContactClick}
                        className="bg-cyan-700 hover:bg-cyan-500 text-zinc-100 text-base font-bold px-5 py-2 mt-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Contactame →
                    </a>
                </div>
            </div>
        </div>
    )
}