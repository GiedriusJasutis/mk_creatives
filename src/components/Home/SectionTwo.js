import React from 'react';
import WebsiteHomePage1FullScreen from '../../images/sections_images/Website_Homepage_1_FULLSIZE.jpg';

function SectionTwo() {
  return (
    <section>
      <div className='h-screen'>
        <div className='h-1/5 w-full flex items-center justify-center'>
          <h1 className='md:hidden text-2xl'>MK Creatives</h1>
        </div>
        <div className='relative h-3/5 w-full'>
          <div className='content absolute z-10'>
            <div className='flex flex-col items-center pt-20 sm:pt-32 lg:pt-48 text-white'>
              <h1 className='hidden md:block pb-5 text-2xl lg:text-4xl '>
                MK Creatives
              </h1>
              <p className='text-center px-5 md:text-xl'>
                MK Creatives is an invite-only collective of artists, designers,
                and visual storytellers from around the world. We collaborate
                with brands both big and small to provide art direction,
                production, visual social strategy, and creative visuals that
                trigger curiosity, ignite wonder, and leave a lasting
                impression.
              </p>
            </div>
          </div>
          {/* OVERLAY */}
          <div className='absolute bg-gray-700 w-full h-full opacity-50'></div>
          <img
            src={WebsiteHomePage1FullScreen}
            alt=''
            className='h-full w-full object-center object-cover'
          />
        </div>
        <div className='h-1/5 w-full flex items-center justify-center'>
          <a
            href='/about'
            className='bg-orange-400 px-5 py-1 hover:bg-orange-300 text-white font-bold transition duration-500 ease-in-out'
          >
            About MK Creatives
          </a>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
