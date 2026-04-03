import CategoryBlock from "../components/habilidades/CategoryBlock"
import skills from "../data/skills"

export default function HabilidadesView() {
    return (
        <section className="container mx-auto mt-20 md:mt-40" id="habilidades">
            <div
                className="text-center mb-16"
            >
                <p className="text-cyan-600 text-base font-bold uppercase tracking-[.15em] mb-2">
                    Conóce
                </p>

                <h2 className="text-4xl font-bold text-zinc-900">
                    Mis habilidades
                </h2>
            </div>

            {skills.map((category) => (
                <CategoryBlock key={category.label} category={category} />
            ))}
        </section>
    )
}