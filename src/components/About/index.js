import React from 'react';

import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';

import MenuButton from '../layouts/MenuButton/MenuButton';

function AboutPage() {
  return (
    <div className='scroll-container'>
      <MenuButton />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}

export default AboutPage;
