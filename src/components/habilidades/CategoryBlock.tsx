import { useEffect, useRef, useState } from "react"
import type { SkillCategory } from "../../data/skills"
import RingCard from "./RingCard"

interface CategoryBlockProps {
    category: SkillCategory
}

export default function CategoryBlock({ category }: CategoryBlockProps) {
    const ref      = useRef<HTMLDivElement>(null)
    const animRef  = useRef(false) // evita re-disparar la animación
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !animRef.current) {
                    animRef.current = true
                    setAnimate(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.15 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <div ref={ref} className="mb-10 md:px-5">
            <div className="flex items-center gap-3 mb-5 px-2 md:px-0">
                <span className="text-xs md:text-md font-medium uppercase text-zinc-900">
                    {category.label}
                </span>
                <div className="flex-1 h-px bg-zinc-900" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 px-5 md:px-0">
                {category.skills.map((skill) => (
                    <RingCard key={skill.name} skill={skill} animate={animate} />
                ))}
            </div>
        </div>
    )
}