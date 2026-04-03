export type SkillLevel = "basico" | "medio" | "intermedio" | "experto"

export interface Skill {
    name: string
    level: SkillLevel
    color: string
    emoji: string
}

export interface SkillCategory {
    label: string
    skills: Skill[]
}

const skills: SkillCategory[] = [
    {
        label: "Frontend y Backend",
        skills: [
            { name: "Tailwind",   level: "experto",    color: "#38BDF8", emoji: "🎨" },
            { name: "Bootstrap",  level: "experto",    color: "#38BDF8", emoji: "🎨" },
            { name: "Javascript", level: "experto",    color: "#cfcc1f", emoji: "⭐" },
            { name: "TypeScript", level: "intermedio", color: "#3178C6", emoji: "🔷" },
            { name: "React.js",   level: "intermedio", color: "#61DAFB", emoji: "⚛️"  },
            { name: "Node.js",    level: "medio",      color: "#68A063", emoji: "🟢" },
            { name: "PHP",        level: "intermedio", color: "#8123b8", emoji: "🐘" },
        ],
    },
    {
        label: "Bases de datos",
        skills: [
            { name: "MySQL",      level: "experto",    color: "#4169E1", emoji: "📋" },
            { name: "PostgreSQL", level: "experto",    color: "#3553ad", emoji: "📝" },
            { name: "MongoDB",    level: "intermedio", color: "#4CAF50", emoji: "🍃" },
        ],
    },
    {
        label: "E-commerce",
        skills: [
            { name: "PrestaShop",  level: "experto",    color: "#9620ad", emoji: "🐧" },
            { name: "Tienda Nube", level: "experto",    color: "#295ecf", emoji: "💳" },
            { name: "Shopify",     level: "intermedio", color: "#8bbb32", emoji: "🛍️" },
            { name: "WooCommerce", level: "medio",      color: "#a33b29", emoji: "🛒" },
        ],
    },
]

export default skills