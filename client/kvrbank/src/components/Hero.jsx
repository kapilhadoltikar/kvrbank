import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>SAFEGUARD YOUR WEALTH WITH KVR BANKING</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Grow with KVR Bank
        </h1>
        <div className='flex justify-center items-center md:text-5xl sm:text-4xl text-xl font-bold'>
          <p className='md:text-5xl sm:text-4xl test-xl font-bold py-4'>
            Fast, flexible financing for
          </p>

          {/* typewriter effect to the text */}
          <div className='pl-2 md:text-5xl sm:text-4xl test-xl md:pl-4 font-bold'>
            <Typewriter
              words={['Business', 'Home', 'Car', 'Personal']}
              loop={10}
              cursor
              cursorStyle=''
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </div>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>
        Protect, Manage and Grow your wealth with our bespoke financial solutions.
        </p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
          Get Started
        </button>
      </div>
    </div >
  )
}

export default Hero
