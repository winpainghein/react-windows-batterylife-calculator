import React from "react";

const Input = () => {
  return (
    <form className="max-w-xl mx-auto">
      <div className="space-x-0 space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse flex items-center flex-col sm:flex-row mb-4">
        <div className="flex">
          <label
            htmlFor="fiat-currency-input"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Your Email
          </label>
          <div className="relative w-full">
            <input
              type="number"
              id="fiat-currency-input"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-e-gray-50 border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="421 USD"
              required
            />
          </div>
          <button
            id="dropdown-fiat-currency-button"
            data-dropdown-toggle="dropdown-fiat-currency"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 pointer-events-none"
            type="button"
          >
            mWh
          </button>
        </div>
      </div>
      
    </form>
  );
};

export default Input;
