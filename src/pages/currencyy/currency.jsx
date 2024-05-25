import React, { useEffect, useState } from 'react' 
import {showError, showSuccess} from "../../utils/alert/alert";
import { axiosInstance } from '../../utils/API/WeatherAPI' 
import Loading from '../../components/loading/loading'
import './currency.css' 

const Currency = () => { 

    const [isLoading, setIsLoading] = useState(false)
    const [currencyData, setCurrencyData] = useState([]) 
 
    const getCurrency = async () => { 
        setIsLoading(true)
        try {
            const response = await axiosInstance.get('/current')
            const filteredCurrencyData = response.data.filter(item => item.id < 20 && item)
            setCurrencyData(filteredCurrencyData)
            showSuccess('Успешно', 'Курсы валют загружены')
          } catch (e) {
            if (e.response.status === 400) {
                showError('Код ошибки400! В запросе есть синтаксическая ошибка')
            } else if (e.response.status === 401) {
                showError('Код ошибки 401! Неавторизованный доступ!')
            } else if (e.response.status === 403) {
                showError('Код ошибки 403! Нет доступа к получению данных, проверьте токен!')
            } else if (e.response.status === 404) {
                showError('Код ошибки 404! Сервер временно недоступен!')
            } 
         } finally {
            setIsLoading(false)
         }  
    }
    useEffect(()=>{ 
        getCurrency() 
    }, []) 
 
  return ( 
    <div className='load'> 
        {isLoading 
        ?
        <Loading />
        :
        <div>
            <div className='table table-color'> 
            <span>№</span> 
            <span>Название</span> 
            <span>USD</span> 
            <span>RUB</span> 
            <span>EUR</span> 
        </div> 
        {currencyData.map((item,idx,arr) => { 
            return ( 
                <div  
                key={idx} 
                className='table' 
                > 
                    <span>{item.id}</span> 
                    <span>{item.title}</span> 
                    <span>{item.rates[0]?.sell_usd? item.rates[0]?.sell_usd : 'Нет данных...'}</span> 
                    <span>{item.rates[0]?.sell_rub? item.rates[0]?.sell_rub : 'Нет данных...'}</span> 
                    <span>{item.rates[0]?.sell_eur? item.rates[0]?.sell_eur : 'Нет данных...'}</span> 
                     
                </div> 
            ) 
        })} 
        </div> 
        }
    </div> 
  ) 
} 
 
export default Currency