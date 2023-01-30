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
                ...action.payload
            };
        case types.logout:
            return {
                ...authUser,
                token: undefined
            };
        default:
            return authUser;
    }
}