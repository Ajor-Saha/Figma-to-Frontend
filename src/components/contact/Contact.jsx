import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-sm mx-auto bg-primary shadow-md rounded-md overflow-hidden" id='contact'>
      {/* Card Header */}
      <div className="p-4 text-normal">
        <h2 className="text-2xl font-semibold text-center">CONNECT WITH US</h2>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <p className="text-normal mb-4 text-center">
        PLEASE FILL THIS FORM!!
        </p>

        {/* Name Input */}
        <div className="mb-4">
         
          <input
            type="text"
            id="name"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Name"
          />
        </div>

        {/* Contact Number Input */}
        <div className="mb-4">
          
          <input
            type="tel"
            id="contactNumber"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Contact Number"
          />
        </div>

        {/* Comment Input */}
        <div className="mb-4">
          
          <textarea
            id="comment"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            rows="2"
            placeholder="Any Comments?"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className=" text-yellow-600 underline py-2 px-4 rounded-md float-right"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
