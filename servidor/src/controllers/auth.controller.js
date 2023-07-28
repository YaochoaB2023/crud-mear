import User from '../models/user.models.js';
import bcrypt from 'bcryptjs';
import { createTokenAcces } from '../libs/jwt.js';

export const register = async (req, res) => {
    // desestructurar el body que se envia
    const {email, password, username} = req.body;

    // console.log(email, password, username);
    // res.send('registrando')

    try {
        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = new User ({
            username,
            email,
            password: passwordHash
        });

        const userSaved = await newUser.save();
        const token = await createTokenAcces({ id: userSaved._id });
        res.cookie('token', token);
        res.status(201).json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email
        });

    } catch (error) {
        res.status(500).json({ message: error.message});     
    }
};

export const login = async (req, res) => {
    // desestructurar el body que se envia
    const {email, password} = req.body;

    // console.log(email, password, username);
    // res.send('registrando')

    try {
        const userFound = await User.findOne({ email });
        if(!userFound) return res.status(400).json({ message : "usuario no encontrado" });

        const isMatch = await bcrypt.compare(password, userFound.password);
        if(!isMatch) return res.status(400).json({ message : "error en credenciales" });




        const token = await createTokenAcces({ id: userFound._id });
        res.cookie('token', token);
        res.status(201).json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email
        });

    } catch (error) {
        res.status(500).json({ message: error.message});     
    }
};

export const logout = (req, res) => {
    res.cookie('token', '', {
        expires : new Date(0),
    });
    return res.sendStatus(200);
}

export const profile = async (req, res) => {
    res.send('profile')
}