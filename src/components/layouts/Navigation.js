import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Navigation({ navigationTextColor, navigationBackgroundColor = '' }) {
  const [color, setColor] = useState('text-white');

  const navigationTextColorHandler = () => {
    setColor(navigationTextColor);
  };

  useEffect(() => {
    navigationTextColorHandler();
    console.log('nav color was set');
    return () => {
      navigationTextColorHandler();
    };
  });

  return (
    <div
      className={`fixed z-20 w-full text-center py-5 text-2xl ${color} ${navigationBackgroundColor}`}
    >
      <ul className='flex justify-center '>
        <li className='px-3 md:px-6 lg:px-10'>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className='px-3 md:px-6 lg:px-10'>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li className='px-3 md:px-6 lg:px-10'>
          <NavLink to='/contacts'>Contacts</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
