import { useState } from "react"
import emailjs from "@emailjs/browser"
import type { FormData, FormErrors } from "../../types/Types"
import { validate } from "../../helpers/validateContact"
import Field, { inputCls } from "./Field"
import ContactOption from "./ContactOption"

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

interface ContactFormProps {
    onSuccess: (nombre: string) => void
}

const INITIAL_FORM: FormData = {
    nombre: "",
    apellido: "",
    contactMethod: null,
    email: "",
    telefono: "",
    mensaje: "",
}

type SendStatus = "idle" | "sending" | "error"

export default function ContactForm({ onSuccess }: ContactFormProps) {
    const [form,   setForm]   = useState<FormData>(INITIAL_FORM)
    const [errors, setErrors] = useState<FormErrors>({})
    const [status, setStatus] = useState<SendStatus>("idle")

    function update(field: keyof FormData, value: string) {
        setForm((prev) => ({ ...prev, [field]: value }))
        if (errors[field as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }))
        }
    }

    function selectMethod(method: "email" | "telefono") {
        setForm((prev) => ({
            ...prev,
            contactMethod: method,
            email:    method === "telefono" ? "" : prev.email,
            telefono: method === "email"    ? "" : prev.telefono,
        }))
        setErrors((prev) => ({
            ...prev,
            contactMethod: undefined,
            email:         undefined,
            telefono:      undefined,
        }))
    }

    async function handleSubmit() {
        const errs = validate(form)
        if (Object.keys(errs).length > 0) {
            setErrors(errs)
            return
        }

        setStatus("sending")

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    nombre:   form.nombre,
                    apellido: form.apellido,
                    contacto: form.contactMethod === "email"
                        ? `Email: ${form.email}`
                        : `Teléfono: ${form.telefono}`,
                    mensaje:  form.mensaje,
                },
                EMAILJS_PUBLIC_KEY
            )

            setStatus("idle")
            onSuccess(form.nombre)

        } catch (error) {
            console.error("Error EmailJS:", error)
            setStatus("error")
        }
    }

    return (
        <div className="flex flex-col gap-4 w-11/12 md:w-3/6 mx-auto border border-zinc-300 p-6 rounded-xl bg-zinc-900 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Nombre" error={errors.nombre}>
                    <input type="text" placeholder="Juan" value={form.nombre}
                        onChange={(e) => update("nombre", e.target.value)}
                        className={inputCls(!!errors.nombre)} />
                </Field>
                <Field label="Apellido" error={errors.apellido}>
                    <input type="text" placeholder="Pérez" value={form.apellido}
                        onChange={(e) => update("apellido", e.target.value)}
                        className={inputCls(!!errors.apellido)} />
                </Field>
            </div>

            <div className="flex flex-col gap-2">
                <span className="text-sm md:text-base font-medium text-zinc-200">
                    Preferencia de contacto
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ContactOption value="email"    label="Email"    hint="Te escribo por correo"  selected={form.contactMethod === "email"}    onSelect={selectMethod} />
                    <ContactOption value="telefono" label="Teléfono" hint="Te escribo por celular" selected={form.contactMethod === "telefono"} onSelect={selectMethod} />
                </div>
                {errors.contactMethod && (
                    <span className="text-base text-red-500">{errors.contactMethod}</span>
                )}
            </div>

            <div className={["overflow-hidden transition-all duration-300",
                form.contactMethod === "email" ? "max-h-32 opacity-100" : "max-h-0 opacity-0"].join(" ")}>
                <Field label="Correo electrónico" error={errors.email}>
                    <input type="email" placeholder="juan@ejemplo.com" value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className={inputCls(!!errors.email)} />
                </Field>
            </div>

            <div className={["overflow-hidden transition-all duration-300",
                form.contactMethod === "telefono" ? "max-h-32 opacity-100" : "max-h-0 opacity-0"].join(" ")}>
                <Field label="Teléfono" error={errors.telefono}>
                    <input type="tel" placeholder="+54 9 351 1234-567" value={form.telefono}
                        onChange={(e) => update("telefono", e.target.value)}
                        className={inputCls(!!errors.telefono)} />
                </Field>
            </div>

            <Field label="Mensaje" error={errors.mensaje}>
                <textarea placeholder="Contame en qué puedo ayudarte..." value={form.mensaje}
                    onChange={(e) => update("mensaje", e.target.value)}
                    rows={4} className={inputCls(!!errors.mensaje) + " resize-y leading-relaxed"} />
            </Field>

            {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                    Hubo un error al enviar. Intentá de nuevo o escribime por WhatsApp.
                </p>
            )}

            <button
                type="button"
                onClick={handleSubmit}
                disabled={status === "sending"}
                className={[
                    "w-full md:w-2/6 mx-auto py-2 md:py-2.5 rounded-xl text-base md:text-lg font-medium transition-all mt-5",
                    status === "sending"
                        ? "bg-zinc-500 text-zinc-300 cursor-not-allowed"
                        : "bg-white text-zinc-900 hover:opacity-80",
                ].join(" ")}
            >
                {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            </button>
        </div>
    )
}