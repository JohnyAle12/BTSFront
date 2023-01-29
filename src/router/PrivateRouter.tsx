import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { ContextApp } from '../types/ContextApp';

type Props = {
    children: JSX.Element
}

export const PrivateRouter = ({ children }: Props): JSX.Element => {
    const { user } = useContext<ContextApp>(UserContext);
    return (user) ? children : <Navigate to='/'/>
}