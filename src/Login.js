
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import IconButton from './components/IconButton';


function Login() {
    const handleClick = () => {
        alert('Botão clicado!');
    };
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
                <IconButton className="icon-button" onClick={handleClick} />
                <div className='carousel'>
                    <div className='tag-course'>Cursos</div>
                    <h3>Plataforma de cursos completa</h3>
                    <div className='info'>
                        <h4>
                            Lorem ipsum nisl etiam himenaeos ligula augue
                            vehicula gravida tincidunt, etiam magna sapien gravida sodales
                            sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere
                            donec aptent. orci vivamus primis fusce lacinia libero nostra
                            aliquam vestibulum
                        </h4>
                    </div>
                    <div className='carousel-bar-horizontal'>
                        <div className='carousel-bar-item active'></div>
                        <div className='carousel-bar-item'></div>
                        <div className='carousel-bar-item'></div>
                    </div>
                    <div className="carousel-navigation">
                        <div className="carousel-arrow left-arrow"></div>
                        <div className="carousel-arrow right-arrow active"></div>
                    </div>
                </div>

            </div>
            <div className='right-side'>
                <div className='login-header'>
                    <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="logo" />
                    <a href='#'>Criar conta</a>
                </div>
                <div className='welcome'>
                    <h2>Boas-vindas!</h2>
                    <span>Entre utilizando uma das opções abaixo</span>
                </div>
                <div className='login-options'>
                    <div className='login-option toolzz'>
                        <img src={`${process.env.PUBLIC_URL}/images/toolzz-icon.svg`} alt="toolzz" />
                    </div>
                    <div className='login-option facebook'>
                        <img src={`${process.env.PUBLIC_URL}/images/facebook-icon.svg`} alt="facebook" />
                    </div>
                    <div className='login-option apple'>
                        <img src={`${process.env.PUBLIC_URL}/images/apple-icon.svg`} alt="apple" />
                    </div>
                    <div className='login-option twitter'>
                        <img src={`${process.env.PUBLIC_URL}/images/twitter-icon.svg`} alt="twitter" />
                    </div>
                </div>
                <div className='separator'>
                    <div className='line'></div>
                     <span>ou</span>
                    <div className='line'></div>


                </div>


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