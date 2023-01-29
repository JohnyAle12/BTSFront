import { UserContext } from './UserContext';
import { useState } from 'react';
import { UserApp } from '../types/ContextApp';

export const UserProvider = ({ children }: any) => {
    const [user, setUser] = useState<UserApp>();

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
