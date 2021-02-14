import React, { useEffect } from 'react';

import ContactData from './ContactData';
import ContactForm from './ContactForm';
import gsap from 'gsap';

function SectionOne() {
  useEffect(() => {
    gsap.from('section', { opacity: 0, duration: 1, x: -30 });
  });
  return (
    <section className='pt-12 lg:pt-32 animeContacts'>
      <div className='h-screen'>
        <h1 className='w-full text-center pt-3 text-xl'>Contact Us</h1>
        <div className='flex flex-col lg:flex-row w-full md:pt-20'>
          <ContactData />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
