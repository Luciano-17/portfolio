import { faSquareCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface ContactSuccessProps {
    nombre: string
    onReset: () => void
}

export default function ContactSuccess({ nombre, onReset }: ContactSuccessProps) {
    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 flex flex-col items-center gap-4 text-center w-11/12 md:w-1/3 mx-auto">
            <div className="w-12 h-12 rounded-full bg-green-950 flex items-center justify-center text-green-400 text-2xl">
                <FontAwesomeIcon icon={faSquareCheck} />
            </div>

            <div>
                <p className="text-lg font-medium text-white mb-1">
                    ¡Mensaje enviado!
                </p>
                <p className="text-base text-zinc-500 dark:text-zinc-400">
                    Gracias por escribir, {nombre}. Me pongo en contacto a la brevedad.
                </p>
            </div>

            <button
                onClick={onReset}
                className="text-base text-cyan-400 border border-transparent duration-200 transition-all hover:border-b-cyan-200 hover:text-cyan-200 mt-2"
            >
                Enviar otro mensaje
            </button>
        </div>
    )
}