export type FilterTag =
    | "javascript"
    | "typescript"
    | "react"
    | "node"
    | "php"
    | "mysql"
    | "mongodb"
    | "prestashop"
    | "tienda nube"
    | "shopify"
 
export interface Project {
    title: string
    description: string
    image?: string
    tags: FilterTag[]
    demo: string
    repo: string
    accentColor: string
}
 
export const TAG_STYLES: Record<FilterTag, { bg: string; text: string }> = {
    javascript:    { bg: "bg-yellow-100 dark:bg-yellow-600/30", text: "text-yellow-800 dark:text-yellow-600" },
    typescript:    { bg: "bg-blue-100 dark:bg-blue-600/30",     text: "text-blue-800 dark:text-blue-600" },
    react:         { bg: "bg-cyan-100 dark:bg-cyan-600/30",     text: "text-cyan-800 dark:text-cyan-600" },
    node:          { bg: "bg-green-100 dark:bg-green-600/30",   text: "text-green-800 dark:text-green-600" },
    php:           { bg: "bg-purple-50 dark:bg-purple-600/30",  text: "text-purple-400 dark:text-purple-600" },
    mysql:         { bg: "bg-amber-100 dark:bg-amber-600/30",   text: "text-amber-800 dark:text-amber-600" },
    mongodb:       { bg: "bg-emerald-100 dark:bg-emerald-600/30", text: "text-emerald-800 dark:text-emerald-600" },
    prestashop:    { bg: "bg-orange-100 dark:bg-orange-600/30", text: "text-orange-800 dark:text-orange-600" },
    "tienda nube": { bg: "bg-sky-100 dark:bg-sky-600/30",       text: "text-sky-800 dark:text-sky-600" },
    shopify:       { bg: "bg-lime-100 dark:bg-lime-600/30",     text: "text-lime-800 dark:text-lime-600" },
}
 
export const TAG_STYLE_FALLBACK = {
    bg: "bg-zinc-100 dark:bg-zinc-800",
    text: "text-zinc-600 dark:text-zinc-300",
}