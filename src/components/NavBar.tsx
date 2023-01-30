import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../auth/context/UserContext';


export const Navbar = () => {
    const { user, logout } = useContext(UserContext);
    const navigate = useNavigate();

    const onLogout = () => {
        logout && logout();
        navigate('/login', {
            replace: true
        });
    }

    const onHistory = () => {
        navigate('/history', {
            replace: true
        });
    }

    const onInit = () => {
        navigate('/dashboard', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex">
                <div className="navbar-nav">
                    { user?.name && (
                        <small className="nav-item nav-link">
                            { user.name }
                        </small>
                    )}
                </div>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <button 
                        className="nav-item nav-link btn mr-2"
                        onClick={onInit}
                    >
                        Inicio
                    </button>
                    <button 
                        className="nav-item nav-link btn mr-2"
                        onClick={onHistory}
                    >
                        Historial
                    </button>
                    <button 
                        className="nav-item nav-link btn"
                        onClick={onLogout}
                    >
                        Cerrar
                    </button>
                </ul>
            </div>
        </nav>
    )
}