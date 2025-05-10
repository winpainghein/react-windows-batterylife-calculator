import React, { useState } from "react";
import batterySvg from "../assets/battery.svg";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UiCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [batteryPercentage, setBatteryPercentage] = useState(100);

  const calculateBatteryPercentage = (currentCapacity, designedCapacity) => {
    const current = parseFloat(currentCapacity);
    const designed = parseFloat(designedCapacity);

    // Input validation
    if (isNaN(current) || isNaN(designed)) {
      toast.error("Please enter valid numeric values.");
      return;
    }

    if (current < 0 || designed <= 0) {
      toast.error("Capacities must be positive numbers.");
      return;
    }

    if (current > designed) {
      toast.error("Current capacity cannot be greater than designed capacity.");
      setBatteryPercentage(0);
      return;
    }
    const percentage = (current / designed) * 100;
    setBatteryPercentage(percentage.toFixed(1));
  };

  const handleFormSubmit = (data) => {
    calculateBatteryPercentage(
      data.current_battery_capacity,
      data.designed_battery_capacity
    );
    reset();
  };

  const handleReset = () => {
    setBatteryPercentage(100);
  }

  return (
    <div className="bg-white/30 backdrop-blur-md border border-white/10 rounded-lg shadow-lg max-w-lg mx-auto p-10 flex md:flex-row flex-col gap-10">
      <div className="md:w-44 w-full relative">
        <img src={batterySvg} alt="battery" className="md:h-full h-20 md:w-auto w-full md:scale-[200%] scale-[200%] md:rotate-0 rotate-90" />
        <p className="text-3xl font-bold absolute md:top-28 top-5 md:left-0 -left-2.5 w-full text-center">
          {batteryPercentage}%
        </p>
      </div>
      <div className="w-full">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="grid gap-3 mb-6 grid-cols-1 ">
            <div>
              <div className="mb-2">
                <label
                  htmlFor="current_battery_capacity"
                  className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Current Battery Capacity
                </label>
              </div>
              <div className="flex">
                <div className="relative w-full">
                  <input
                    {...register("current_battery_capacity", {
                      required: true,
                      min: 1000,
                    })}
                    type="number"
                    id="current_battery_capacity"
                    className={`block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-e-gray-50 border-e-2 border border-gray-300 focus:ring-blue-500 dark:bg-gray-700 dark:border-e-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 ${
                      errors.current_battery_capacity &&
                      "focus:ring-red-500 focus:border-red-500"
                    }`}
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
              {errors.current_battery_capacity && (
                <p className="text-red-500 text-xs mt-1">
                  Minimum value is 1000 mWh
                </p>
              )}
            </div>
            <div>
              <div className="mb-2">
                <label
                  htmlFor="designed_battery_capacity"
                  className="mb-2 text-sm font-medium text-gray-900  dark:text-white"
                >
                  Designed Battery Capacity
                </label>
              </div>
              <div className="flex">
                <div className="relative w-full">
                  <input
                    {...register("designed_battery_capacity", {
                      required: true,
                      min: 1000,
                    })}
                    type="number"
                    id="designed_battery_capacity"
                    className={`block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-e-gray-50 border-e-2 border border-gray-300 focus:ring-blue-500  dark:bg-gray-700 dark:border-e-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 ${
                      errors.designed_battery_capacity &&
                      "focus:ring-red-500 focus:border-red-500"
                    }`}
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
              {errors.current_battery_capacity && (
                <p className="text-red-500 text-xs mt-1">
                  Minimum value is 1000 mWh
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-2 w-full">
            <button
              type="submit"
              className="flex-grow text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Calculate
            </button>
            <button
              onClick={handleReset}
              type="reset"
              className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-auto sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UiCard;
