import React from 'react';
import logo from './images/logo.svg';
import beachWork from './images/beach-work.jpg';
import toiletPaper from './images/Toilet_Paper.svg';

function App() {
  console.log(logo);
  return (
    <div className='bg-gray-300 h-screen'>
      {/* FLEX CONTAINER WITH CARD'S */}
      <div className='flex bg-white'>
        {/* . */}
        {/* . */}
        {/* . */}
        {/* . */}
        {/* 1. CARD */}
        <div className='px-8 py-12 mx-auto max-w-md sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12'>
          <div className='lg:max-w-lg xl:m-auto'>
            <img
              src={toiletPaper}
              alt='toilet paper'
              className='bg-blue-300 h-20 w-full'
            />
            <img
              src={beachWork}
              alt='some Beach work'
              className='mt-5 rounded-lg shadow-xl sm:mt-8 sm:h-72 sm:w-full sm:object-cover sm:object-center lg:hidden'
            />

            <h1 className='sm:mt-8 text-2xl font-hairline text-gray-900 leading-1 xl:text-4xl'>
              You can work anywhere !<br className='hidden lg:inline'></br>
              <span className='text-indigo-500 font-bold'>
                Take some advantige
              </span>
            </h1>
            <p className='mt-2 text-gray-600 sm:text-xl sm:mt-4'>
              Break points: sm : 640x800 . md 768x800 . lg 1024x800 xl 1280x800
            </p>

            <div className='mt-4 sm:mt-6'>
              <a
                href='/'
                className='inline-block bg-indigo-500 text-white px-4 py-2 rounded-lg shadow-lg uppercase tracking-wider font-semibold text-sm sm:text-base hover:bg-green-300 focus:outline-none focus:shadow-outline active:bg-indigo-300 xl:hover:text-2xl'
              >
                Book it jou
              </a>
            </div>
          </div>
        </div>
        {/* 1 CARD END */}

        {/* 2.CARD */}
        <div className='hidden lg:block lg:w-1/2 lg:relative'>
          <img
            src={beachWork}
            alt='beach work again'
            className='absolute inset-0 h-full w-full object-cover object-center'
          />
        </div>
        {/* 2.CARD END*/}

        {/* . */}
        {/* . */}
        {/* . */}
        {/* . */}
      </div>
      {/* FLEX CONTAINER WITH CARD'S END*/}
    </div>
  );
}

export default App;

/**
 *
 * @handling_images is image class how to add image height, width , center and cover.
 * className='mt-5 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center'
 *
 *
 * @positioning
 * Parent element: div className='hidden lg:block lg:w-1/2 lg:relative' --- use relative position
 * Child: img className='absolute inset-0 h-full w-full object-cover object-center'  --- inset-0 like top-0,left-0, .
 *
 *
 * @Techniek_how_to_use_break
 * <br className='hidden lg:inline'></br>
 *
 *
 * @hover_focus_active activate variants   backgroundColor: ['responsive', 'hover', 'focus', 'active'], fontSize: ['responsive', 'hover'],
 * link buttons a is :  hover:bg-green-300 focus:outline-none focus:shadow-outline active:bg-indigo-300 xl:hover:text-2xl'
 *
 * @assets
 *  go to assets and tailwind.css there add all utility classes to create later one class for example .btn
 *
 *
 * @use_purgecss for production. How to use for tailwind check in adams 8 lesson
 *
 * @div_and_image_rounding
 * if you put in div image , and try to round all card, div will be rounded , but card no , so use in <div className='rounded-lg overflow-hidden'>  <img> </div>
 *
 *
 *
 *
 *
 */
