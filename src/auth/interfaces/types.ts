export type ContextApp = {
    user?: AuthUser
    login?: (authUser: AuthUser) => void
    logout?: () => void
}

export type AuthUser = {
    id: number,
    name: string,
    email: string,
    token?: string,
}

export type Action = {
    type: string,
    payload?: AuthUser
}