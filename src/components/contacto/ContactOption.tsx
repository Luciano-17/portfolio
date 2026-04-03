import { faEnvelope, faMobileScreen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { ContactMethod } from "../../types/Types"

interface ContactOptionProps {
    value: ContactMethod
    label: string
    hint: string
    selected: boolean
    onSelect: (v: ContactMethod) => void
}

const ICONS: Record<ContactMethod, React.ReactNode> = {
    email:    <FontAwesomeIcon icon={faEnvelope} />,
    telefono: <FontAwesomeIcon icon={faMobileScreen} />,
}

export default function ContactOption({ value, label, hint, selected, onSelect }: ContactOptionProps) {
    return (
        <button
            type="button"
            onClick={() => onSelect(value)}
            className={[
                "flex items-center gap-3 p-3 rounded-xl border text-left transition-all",
                selected
                    ? "border-zinc-400 bg-zinc-700"
                    : "border-zinc-700 bg-zinc-900 hover:bg-zinc-700",
            ].join(" ")}
        >
            <div
                className={[
                    "w-8 md:w-10 h-8 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                    selected
                        ? "bg-blue-900 text-cyan-600 dark:text-cyan-300"
                        : "bg-zinc-800 text-zinc-300 dark:text-zinc-400",
                ].join(" ")}
            >
                {ICONS[value]}
            </div>

            <div className="flex flex-col">
                <span className="text-base md:text-lg font-medium text-white">{label}</span>
                <span className="text-sm md:text-base text-zinc-300">{hint}</span>
            </div>
        </button>
    )
}