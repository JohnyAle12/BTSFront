import React from 'react'
import { History } from '../interfaces/types'

export const HistoryCard = ({
  id,
  city,
  latitude,
  longitude,
  humidity,
  created_at,
}: History) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 mt-3">
      <div className="card bg-light m-3">
        <div className="card-header">{city}</div>
        <div className="card-body">
          <h5 className="card-title">{id}</h5>
          <p className="card-text">
            <strong>Latitud:</strong> {latitude} <br />
            <strong>Longitud:</strong> {longitude} <br />
            <strong>Humedad:</strong> {humidity}%
          </p>
        </div>
        <div className="card-footer">{created_at}</div>
      </div>
    </div>
  )
}
