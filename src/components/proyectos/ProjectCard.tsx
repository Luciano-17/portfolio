import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare, faImage } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import Tag from "./Tag"
import type { Project } from "./Types"

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div
            className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-zinc-600 transition-all duration-300"
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 2.5px 15px ${project.accentColor}`;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
            }}
        >
            <div
                className="w-full h-[150px] bg-zinc-800 flex items-center justify-center"
                style={{ borderTop: `5px solid ${project.accentColor}` }}
            >
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="flex flex-col items-center gap-2 text-zinc-300">
                        <FontAwesomeIcon icon={faImage} className="text-4xl md:text-6xl" />
                        <span className="text-sm md:text-base">Imagen del proyecto</span>
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-2 md:gap-3 p-4 flex-1">
                <h3 className="text-base md:text-lg font-medium text-white leading-snug">
                    {project.title}
                </h3>

                <p className="text-sm md:text-base text-zinc-400 leading-relaxed flex-1">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                        <Tag key={tag} tag={tag} />
                    ))}
                </div>
            </div>

            <div className="flex gap-4 px-4 py-4 border-t border-zinc-600">
                <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 md:px-3 rounded-lg text-sm md:text-base font-medium bg-white text-zinc-900 transition-all duration-300 hover:opacity-70"
                >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    Demo en vivo
                </a>

                <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 md:px-3 rounded-lg text-sm md:text-base font-medium border transition-all duration-300 border-zinc-500 text-zinc-200 hover:bg-zinc-700"
                >
                    <FontAwesomeIcon icon={faGithub} />
                    GitHub
                </a>
            </div>
        </div>
    )
}