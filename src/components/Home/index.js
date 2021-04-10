import React, { useEffect } from 'react';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import gsap from 'gsap';

import Navigation from '../layouts/Navigation';

function HomePage() {
  useEffect(() => {
    gsap.from('.homePageAnimation', { opacity: 0, duration: 2.5, delay: 0.3 });
  });
  return (
    <div className='scroll-container homePageAnimation'>
      <div className=''>
        <Navigation navigationTextColor='text-black' />
      </div>
      <SectionOne />
      <SectionTwo />
    </div>
  );
}

export default HomePage;
