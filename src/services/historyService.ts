import axios from "axios";
import { History, Weather } from "../interfaces/types";

const url = import.meta.env.VITE_BACK_HOST + 'history';
const { token } = JSON.parse(localStorage.getItem('auth') || '{}')
const config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
}

const saveHistory = async({
    name,
    humidity,
    coord
} : Weather): Promise<void> => {
    const request = {
        city: name,
        latitude: coord.lat,
        longitude: coord.lon,
        humidity
    }
    await axios.post(url, request, config)
        .catch(error => {
            throw new Error(error.response.data.message);
        });
}

const getHistory = async(): Promise<History[]> => {
    const data = await axios.get(url, config)
        .then((res) => res.data)
        .catch(error => {
            throw new Error(error.response.data.message);
        });

    return data.data;
}

export {
    saveHistory,
    getHistory
};