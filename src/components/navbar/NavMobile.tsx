interface NavMobileProps {
    menuOpen: boolean
    onToggle: () => void
}

export default function NavMobile({ menuOpen, onToggle }: NavMobileProps) {
    return (
        <button
            onClick={onToggle}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Abrir menú"
        >
            <span className={["block w-6 h-0.5 bg-gray-50 rounded transition-all duration-300", menuOpen ? "rotate-45 translate-y-2" : ""].join(" ")} />
            <span className={["block w-6 h-0.5 bg-gray-50 rounded transition-all duration-300", menuOpen ? "opacity-0" : ""].join(" ")} />
            <span className={["block w-6 h-0.5 bg-gray-50 rounded transition-all duration-300", menuOpen ? "-rotate-45 -translate-y-2" : ""].join(" ")} />
        </button>
    )
}