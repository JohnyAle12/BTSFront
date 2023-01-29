import axios from "axios";
import { AuthUser } from "../auth/interfaces/types";

type Request = {
    email: string;
    password: string;
}

const loginService = async(props : Request): Promise<AuthUser> => {
    const url = 'http://localhost:8000/api/login';
    const { user, access_token } = await axios.post(url, props)
        .then(res => res.data)
        .catch(error => {
            throw new Error(error.response.data.message);
        });
    
    return {
        ...user,
        token: access_token,
    };
}

export default loginService;