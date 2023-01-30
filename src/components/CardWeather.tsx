import { useEffect, useState } from 'react';
import { RequestWeather, Weather } from '../interfaces/types';
import weatherService from '../services/weatherService';
import mapboxgl from 'mapbox-gl';
import { Loading } from './Loading';

export const CardWeather = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [weather, setWeather] = useState<Weather|null>(null);

    const onGetWeather = async(props : RequestWeather) => {
        setLoading(true);
        const data = await weatherService({...props});
        setWeather(data);
        setLoading(false);
    }

    useEffect(() => {
        if(weather){
            const {lat, lon} = weather.coord
            new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v12',
                center: [lon, lat],
                zoom: 9,
            });
        }
    }, [weather?.coord])
    

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

            {loading && (<Loading />)}
            
            {(weather && !loading) && (
                <>
                    <div className="alert alert-success" role="alert">
                        <h4 className="alert-heading">{weather.name}</h4>
                            <p>
                                <strong>País:</strong> {weather.country},
                                <strong>Humedad:</strong> {weather.humidity}%
                            </p>
                        <hr />
                        <p className="mb-0">{weather.description}</p>
                    </div>
                    <div id="map" className=""></div>
                </>
            )}
        </>
    )
}
