import { useReducer } from 'react';
import { AuthUser } from '../interfaces/types';
import { UserContext } from './UserContext';
import { types, userReducer } from './userReducer';

const init = () => {
    const user = JSON.parse(localStorage.getItem('auth') || '{}');  
    return user;
}

export const UserProvider = ({ children }: any) => {
    const [authUser, dispatch] = useReducer(userReducer, {}, init);

    const login = async(authUser: AuthUser) => {
        localStorage.setItem('auth', JSON.stringify({...authUser}))
        dispatch({
            type: types.login,
            payload: authUser
        })
    }
    
    const logout = async() => {
        localStorage.removeItem('auth');
        dispatch({
            type: types.logout,
        })
    }

    return (
        <UserContext.Provider value={{ user: authUser, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}
