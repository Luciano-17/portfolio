import FooterTop from "./FooterTop"
import FooterBottom from "./FooterBottom"

interface FooterProps {
    currentYear: number
    scrollTo: (id: string) => void
}

export default function Footer({ currentYear, scrollTo }: FooterProps) {
    function handleLinkClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
        e.preventDefault()
        scrollTo(id)
    }

    return (
        <footer>
            <FooterTop
                onContactClick={(e) => handleLinkClick(e, "contacto")}
            />
            <FooterBottom
                currentYear={currentYear}
                onLinkClick={handleLinkClick}
            />
        </footer>
    )
}