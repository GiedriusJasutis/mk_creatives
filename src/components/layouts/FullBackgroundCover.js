import React from 'react';

const FullBackgroundCover = ({ backgroundImage, children }) => {
  return (
    <header className='relative header lg:overflow-hidden'>
      <div className='h-screen'>
        <img
          src={backgroundImage}
          alt='Works'
          className='absolute z-negative object-cover w-full h-full'
        />

        {/* INSIDE BACKGROUND */}
        {children}
      </div>
    </header>
  );
};

export default FullBackgroundCover;
