import { Action, AuthUser } from "../interfaces/types";

export const types = {
    login: '[aunt] login',
    logout: '[auth] logout'
}

export const userReducer = (authUser: AuthUser, action: Action): AuthUser | null => {
    switch (action.type) {
        case types.login:
            return {
                ...authUser,
                ...action.payload
            };
        case types.logout:
            return null;
        default:
            return authUser;
    }
}