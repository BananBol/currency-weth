import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GameMainPage from '../pages/GamePage/GamePage'
import GameDetPage from '../pages/GameDetPage/GameDetPage'

const GameMainRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<GameMainPage/>}/>
      <Route path={'/:id'} element={<GameDetPage/>}/>
    </Routes>
  )
}

export default GameMainRoutes