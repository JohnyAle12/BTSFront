export type Weather = {
    name: string
    country: string,
    humidity: number,
    description: string
    coord: RequestWeather
}

export type RequestWeather = {
    lat: number;
    lon: number;
}