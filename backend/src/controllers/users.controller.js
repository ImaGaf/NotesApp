import { registerUser, loginUser } from '../services/users.services';

const registerUserHandler = async (req, res) => {
    try {
        const newUser = req.body;
        await registerUser(newUser);
        res.status(201).end();
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
};

const loginUserHandler = async (req, res) => {
    try {
        const { gmail, password } = req.body;
        const user = await loginUser(gmail, password);
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
};

export { registerUserHandler, loginUserHandler };
