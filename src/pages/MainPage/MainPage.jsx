import MaterialButton from '../../components/button/MaterialButton'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/t.mp4'


import './MainPage.css'

const MainPage = () => {

  const navigate = useNavigate()

  return (
    <div className='button'>
        <MaterialButton
        value='Weather'
        onClick={() => navigate('/weather')}
        />
        <MaterialButton
        value='Game'
        onClick={() => navigate('/game')}
        />
        <MaterialButton
        value='Currency'
        onClick={() => navigate('/currency')}
        />
        <div className='video-background'>
        <video autoPlay muted loop>
          <source src={logo} type="video/mp4" />
        </video>
      </div>
        
    </div>
    
  )
}

export default MainPage