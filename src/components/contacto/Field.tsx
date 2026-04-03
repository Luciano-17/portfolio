interface FieldProps {
    label: string
    error?: string
    children: React.ReactNode
}

export function inputCls(hasError: boolean): string {
    return [
        "w-full px-3 py-2.5 text-sm md:text-base rounded-lg outline-none transition-colors",
        "bg-zinc-900",
        "text-white",
        "placeholder:text-zinc-500",
        hasError
            ? "border border-red-500 focus:border-red-500"
            : "border border-zinc-400 focus:border-cyan-400",
    ].join(" ")
}

export default function Field({ label, error, children }: FieldProps) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-sm md:text-base font-medium text-zinc-200">
                {label}
            </label>

            {children}

            {error && (
                <span className="text-sm md:text-base text-red-500">{error}</span>
            )}
        </div>
    )
}