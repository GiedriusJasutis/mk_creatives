import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function SectionThree() {
  return (
    <section className='flex justify-center items-center overflow-hidden'>
      <Carousel className='w-9/12 lg:w-1/2'>
        <div>
          <img
            src='https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
            alt='Car'
          />
        </div>
        <div>
          <img
            src='https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
            alt='Car'
          />
        </div>
        <div>
          <img
            src='https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80'
            alt='Car'
          />
        </div>
        <div>
          <img
            src='https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80'
            alt='Car'
          />
        </div>
        <div>
          <img
            src='https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80'
            alt='Car'
          />
        </div>
        <div>
          <img
            src='https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80'
            alt='Car'
          />
        </div>
      </Carousel>
    </section>
  );
}

export default SectionThree;
