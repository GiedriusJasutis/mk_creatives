import React from 'react';

import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import Navigation from '../layouts/Navigation';

function AboutPage() {
  return (
    <div className='scroll-container'>
      <div className=''>
        <Navigation navigationTextColor='text-black text-gray-800' />
      </div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}

export default AboutPage;
