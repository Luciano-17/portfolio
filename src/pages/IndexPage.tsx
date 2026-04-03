import ContactoView from "../views/ContactoView"
import HabilidadesView from "../views/HabilidadesView"
import PresentacionView from "../views/PresentacionView"
import ProyectosView from "../views/ProyectosView"
import SobreMi from "../views/SobreMi"

export default function IndexPage() {
    return (
        <>
            <PresentacionView />

            <SobreMi />

            <HabilidadesView />

            <ProyectosView />

            <ContactoView />
        </>
    )
}
