import React from 'react';
import WorksCropped from '../../images/sections_images/HOTEL_WORKS_CROPPED.jpg';
import FullBackgroundCover from '../layouts/FullBackgroundCover';

console.log(WorksCropped);

function SectionOne() {
  return (
    <section>
      <FullBackgroundCover
        backgroundImage={
          'https://images.unsplash.com/photo-1470423725703-b136e2a8254c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80'
        }
      >
        {/* <div className='overlay h-full w-full bg-gray-900 opacity-50 absolute inset-0'></div> */}
        <Content />
      </FullBackgroundCover>
    </section>
  );
}

const Content = () => {
  return (
    <div className=' absolute w-full text-center my-40 lg:my-48 h-full'>
      <h1 className='text-gray-900 text-3xl lg:text-6xl'>MK Creatives</h1>
    </div>
  );
};

export default SectionOne;
