import type { Skill, SkillLevel } from "../../data/skills"

const R    = 29
const CX   = 36
const CY   = 36
const CIRC = 2 * Math.PI * R

const LEVEL_MAP: Record<SkillLevel, { pct: number; label: string }> = {
    basico:      { pct: 25,  label: "Básico"       },
    medio:       { pct: 50,  label: "Medio"        },
    intermedio:  { pct: 75,  label: "Intermedio"   },
    experto:     { pct: 100, label: "Experto"      },
}

interface RingCardProps {
    skill: Skill
    animate: boolean
}

export default function RingCard({ skill, animate }: RingCardProps) {
    const { pct, label } = LEVEL_MAP[skill.level]
    const offset = CIRC * (1 - pct / 100)

    return (
        <div className="group flex flex-col items-center bg-zinc-900 hover:bg-zinc-800 hover:shadow-lg hover:shadow-cyan-200 border border-cyan-600 rounded-2xl px-2 md:px-3 py-3 md:py-5 text-center transition-all duration-200 hover:-translate-y-1 cursor-default">
            <div className="relative w-[72px] h-[72px] mb-1 md:mb-3">
                <svg viewBox="0 0 72 72" className="w-full h-full">
                    <circle
                        cx={CX} cy={CY} r={R}
                        fill="none"
                        stroke="#131314"
                        strokeWidth={5}
                    />
                    
                    <circle
                        cx={CX} cy={CY} r={R}
                        fill="none"
                        stroke={skill.color}
                        strokeWidth={5}
                        strokeLinecap="round"
                        strokeDasharray={CIRC}
                        strokeDashoffset={animate ? offset : CIRC}
                        transform={`rotate(-90 ${CX} ${CY})`}
                        style={{
                            transition: animate
                                ? "stroke-dashoffset 1.1s cubic-bezier(0.4,0,0.2,1)"
                                : "none",
                        }}
                    />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center text-2xl select-none">
                    {skill.emoji}
                </div>
            </div>

            <p className="text-md font-medium text-white leading-tight mb-1">
                {skill.name}
            </p>

            <p className="text-sm text-gray-300 mb-3">{label}</p>

            <div className="w-full h-[3px] rounded-full bg-gray-950 overflow-hidden">
                <div
                    className="h-full rounded-full"
                    style={{
                        background: skill.color,
                        width: animate ? `${pct}%` : "0%",
                        transition: animate
                            ? "width 1.3s cubic-bezier(0.4,0,0.2,1) 0.1s"
                            : "none",
                    }}
                />
            </div>
        </div>
    )
}