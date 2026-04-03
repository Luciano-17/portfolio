import { TAG_STYLES, TAG_STYLE_FALLBACK, type FilterTag } from "./Types"

interface TagProps {
    tag: FilterTag
}

export default function Tag({ tag }: TagProps) {
    const s = TAG_STYLES[tag] ?? TAG_STYLE_FALLBACK
    return (
        <span className={`inline-block text-xs md:text-sm font-medium px-2 py-0.5 rounded-full ${s.bg} ${s.text}`}>
            {tag}
        </span>
    )
}