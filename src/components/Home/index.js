import React, { useEffect } from 'react';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import MenuButton from '../layouts/MenuButton/MenuButton';
import gsap from 'gsap';

import Navigation from '../layouts/Navigation';

function HomePage() {
  useEffect(() => {
    gsap.from('.homePageAnimation', { opacity: 0, duration: 2.5, delay: 0.3 });
  });
  return (
    <div className='scroll-container homePageAnimation'>
      <div className='hidden md:block '>
        <Navigation navigationTextColor='text-black' />
      </div>
      <div className='md:block md:hidden'>
        <MenuButton />
      </div>
      <SectionOne />
      <SectionTwo />
    </div>
  );
}

export default HomePage;
