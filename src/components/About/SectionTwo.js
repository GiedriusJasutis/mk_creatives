import React from 'react';
import WebsiteAboutUs from '../../images/sections_images/Website_About_Us.jpg';
import InstagramIcon from '../utils/svg/InstagramIcon';

function SectionTwo() {
  return (
    <section>
      <div className='relative'>
        <div className='flex flex-col lg:h-screen'>
          <BoxOne />
          <BoxTwo />
        </div>
      </div>
    </section>
  );
}

const BoxOne = () => {
  return (
    <div className='relative lg:h-3/5'>
      <img
        src={WebsiteAboutUs}
        alt=''
        className='object-cover object-center h-full w-full'
      />

      <div className='px-5 w-full my-10 lg:mt-40 text-center lg:absolute lg:top-0 lg:left-0 lg:text-white'>
        <h1 className='my-3 text-2xl lg:text-4xl'>MK CREATIVES</h1>
        <p className='lg:mx-40'>
          MK CREATIVES IS LIKE HAVING YOUR OWN IN-HOUSE CREATIVE PRODUCTION
          TEAM. THERE'S NO PROJECT TOO BIG OR TOO SMALL. FROM CAMPAIGN IDEATION
          TO PRODUCTION TO IN-MARKET EXECUTION, MK CREATIVES DELIVERS.
        </p>
      </div>
    </div>
  );
};

const BoxTwo = () => {
  return (
    <div className='flex flex-col items-center justify-center lg:h-2/5 text-center px-5'>
      <h1 className=' text-2xl lg:text-4xl py-5'>
        BRING YOUR VISUAL IDEAS TO LIFE
      </h1>
      <p>
        That's enough about us. Let's talk about you, your project, and how we
        can help. Email MK Creatives to get started.
      </p>
      <div className='pt-8 pb-2'>
        <a
          href='https://www.instagram.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <InstagramIcon />
        </a>
      </div>
      <p className='pb-10'>
        Think you have what it takes to join MK Creatives?{' '}
        <span>
          <a href='/contacts' className='underline'>
            We did love to hear from you!
          </a>
        </span>
      </p>
    </div>
  );
};

export default SectionTwo;
