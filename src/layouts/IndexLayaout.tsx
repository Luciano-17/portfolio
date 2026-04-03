import { Outlet } from "react-router-dom"
import { useActiveSection } from "../hooks/useActiveSection"
import { ScrollContext } from "../context/ScrollContext"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"

const SECTION_IDS = ["presentacion", "sobreMi", "habilidades", "proyectos", "contacto"]

export default function IndexLayout() {
    const currentYear = new Date().getFullYear()
    const { activeSection, scrollTo } = useActiveSection(SECTION_IDS)

    function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
        e.preventDefault()
        scrollTo(id)
    }

    return (
        <ScrollContext.Provider value={{ activeSection, scrollTo }}>
            <Navbar
                activeSection={activeSection}
                onNavClick={handleNavClick}
            />

            <main className="bg-zinc-100 text-zinc-900 py-10">
                <Outlet />
            </main>

            <Footer
                currentYear={currentYear}
                scrollTo={scrollTo}
            />
        </ScrollContext.Provider>
    )
}