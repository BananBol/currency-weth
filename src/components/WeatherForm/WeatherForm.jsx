import searchLogo from '../../assets/icon _search_.png'
import { useState } from 'react'
import './WeatherForm.css'

const form = (props) => {


  const {
    getWeather,
  } = props


  const [inputValue, setInputValue] = useState('')

  return (
    <div className='form-container'>
      <input 
       type="text" 
       placeholder='Введите свой город' 
       className='input-text'
       onChange={(e) => setInputValue(e.target.value)}
      />
      <img src={searchLogo} alt="" onClick={() => getWeather(inputValue)} />
      <span
       onClick={() => getWeather('Бишкек')}
      >
      X

      </span>
    </div>
  )
}

export default form