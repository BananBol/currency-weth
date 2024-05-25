import React from 'react'
import temp from '../../assets/temp.svg'
import './WeatherCard.css'

const card = (props) => {

  const {
    weatherData
  } = props


  return (
    <div className='card-container'>
      <h3>{weatherData?.location?.name}</h3>
      <div className='temp'>
        <img src={temp} alt="" />
        <h1>{`${weatherData?.current?.temp_c}°C `}</h1>
        <img src={weatherData?.current?.condition?.icon} alt="" />
      </div>
      <div>
        {weatherData?.location?.localtime}
       </div>


      <div className='other-info'>

        <div>
          <strong>Humidity:</strong>
          <div>
            {weatherData?.current?.humidity}%
          </div>
        </div>

        <div>
          <strong>Visiblity:</strong>
          <div>
            {weatherData?.current?.vis_km}km
          </div>
        </div>

        <div>
          <strong>Air Pressure:</strong>
          <div>
            {weatherData?.current?.pressure_mb}hPa
          </div>
        </div>

        <div>
          <strong>Wind:</strong>
          <div>
            {weatherData?.current?.wind_mph}mph
          </div>
        </div>

      </div>

    </div>
  )
}

export default card