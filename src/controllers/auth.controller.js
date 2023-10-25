import User from '../models/users.model.js'

export const register = async (req, res) => {
    const {username, email, password} = req.body

    try {
        const newUser = new User({
            username,
            email,
            password
        });
        
        await newUser.save()
        res.send('registrando')
    } catch (error) {
        console.log(error)
    }

};

export const login = (req, res) => res.send("login");