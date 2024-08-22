import { createCathegory, getByUser, deleteCathegory } from '../services/cathegory.services';

const createCathegoryHandler = async (req, res) => {
    try {
        const newCathegory = req.body;
        const cathegory = await createCathegory(newCathegory);
        res.status(201).json(cathegory);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
};

const getByUserHandler = async (req, res) => {
    try {
        const { userId } = req.params;
        const cathegory = await getByUser(userId);
        res.status(200).json(cathegory);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
};

const deleteCathegoryHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const message = await deleteCathegory(id);
        res.status(200).json({ message });
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
};

export { createCathegoryHandler, getByUserHandler, deleteCathegoryHandler };
