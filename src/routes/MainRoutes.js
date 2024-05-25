import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Currency from '../pages/currencyy/currency'
import MainPage from '../pages/MainPage/MainPage'
import WeatherPage from '../pages/WeatherPage/WeatherPage'
import GamePage from '../pages/GamePage/GamePage'
import GameDetPage from '../pages/GameDetPage/GameDetPage'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'/Weather'} element={<WeatherPage/>}/>
            <Route path={'/Game'} element={<GamePage/>}/>
            <Route path={'/:id'} element={<GameDetPage/>}/>
            <Route path={'/currency'} element={<Currency />}/>
        </Routes>
    </div>
  )
}

export default MainRoutes