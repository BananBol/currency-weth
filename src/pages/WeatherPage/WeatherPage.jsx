import React from 'react'
import { useState,useEffect } from 'react'
import Loading from '../../components/WeatherLoading/WeatherLoading'
import Form from '../../components/WeatherForm/WeatherForm'
import Card from '../../components/WeatherCard/WeatherCard'
import axios from 'axios'
import './WeatherPage.css'

const WeatherPage = () => {
  const API_KEY = '317147e078c54d6c882102156230710'
  const [weatherData, setWeatherData] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const getWeather = async (city) => {
    setIsLoading(true)
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
      setWeatherData(response.data)
    } catch (error) {
      if (error?.response?.status === 400) {
        alert('В запросе есть синтаксическая ошибка')
      } else if (error?.response?.status === 404) {
        alert('Сервер не найден')
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
   getWeather('Бишкек')
  }, [])

  return (
    <div className="containers">
       <Form
         getWeather={getWeather}
       />
  
        {isLoading ? 
       <Loading /> 
       :
       <Card
         weatherData={weatherData}
       />
       }
       
       
      </div>
   );  
}

export default WeatherPage