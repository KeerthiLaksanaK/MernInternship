import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState({ email: '', username: '', password: '' });
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const endpoint = isSignup ? '/signup' : '/login';
            const payload = isSignup 
                ? { email: formData.email, username: formData.username, password: formData.password }
                : { email: formData.email, password: formData.password };

            const response = await axios.post(`http://localhost:8001${endpoint}`, payload);
            
            setMessage(response.data.Message || response.data.message);
            if (response.data.isSignup) {
                setFormData({ email: '', username: '', password: '' });
                setTimeout(() => setIsSignup(false), 1500);
            }
            if (response.data.isLoggedIn) {
                localStorage.setItem('isLogin', 'true');
                setFormData({ email: '', username: '', password: '' });
                setTimeout(() => navigate('/'), 1500);
            }
        } catch (error) {
            setMessage(error.response?.data?.message || error.response?.data?.Message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <h1>{isSignup ? 'Signup' : 'Login'}</h1>
            {message && (
                <div className={`message ${message.includes('Successful') || message.includes('successful') ? 'success' : 'error'}`}>
                    {message}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                    />
                </div>
                <br />
                {isSignup && (
                    <>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input 
                                type="text" 
                                name="username" 
                                id="username" 
                                value={formData.username}
                                onChange={handleInputChange}
                                required 
                            />
                        </div>
                        <br />
                    </>
                )}
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        value={formData.password}
                        onChange={handleInputChange}
                        required 
                    />
                </div>
                <br />
                <button type="submit" disabled={loading}>
                    {loading ? 'Processing...' : (isSignup ? 'Signup' : 'Login')}
                </button>
                <p>
                    {isSignup ? 'Already have an account?' : "Don't have an account?"}
                    <button 
                        type="button" 
                        onClick={() => {
                            setIsSignup(!isSignup);
                            setMessage('');
                            setFormData({ email: '', username: '', password: '' });
                        }}
                        style={{background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer', marginLeft: '5px'}}
                    >
                        {isSignup ? 'Login' : 'Signup'}
                    </button>
                </p>
            </form>
        </div>
    );
}
export default Login;