import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuButton.scss';

function Menu() {
  return (
    <div>
      <div className='menu-wrap'>
        {/* 1. input as box for hamburger menu */}
        <input type='checkbox' className='toggler' />
        {/* 2. hamburger menu */}
        <div className='hamburger'>
          <div></div>
        </div>
        {/* 3. menu navigation */}
        <div className='menu'>
          <div>
            <div>
              <ul>
                <li>
                  <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                  <NavLink to='/contacts'>Contacts</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
