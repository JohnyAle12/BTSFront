export type ContextApp = {
    user?: UserApp
    setUser?: React.SetStateAction<any>
}

export type UserApp = {
    id: number,
    name: string,
    email: string,
    token: string,
}