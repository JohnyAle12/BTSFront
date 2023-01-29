import { Action, AuthUser } from "../interfaces/types";

export const types = {
    login: '[aunt] login',
    logout: '[auth] logout'
}

export const userReducer = (authUser: AuthUser, action: Action): AuthUser => {
    switch (action.type) {
        case types.login:
            return {
                ...authUser,
                id: 1,
                name: 'johny',
                email: 'asd',
                token: 'asd',
            };
        case types.logout:
            return authUser;
        default:
            return authUser;
    }
}