import React from 'react'
import UiCard from './components/UiCard'
import { Toaster } from 'react-hot-toast'
import Input from './components/Input'

const App = () => {
  return (
    // <div className='min-h-screen bg-custom-img bg-cover bg-center bg-no-repeat flex justify-center items-center'>
    <div className='min-h-screen bg-gradient-to-r from-green-800 to-black flex justify-center items-center'>
      <UiCard/>
      <Toaster position='top-right'/>
    </div>
  )
}

export default App