import {z} from 'zod'

export const CrearContratoSchema = z.object({
    nombre : z.string({
        required_error: 'El nombre es requerido'
    }),
    apellido : z.string({
        required_error: 'El apellido es requerido'
    }),
    documento : z.string({
        required_error: 'La documento es requerida'
    }),
    fechaExpedicion : z.string({
        required_error: 'La fecha de expedición es requerida'
    }).datetime(),
    sueldo : z.string({
        required_error: 'El sueldo es requerido'
    }),
    cargo : z.string({
        required_error: 'El cargo es requerido'
    }),
    fechaInicio : z.string({
        required_error: 'La fecha de inicio es requerida'
    }).datetime(),
    fechaFin : z.string({
        required_error: 'La fecha del fin es requerida'
    }).datetime(),
})