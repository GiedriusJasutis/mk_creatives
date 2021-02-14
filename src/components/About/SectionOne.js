import React, { useEffect } from 'react';
import gsap from 'gsap';

function SectionOne() {
  useEffect(() => {
    gsap.from('.firstSectionImageAnimation', {
      opacity: 0,
      duration: 1.5,
      y: -50,
    });

    gsap.from('.aboutTitleSectionOneAnimation', {
      opacity: 0,
      duration: 2,
    });

    gsap.from('.firstTextAnimation', {
      duration: 1.5,
      x: -1000,
    });

    gsap.from('.howDoWeDoWhatWeDo', {
      duration: 1.5,
      x: 1000,
    });
  });
  return (
    <section className='text-gray-900 firstSectionAnimation'>
      <div className='aboutTitleSectionOneAnimation relative flex flex-col lg:flex-row lg:h-full '>
        {/* TITLE */}
        <h1 className=' px-5 absolute z-10 w-full text-center pt-10 lg:pt-20 text-xl lg:text-4xl text-orange-500 font-bold'>
          PUSHING THE BOUNDARIES OF ART & VISUAL COMMUNICATION
        </h1>
        {/* TWO COLUMNS STARTS IMAGE LEFT , TEXT RIGHT*/}
        <div className='lg:w-2/5'>
          <img
            src='https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80'
            alt='About us'
            className='firstSectionImageAnimation h-64 lg:h-full w-full object-cover '
          />
        </div>
        <div className=' flex flex-row items-center lg:w-3/5 text-center'>
          <div>
            {/* Flex 1 */}
            <div className='firstTextAnimation m-3'>
              MK Creatives is a small, elite team of artists, photographers and
              videographers. In an increasingly visual world, our main focus is
              creating beautyful, artistic imagery and telling engaging,
              completting stories through creative photography, video, and
              digital visual assets.
            </div>
            {/* Flex 2 */}
            <div className='howDoWeDoWhatWeDo flex flex-col lg:flex-row py-5 lg:p-10'>
              <div className='py-3 m-3'>
                <h1 className='text-2xl lg:text-2xl'>
                  HOW DO WE DO WHAT WE DO
                </h1>
                First, we talk about you. Your ideas. Your dreams. You
                time-line. From there, we piece together your creative dream
                team-a hand picked group of MK Creatives best fit for the job.
                Then the magic happens. We dive in. Creative boundaries are
                explored. Collaboration is key. Coffe is a must.
              </div>
              <div className='py-3 m-3'>
                <h1 className='text-2xl lg:text-2xl'>
                  OUR PASSION, YOUR PURPOSE
                </h1>
                We love nothing more than collaborating with agencies,
                publications, entrepreneurs, and brands to achieve their vision
                (literally). Our team loves what we do-and works best with those
                who love what they do, too.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
