export type Weather = {
    name: string;
    country: string;
    humidity: number;
    description: string;
    coord: RequestWeather;
}

export type RequestWeather = {
    lat: number;
    lon: number;
}

export type History = {
    id: number;
    city: string;
    latitude: number;
    longitude: number;
    humidity: number;
    created_at: string;
}