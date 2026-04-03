type NavProps = {
    href: string
    name: string
    isActive?: boolean
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export default function Nav({ href, name, isActive = false, onClick }: NavProps) {
    return (
        <a
            href={href}
            onClick={onClick}
            className={[
                "relative flex items-center gap-1.5 font-normal text-base transition-all duration-300",
                "after:block after:absolute after:-bottom-1 after:left-0 after:right-0",
                "after:transition-transform after:duration-300 after:origin-left",
                isActive
                    ? "text-cyan-400 after:scale-x-100"
                    : "text-gray-50 hover:text-cyan-400 after:scale-x-0 hover:after:scale-x-100",
            ].join(" ")}
        >
            <span
                className={[
                    "w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 transition-all duration-300",
                    isActive ? "opacity-100 scale-100" : "opacity-0 scale-0",
                ].join(" ")}
            />
            {name}
        </a>
    )
}