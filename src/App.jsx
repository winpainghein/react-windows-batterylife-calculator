import UiCard from './components/UiCard'
import { Toaster } from 'react-hot-toast'
import Note from './components/Note'
// import Heading from './components/Heading'
import HeadingStyle2 from './components/HeadingStyle2'

const App = () => {
  return (
    // <div className='min-h-screen bg-custom-img bg-cover bg-center bg-no-repeat flex justify-center items-center'>
    <div className='min-h-screen bg-gradient-to-r from-green-800 to-black flex flex-col justify-center items-center'>
      <HeadingStyle2/>
      <UiCard/>
      <Note/>
      <Toaster position='top-right'/>
    </div>
  )
}

export default App