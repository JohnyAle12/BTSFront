import { useState } from 'react';
import { RequestWeather, Weather } from '../interfaces/types';
import weatherService from '../services/weatherService';

export const CardWeather = () => {

    const [weather, setWeather] = useState<Weather|null>(null);

    const onGetWeather = async(props : RequestWeather) => {
        const data = await weatherService({...props});
        setWeather(data);
    }

    return (
        <>
            <div className="card-body">
                <button
                    onClick={ () => onGetWeather({
                        lat: 25.768652, lon: -80.190140
                    })} 
                    className="btn btn-secondary btn-sm m-2">
                    Miami
                </button>
                <button
                    onClick={ () => onGetWeather({
                        lat: 40.726465, lon: -74.172443
                    })} 
                    className="btn btn-secondary btn-sm m-2">
                    New York
                </button>
                <button
                    onClick={ () => onGetWeather({
                        lat: 28.535494, lon: -81.379181
                    })} 
                    className="btn btn-secondary btn-sm m-2">
                    Orlando
                </button>
                <button
                    onClick={ () => onGetWeather({
                        lat: 34.054936, lon: -118.249950
                    })} 
                    className="btn btn-secondary btn-sm m-2">
                    Los Angeles
                </button>
            </div>
            
            {weather && (
                <div className="alert alert-success" role="alert">
                    <h4 className="alert-heading">{weather.name}</h4>
                        <p>
                            <strong>País:</strong> {weather.country},
                            <strong>Humedad:</strong> {weather.humidity}%
                        </p>
                    <hr />
                    <p className="mb-0">{weather.description}</p>
                </div>
            )}
        </>
    )
}
