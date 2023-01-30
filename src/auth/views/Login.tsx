import { useForm } from '../../hooks/useForm';
import reactLogo from './../../assets/react.svg'
import { useContext, useState } from 'react';
import loginService from '../../services/loginService';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { ContextApp } from '../interfaces/types';

export const Login = () => {
    const navigate = useNavigate();
    const { login } = useContext<ContextApp>(UserContext);
    const [loginFailed, setLoginFailed] = useState<boolean>(false);

    const { email, password, onInputChange} = useForm({
        email: '',
        password: ''
    });
    
    const onLoginSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const user = await loginService({email, password})
            .catch(() => setLoginFailed(true))

        if(!user) return;

        login && login(user);
        navigate('/dashboard');
    }

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                    <div className="m-4">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                        <h3 id="titleLogin" className="mt-3">Weather App</h3>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <form onSubmit={onLoginSubmit}>
                                <input
                                    type="text"
                                    className="form-control fadeIn second"
                                    name="email"
                                    placeholder="Correo electrónico"
                                    autoComplete="off"
                                    value={email}
                                    onChange={onInputChange}
                                    required
                                />
                                <input
                                    type="password"
                                    className="form-control mt-3 fadeIn second"
                                    name="password"
                                    placeholder="Contraseña"
                                    autoComplete="off"
                                    value={password}
                                    onChange={onInputChange}
                                    required
                                />
                                <input type="submit" className="btn btn-secondary btn-block mt-3 mb-3 fadeIn fourth" value="Iniciar sesión" />
                            </form>
                            {loginFailed && (
                                <div className="alert alert-danger" role="alert">
                                    Error al intentar autenticar
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div id="formFooter"></div>
            </div>
        </div>
    )
}