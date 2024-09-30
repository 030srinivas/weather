import {useEffect, useState} from 'react'
import axios from 'axios'
import img1 from 'C:/Users/SRINIVAS/OneDrive/Desktop/weather/src/assets/Icons/sunny.svg'

function Forecast() {
    const[race,newRace]=useState([])
    const getRace=async()=>{
   axios.get('https://raw.githubusercontent.com/Surya-Digital-Interviews/weather-api-public/main/get-forecast.txt')
  .then(response => {console.log(response.data)})
  .catch(error => {console.log(error)})
    }

    useEffect(()=>{
        getRace()
    },[])
    
  return (
    <>
    <div className=' bg-transparent border-r-1 border-gray-200 shadow-md rounded-xl backdrop-filter backdrop-blur-md bg-white/20  m-3 flex gap-10 p-1 m-2 justify-center'>
        <div >
      <div>
        <div className='flex-wrap justify-center'>
        <h2>
            current
        </h2>
        </div>
        <div  className='flex-wrap justify-center'>
            <img className='size-6' src={img1} alt="" />
        </div>
        <h2 className='pl-1'>
            34
        </h2>
        </div>
      </div>
      <div>
      <div>
        <div className='flex-wrap justify-center'>
        <h2>
            1.00pm
        </h2>
        </div>
        <div  className='flex-wrap justify-center'>
            <img className='size-6' src={img1} alt="" />
        </div>
        <h2 className='pl-1'>
            34
        </h2>
        </div>
      </div>
      <div>
      <div>
        <div className='flex-wrap justify-center'>
        <h2>
            2.00pm
        </h2>
        </div>
        <div  className='flex-wrap justify-center'>
            <img className='size-6' src={img1} alt="" />
        </div>
        <h2 className='pl-1'>
            34
        </h2>
        </div>
      </div>
      <div>
      <div>
        <div className='flex-wrap justify-center'>
        <h2>
            3.00pm
        </h2>
        </div>
        <div  className='flex-wrap justify-center'>
            <img className='size-6' src={img1} alt="" />
        </div>
        <h2 className='pl-1'>
            34
        </h2>
        </div>
      </div>
      <div>
        <div className='flex-wrap justify-center'>
        <h2>
            4.00pm
        </h2>
        </div>
        <div  className='flex-wrap justify-center'>
            <img className='size-6' src={img1} alt="" />
        </div>
        <h2 className='pl-1'>
            34
        </h2>
        </div>
        </div>
        <div className=' bg-transparent border-r-1 border-gray-200 shadow-md rounded-xl backdrop-filter backdrop-blur-md bg-white/20 p-2 m-3  gap-10 '>
        <div className='flex justify-center gap-12'>
            <p>23 jun Today</p>
            <img className='size-6' src={img1} alt="" />
            <p>28/35</p>

        </div>


    </div>
    </>
  )
}

export default Forecast

