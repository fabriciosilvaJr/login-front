
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const login = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                email,
                password
            });
            setSuccessMessage(response.data.message);
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setErrorMessage('Credenciais inválidas');
            } else if (error.response && error.response.status === 422) {
                setErrorMessage('Dados inválidos');
            } else {
                setErrorMessage('Erro ao tentar fazer login');
            }
        }
    };

    return (
        <div className="container">
            <div className='left-side'>

            </div>
            <div className='right-side'>

            </div>

            {/* <form onSubmit={login}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Senha:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Login</button>
            </form>
            {errorMessage && <div className="error">{errorMessage}</div>}
            {successMessage && <div className="success">{successMessage}</div>} */}
        </div>
    );
}

export default Login;