
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import IconButton from './components/IconButton';
import IconButtonDark from './components/IconButtonDark';

/* eslint-disable jsx-a11y/anchor-is-valid */


function Login() {
    const handleClick = () => {
        // alert('Botão clicado!');
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    const login = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        try {
            const response = await axios.post('http://chargecore.cloud:8080/api/login', {
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
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
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
                <div className='header-mobile'>
                    <IconButtonDark className="icon-button-mobile" onClick={handleClick} />
                    <a href='#'>Criar conta</a>
                </div>

                <div className='login-header'>
                    <img src={`${process.env.PUBLIC_URL}/images/${darkMode ? 'logo-dark.svg' : 'logo.svg'}`} alt="logo" />
                    <button onClick={toggleDarkMode} className="dark-mode-toggle">
                        {darkMode ? '🌞' : '🌜'} 
                    </button>

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
                <form className='login-user' onSubmit={login}>
                    <div className='form-group'>
                        <label>Usuário</label>
                        <div className="input-container">
                            <img src="/images/user.svg" alt="User Icon" className="input-icon" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className='form-group'>
                        <label>Senha</label>
                        <div className="input-container">
                            <img src="/images/security.svg" alt="Security Icon" className="input-icon" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>


                    </div>
                    <div className="checkbox-group">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="rememberMe">Manter conectado</label>
                    </div>
                    <div className='captcha-content'>
                        <div className='captcha'>
                            <div className="captcha-group">
                                <input type="checkbox" id="captcha" />
                                <label htmlFor="captcha">I am human</label>
                            </div>

                            <div className="captcha-terms">
                                <img src="/images/captcha.svg" alt="Captcha" className="captcha-image" />

                                Privacy - Terms
                            </div>
                        </div>

                    </div>
                    <button type="submit" className="btn-entrar">
                        <img src="/images/plus.png" alt="Plus Icon" className="button-icon" />
                        Entrar
                    </button>
                    <div className="checkbox-group checkbox-mobile">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="rememberMe">Manter conectado</label>
                    </div>

                </form>
                {errorMessage && <div className="error">{errorMessage}</div>}
                {successMessage && <div className="success">{successMessage}</div>}
                <div className='forgot-password'>
                    <span>Esqueceu sua senha?  <a href='#'>Recuperar senha</a></span>
                </div>


            </div>

        </div>
    );
}

export default Login;