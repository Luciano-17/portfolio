import { useState } from "react"
import ContactForm from "../components/contacto/ContactForm"
import ContactSuccess from "../components/contacto/ContactSuccess"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLightbulb } from "@fortawesome/free-solid-svg-icons"

export default function ContactoView() {
    const [submitted, setSubmitted] = useState(false)
    const [nombre, setNombre]       = useState("")

    function handleSuccess(nombreUsuario: string) {
        setNombre(nombreUsuario)
        setSubmitted(true)
    }

    function handleReset() {
        setNombre("")
        setSubmitted(false)
    }

    return (
        <section className="container mx-auto mt-20 md:mt-52 mb-20" id="contacto">
            <div
                className="text-center mb-10"
            >
                <p className="text-cyan-600 text-base font-bold uppercase tracking-[.15em] mb-2">
                    Aqui puedes
                </p>

                <h2 className="text-4xl font-bold text-zinc-900">
                    Contactarme
                </h2>
            </div>

            <div className="flex gap-2 justify-center items-center mb-5">
                <FontAwesomeIcon icon={faLightbulb} className="text-cyan-600 text-2xl md:text-4xl" />
                <p className="text-zinc-900 font-normal text-base md:text-xl tracking-tighter">
                    ¿Tienes algun proyecto en mente? <br />
                    Me encantaría escucharte y ayudarte a construirlo.
                </p>
            </div>

            {submitted ? (
                <ContactSuccess nombre={nombre} onReset={handleReset} />
            ) : (
                <ContactForm onSuccess={handleSuccess} />
            )}
        </section>
    )
}