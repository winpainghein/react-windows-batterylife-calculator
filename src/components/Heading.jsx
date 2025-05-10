const Heading = () => {
  return (
     <header className="bg-white/30 backdrop-blur-md border border-white/10 rounded-lg shadow-lg max-w-lg mx-auto mb-8 p-6 text-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
        WPH Battery Health Calculator
      </h1>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        Estimate your Windows laptop battery health using mWh data.
      </p>
    </header>
  )
}

export default Heading