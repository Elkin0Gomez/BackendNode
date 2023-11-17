export const validateShema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body)
        next()
    } catch (error) {
        if (error.errors && error.errors.length > 0) {
            return res.status(400).json({ errors: error.errors.map(error => error.message)});
        } else {
            return res.status(400).json({ errors: ["Error de validación"] });
        }
    }
};
