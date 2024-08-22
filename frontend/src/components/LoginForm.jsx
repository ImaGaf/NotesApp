import React from 'react';
import UserLogin from '../hooks/UserLogin';
import useNavigate from '../hooks/Navigate';

const LoginForm = () => {
    const { handleRegisterButton } = useNavigate();
    const {
        formData,
        handleChange,
        handleSubmit,
        error,
        loading
    } = UserLogin();

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-300">
            <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {error && <p className="text-red-500">{error}</p>}
                    <div>
                        <label htmlFor="gmail" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            id="gmail"
                            name="gmail"
                            value={formData.gmail}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <button
                            type="button"
                            onClick={handleRegisterButton}
                            className='text-red-500'
                        >
                            Don't have an account? Register
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gray-600 hover:bg-gray-700  text-white py-2 rounded-md"
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
