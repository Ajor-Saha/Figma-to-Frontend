import React from "react";

const Carda = () => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-600 flex flex-col justify-center items-center gap-3">
      <div>
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            DISCOVER
          </h5>
        </a>
      </div>
      <div>
        <p className="mb-3 font-normal text-gray-700 dark:text-slate-100">
          Investment Opportunities
        </p>
      </div>
      <div className="">
        <a
          href="#"
          className="inline-flex px-8 py-3 items-center text-sm font-medium text-center text-white bg-yellow-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-yellow-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          ClICK HERE
        </a>
      </div>
    </div>
  );
};

export default Carda;
