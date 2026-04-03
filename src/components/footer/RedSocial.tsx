import { faGithub, faInstagram, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type RedSocialProps = {
    link: string
    bgColor: string
    name: "LinkedIn" | "GitHub" | "Instagram" | "WhatsApp"
    groupHover: string
}

const iconMap = {
    LinkedIn: faLinkedinIn,
    GitHub: faGithub,
    Instagram: faInstagram,
    WhatsApp: faWhatsapp,
}

export default function RedSocial({link, bgColor, name, groupHover} : RedSocialProps) {
    return (
        <section className="flex justify-center items-center">
            <a
                href={link}
                target="_blank"
                className={`group text-2xl flex justify-center p-2 rounded-md drop-shadow-xl ${bgColor} from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]`}
            >
                <FontAwesomeIcon icon={iconMap[name]} />

                <span className={`absolute text-sm opacity-0 group-hover:opacity-100 ${groupHover} group-hover:text-sm group-hover:-translate-y-8 duration-500`}>
                    {name}
                </span>
            </a>
        </section>
    )
}
