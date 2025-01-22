import React from 'react'
import Navbar from '../components/Navbar'
import '../css/home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-sky-900 h-full w-full bg-cover p-0'>
        <Navbar />
        <div className="font-sans text-[130px] text-white font-black text-center mt-12">WELCOME</div>
        {/* <p className='font-serif text-white text-lg text-center mt-5   font-bold'></p> */}
            <button type="button" id="" className='bg-transparent border-4 border-white p-1 px-5 ml-[540px] mt-5 text-white'>
            <Link to="/reservation"> ADD A TASK</Link>
            </button>
    
        <br />
        <br />
        <br />
    </div>
  )
}

export default Home