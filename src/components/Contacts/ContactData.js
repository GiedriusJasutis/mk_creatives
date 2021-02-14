import React from 'react';

function ContactData() {
  return (
    <div
      id='contactData'
      className='lg:mx-10 lg:my-10 lg:w-1/2 h-40 p-10 lg:shadow-md lg:h-64'
    >
      <div className='flex py-2'>
        <span className='material-icons mr-3'>call</span> +5555 44444000
      </div>
      <div className='flex py-2'>
        <span className='material-icons mr-3'>email</span> john.doe@gmail.com
      </div>
      <div className='flex py-2'>
        <span className='material-icons mr-3'>location_city</span> London
      </div>
    </div>
  );
}

export default ContactData;
