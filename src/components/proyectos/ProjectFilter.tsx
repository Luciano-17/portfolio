import { TAG_STYLES, TAG_STYLE_FALLBACK, type FilterTag } from "./Types"

interface ProjectFiltersProps {
    allFilters: FilterTag[]
    activeFilters: Set<FilterTag>
    totalProjects: number
    filteredCount: number
    onToggle: (tag: FilterTag) => void
    onClear: () => void
}

export default function ProjectFilters({
    allFilters,
    activeFilters,
    totalProjects,
    filteredCount,
    onToggle,
    onClear,
}: ProjectFiltersProps) {
    return (
        <>
            <div className="grid grid-cols-3 md:flex md:flex-wrap gap-2 mb-4 px-2 md:px-0">
                <button
                    onClick={onClear}
                    className={`px-3 py-1.5 rounded-full text-sm md:text-lg font-medium border transition-all ${
                        activeFilters.size === 0
                        ? "bg-zinc-800 text-white border-transparent"
                        : "border-zinc-700 text-zinc-500 hover:border-zinc-900 hover:text-zinc-900"
                    }`}
                >
                    Todos
                </button>

                {allFilters.map((tag) => {
                    const s = TAG_STYLES[tag] ?? TAG_STYLE_FALLBACK
                    const isActive = activeFilters.has(tag)
                    return (
                        <button
                            key={tag}
                            onClick={() => onToggle(tag)}
                            className={`px-3 py-1.5 rounded-full text-sm md:text-lg font-medium border transition-all duration-300 ${
                                isActive
                                ? `${s.bg} ${s.text} border-transparent`
                                : `border-zinc-800 text-zinc-800 hover:border-zinc-950 hover:text-zinc-950 hover:bg-zinc-200`
                            }`}
                        >
                            {tag}
                        </button>
                    )
                })}
            </div>

            <p className="text-sm md:text-base text-zinc-800 mb-6 pl-3 md:pl-0">
                {activeFilters.size === 0
                    ? `${totalProjects} proyectos`
                    : `${filteredCount} de ${totalProjects} proyectos`}
            </p>
        </>
    )
}