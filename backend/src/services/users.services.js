import User from '../models/users';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const registerUser = async (newUser) => {
    try {
        newUser.password = await bcrypt.hash(newUser.password, 10);
        return await User.create(newUser);
    } catch (error) {
        throw new Error('Error registering user');
    }
};

const loginUser = async (gmail, password) => {
    try {
        const user = await User.findOne({ where: { gmail } });
        const copyUser = { ...user.dataValues };
        delete copyUser.password;

        const token = jwt.sign(copyUser, process.env.JWT_SECRET, {
            algorithm: 'HS512',
            expiresIn: '1hr'
        });
        copyUser.token = token;
        return copyUser;
    } catch (error) {
        console.log(error)
        throw new Error('Login failed');
    }
};

export { registerUser, loginUser };
