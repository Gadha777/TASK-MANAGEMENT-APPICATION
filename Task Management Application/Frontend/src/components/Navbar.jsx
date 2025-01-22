import React from 'react';
import { Link } from 'react-router-dom';
// import "../css/home.css"; // Adjust the path based on your project structure
// import getUserType from '../Utils/Auth';
const Navbar = () => {
  return (
  
  <div >
  <div className=" font-josefin font-bold not-italic h-full">
      <h1  id='heading'className="text-center text-4xl py-14  text-white font-extrabold">TASK MANAGEMENT APPLICATION</h1>
    </div>
  
   <nav className='mt-0 '>
      <Link to="/home" className='text-xl text-white mx-[20px] '>HOME</Link>
      <Link to="/task" className='text-xl text-white m2-[20px]  '>TASKS</Link>
      <Link to="/contact" className='text-xl  text-white mx-[20px] '>CONTACT</Link>
      <Link to="/about" className='text-xl text-white mx-[20px] '>ABOUT US</Link>
      <Link to="/logout" className='text-xl text-white mx-[20px] '>LOGOUT</Link>
    </nav>
  </div>
   
  
  );
};

export default Navbar;

