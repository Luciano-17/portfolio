export type ContactMethod = "email" | "telefono"
 
export interface FormData {
    nombre: string
    apellido: string
    contactMethod: ContactMethod | null
    email: string
    telefono: string
    mensaje: string
}
 
export interface FormErrors {
    nombre?: string
    apellido?: string
    contactMethod?: string
    email?: string
    telefono?: string
    mensaje?: string
}