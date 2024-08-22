import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useUserRegister = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        gmail: '',  
        password: ''
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            await axios.post('http://localhost:3000/api/users/register', formData);
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.message || 'Error registering');
        } finally {
            setLoading(false);
        }
    };

    return {
        formData,
        handleChange,
        handleSubmit,
        error,
        loading
    };
};

export default useUserRegister;
