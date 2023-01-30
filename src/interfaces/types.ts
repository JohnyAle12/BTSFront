export type Weather = {
    name: string
    country: string,
    humidity: number,
    description: string
}

export type RequestWeather = {
    lat: number;
    lon: number;
}