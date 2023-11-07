import {z} from 'zod'

export const regiterShema = z.object({
    username : z.string({
        required_error: 'Username is required'
    }),
    email : z.string({
        required_error: 'Email is required'
    }).email({
        message: 'email is invalid'
    }),
    password : z.string({
        required_error: 'Password is required'
    }).min(6, {
        message: 'Password must be at least 6 characters'
    })
})

export const loginSchema = z.object({
    email : z.string({
        required_error: 'El correo es requerido'
    }).email({
        message: 'El correo es invalido'
    }),
    password : z.string({
        required_error: 'La contraseña es requerida'
    }).min(6, {
        message: 'La contraseña debe tener como minimo 6 caracteres'
    })
})