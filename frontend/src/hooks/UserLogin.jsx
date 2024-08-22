import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../store/slices/user.slice';

const UserLogin = () => {
    const [formData, setFormData] = useState({
        gmail: '',
        password: '',
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post('http://localhost:3000/api/users/login', formData);
            const { token, id } = response.data;
            dispatch(setCredentials({ token, id }));
            navigate('/notes');
        } catch (err) {
            setError(err.response?.data?.message || 'Email or Password does not match');
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

export default UserLogin;
