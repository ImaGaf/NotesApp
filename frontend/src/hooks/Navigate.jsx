import { useNavigate } from 'react-router-dom';

const Navigate = () => {
    
    const navigate = useNavigate();

    const handleRegisterButton = () => navigate('/register');
    const handleLoginButton = () => navigate('/login');

    return {
        handleRegisterButton,
        handleLoginButton
    };
};

export default Navigate;
