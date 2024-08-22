import Cathegory from "../models/cathegory";

const createCathegory = async (newCathegory) => {
    try {
        return await Cathegory.create(newCathegory);
    } catch (error) {
        console.log(error)
        throw new Error('Error creating category');
    }
};

const getByUser = async (userid) => {
    try {
        if (!userid) {
            throw new Error('User ID is required');
        }
        return await Cathegory.findAll({ where: { userid } });
    } catch (error) {
        console.log(error)
        throw new Error('Error fetching categories from this User');
    }
};

const deleteCathegory = async (id) => {
    try {
        const rowsDeleted = await Cathegory.destroy({ where: { id } });
        if (!rowsDeleted) {
            throw new Error('Category not found');
        }
        return 'Category deleted successfully';
    } catch (error) {
        throw new Error('Error deleting category');
    }
};

export { createCathegory, getByUser, deleteCathegory };
