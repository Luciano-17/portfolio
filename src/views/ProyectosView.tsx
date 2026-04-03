import { useState } from "react"
import projectsData from "../data/projects.json"
import { type FilterTag, type Project } from "../components/proyectos/Types"
import ProjectFilters from "../components/proyectos/ProjectFilter"
import ProjectCard from "../components/proyectos/ProjectCard"

const PROJECTS = projectsData as Project[]
const ALL_FILTERS = [...new Set(PROJECTS.flatMap((p) => p.tags))] as FilterTag[]

export default function ProyectosView() {
    const [activeFilters, setActiveFilters] = useState<Set<FilterTag>>(new Set())

    function toggleFilter(tag: FilterTag) {
        setActiveFilters((prev) => {
            const next = new Set(prev)
            next.has(tag) ? next.delete(tag) : next.add(tag)
            return next
        })
    }

    const filtered =
        activeFilters.size === 0
        ? PROJECTS
        : PROJECTS.filter((p) =>
            [...activeFilters].every((tag) => p.tags.includes(tag))
        )

    return (
        <section className="container mx-auto mt-20 md:mt-52 md:px-5" id="proyectos">
            <div
                className="text-center mb-10 md:mb-16"
            >
                <p className="text-cyan-600 text-base font-bold uppercase tracking-[.15em] mb-2">
                    Conóce
                </p>

                <h2 className="text-4xl font-bold text-zinc-900">
                    Mis proyectos destacados
                </h2>
            </div>

            <ProjectFilters
                allFilters={ALL_FILTERS}
                activeFilters={activeFilters}
                totalProjects={PROJECTS.length}
                filteredCount={filtered.length}
                onToggle={toggleFilter}
                onClear={() => setActiveFilters(new Set())}
            />

            {filtered.length === 0 ? (
                <div className="border border-dashed border-zinc-300 dark:border-zinc-700 rounded-2xl p-12 mx-3 md:mx-0 text-center text-zinc-950 text-base">
                    Ningún proyecto coincide con los filtros seleccionados.
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 md:px-0">
                    {filtered.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            )}
        </section>
    )
}