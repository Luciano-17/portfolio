import CV from '../../public/cv/CV - Luciano Villarreal.pdf'
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { useScroll } from "../context/ScrollContext"

export default function PresentacionView() {
    const { scrollTo } = useScroll()

    const badgeRef   = useScrollAnimation("animate-slide-top")
    const titleRef   = useScrollAnimation("animate-slide-top")
    const textRef    = useScrollAnimation("animate-slide-left")
    const buttonsRef = useScrollAnimation("animate-slide-bottom")
    const imageRef   = useScrollAnimation("animate-slide-right")
    const statsRef   = useScrollAnimation("animate-slide-bottom")

    return (
        <section
            id="presentacion"
            className="relative w-full -mt-10 bg-cyan-950 overflow-hidden flex items-center shadow-md"
        >
            <div className="hidden md:block absolute right-[-100px] top-[-100px] w-[400px] h-[400px] rounded-full border border-cyan-900 pointer-events-none" />
            <div className="hidden md:block absolute right-[-40px] top-[-40px] w-[260px] h-[260px] rounded-full border border-cyan-800 pointer-events-none" />
            <div className="absolute left-[-130px] bottom-[-130px] w-[400px] h-[400px] rounded-full border border-cyan-900 pointer-events-none" />
            <div className="absolute left-[-70px] bottom-[-70px] w-[260px] h-[260px] rounded-full border border-cyan-800 pointer-events-none" />

            <div className="container mx-auto px-10 pt-32 pb-16 md:py-32 flex flex-col-reverse md:flex-row justify-between items-center gap-12 w-full">
                <div className="flex flex-col items-center md:items-start gap-8 w-full md:w-1/2">
                    <div
                        ref={badgeRef as React.RefObject<HTMLDivElement>}
                        className="hidden md:flex items-center gap-2 w-fit bg-cyan-900 border border-cyan-700 text-cyan-300 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded"
                    >
                        <span className="w-4 h-0.5 bg-cyan-400 rounded-full" />
                        Disponible · Córdoba, AR
                    </div>

                    <h1
                        ref={titleRef as React.RefObject<HTMLHeadingElement>}
                        className="text-3xl md:text-5xl text-center md:text-start font-bold text-zinc-100 leading-tight [animation-delay:200ms]"
                    >
                        ¡Hola! Soy <br />
                        <span className="text-cyan-500">Luciano Villarreal</span>
                    </h1>

                    <p
                        ref={textRef as React.RefObject<HTMLParagraphElement>}
                        className="text-zinc-100 text-base md:text-lg text-justify leading-relaxed [animation-delay:300ms]"
                    >
                        Desarrollador web fullstack con más de 3 años de experiencia en el ecosistema e-commerce. Actualmente integro el equipo de la agencia Wuala, donde desarrollo soluciones personalizadas, automatizaciones e integraciones para tiendas en PrestaShop, Shopify y Tienda Nube. Complemento mi experiencia profesional con la carrera de Ingeniería en Sistemas de Información en la UTN y formación continua en React, TypeScript y Node.js.
                    </p>

                    <div
                        ref={buttonsRef as React.RefObject<HTMLDivElement>}
                        className="flex gap-4 [animation-delay:400ms]"
                    >
                        <a
                            href={CV}
                            download
                            className="inline-block cursor-pointer rounded-xl text-sm md:text-base border border-cyan-600 bg-cyan-900 uppercase px-4 md:px-5 py-2 md:py-3 font-bold text-zinc-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-cyan-700"
                        >
                            Descargar
                            <span className="text-zinc-300"> ─ CV</span>
                        </a>

                        <button
                            onClick={() => scrollTo("sobreMi")}
                            className="inline-block cursor-pointer rounded-xl text-sm md:text-base border border-cyan-600 bg-transparent uppercase px-3 md:px-5 py-2 md:py-3 font-bold text-cyan-500 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-cyan-400 hover:bg-cyan-900 hover:text-cyan-300"
                        >
                            Conóceme
                        </button>
                    </div>
                </div>

                <div className="flex flex-col items-end gap-5 w-full md:w-5/12">
                    <div
                        ref={imageRef as React.RefObject<HTMLDivElement>}
                        className="relative w-full flex justify-center [animation-delay:300ms]"
                    >
                        <div className="absolute inset-0 rounded-3xl border-2 border-cyan-800 md:5/6 md:w-2/3 translate-x-3 md:translate-x-28 translate-y-3 md:translate-y-2" />
                        <img
                            src="/foto-perfil.jpg"
                            alt="Foto Luciano Villarreal"
                            className="relative rounded-3xl shadow-2xl w-full md:w-2/3 object-cover object-top aspect-[3/4]"
                        />
                    </div>

                    <div
                        ref={statsRef as React.RefObject<HTMLDivElement>}
                        className="flex justify-center w-full gap-2 md:gap-4 mt-5 [animation-delay:400ms]"
                    >
                        {[
                            { n: "4+",  label: "años exp."   },
                            { n: "15+", label: "proyectos"   },
                            { n: "10+", label: "tecnologías" },
                        ].map(({ n, label }) => (
                            <div
                                key={label}
                                className="flex-1 border border-cyan-700 rounded-xl px-1 py-2 md:p-3 text-center"
                                style={{ background: "rgba(255,255,255,0.04)" }}
                            >
                                <p className="text-cyan-500 text-lg md:text-xl font-extrabold leading-none">{n}</p>
                                <p className="text-zinc-300 text-xs md:text-sm font-medium uppercase tracking-wide mt-1">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}