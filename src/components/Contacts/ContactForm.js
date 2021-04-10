import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

function ContactForm() {
  useEffect(() => {
    gsap.from('.contactForm', { opacity: 0, duration: 1, delay: 0.3 });
    gsap.from('.formMessageTitle', {
      opacity: 0,
      duration: 0.5,
      delay: 0.3,
      stagger: 0.5,
    });
  });
  return (
    <div className='contactForm lg:mx-10 lg:my-10 lg:w-1/2 lg:shadow-md pt-10'>
      <h1 className='formMessageTitle p-3 text-xl text-center'>
        Write us a message
      </h1>
      <form className='bg-white h-full'>
        {/* YOUR NAME */}
        <div className='form-group px-10 py-3'>
          <label className='block mb-2 text-gray-700 text-sm'>Your name</label>
          <input
            type='text'
            className='border border-2 border-gray-300 w-full rounded-lg'
          />
        </div>

        {/* EMAIL */}
        <div className='form-group px-10 py-1'>
          <label className='block mb-2 text-gray-700 text-sm'>Email</label>
          <input
            type='text'
            className='border border-2 border-gray-300 w-full rounded-lg'
          />
        </div>

        {/* MESSAGE */}
        <div className='form-group px-10 py-1'>
          <label className='block mb-2 text-gray-700 text-sm'>
            Your Message
          </label>

          <textarea
            type='text'
            className='border border-2 border-gray-300 w-full rounded-lg'
          ></textarea>
        </div>

        {/* SUBMIT */}
        <div className='flex justify-center py-5'>
          <Link to='/about' className='bg-orange-400  px-5 py-2'>
            Send
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
