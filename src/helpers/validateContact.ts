import type { FormData, FormErrors } from "../types/Types"
 
export function validate(data: FormData): FormErrors {
    const errors: FormErrors = {}
 
    if (!data.nombre.trim())   errors.nombre   = "Ingresá tu nombre"
    if (!data.apellido.trim()) errors.apellido = "Ingresá tu apellido"
    if (!data.contactMethod)   errors.contactMethod = "Seleccioná una opción"
 
    if (data.contactMethod === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(data.email.trim())) errors.email = "Ingresá un email válido"
    }
 
    if (data.contactMethod === "telefono") {
        if (!data.telefono.trim()) errors.telefono = "Ingresá tu teléfono"
    }
 
    if (!data.mensaje.trim()) errors.mensaje = "Escribí un mensaje"
 
    return errors
}