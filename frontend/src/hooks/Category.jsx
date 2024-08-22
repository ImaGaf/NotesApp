import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Category = () => {
    const userid = useSelector((state) => state.user.id);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [isCategoryLoading, setIsCategoryLoading] = useState(true);
    const [categoryError, setCategoryError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            if (!userid) return;
            setIsCategoryLoading(true);
            setCategoryError(null);
            try {
                const response = await axios.get(`http://localhost:3000/api/cathegory/getByUser/${userid}`);
                setCategories(response.data);
            } catch (err) {
                setCategoryError('Error fetching categories');
            } finally {
                setIsCategoryLoading(false);
            }
        };

        fetchCategories();
    }, [userid]);

    const handleAddCategory = async () => {
        if (!newCategory.trim()) {
            alert('Please enter a category name.');
            return;
        }
        try {
            await axios.post('http://localhost:3000/api/cathegory/create', {
                cathegory: newCategory,
                userid
            });
            const response = await axios.get(`http://localhost:3000/api/cathegory/getByUser/${userid}`);
            setCategories(response.data);
            setNewCategory('');
        } catch (error) {
            console.error('Error adding category:', error);
        }
    };

    return {
        categories,
        selectedCategory,
        setSelectedCategory,
        newCategory,
        setNewCategory,
        isCategoryLoading,
        categoryError,
        handleAddCategory
    };
};

export default Category;
