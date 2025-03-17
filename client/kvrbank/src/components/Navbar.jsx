import { useState } from 'react'
import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'


const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>

            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>KVR Bank</h1>
            <ul className='hidden md:flex'>
                <a href='' alt='' ><li className='p-4'>Home</li></a>
                <a href='' alt='' ><li className='p-4'>Login</li></a>
                <a href='' alt='' ><li className='p-4'>Signin</li></a>
                <a href='' alt='' ><li className='p-4'>About</li></a>
                <a href='' alt='' ><li className='p-4'>Contact</li></a>
            </ul>

            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <div className={nav ? 'fixed left-0 top-0 bg-[#191970] w-[60%] h-full border-r border-r-grey-900 ease-in-out duration-500' : 'fixed left-[-100%]' }>

                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>KVR Bank</h1>
                <ul className='uppercase p-4'>
                <a href='' alt='' ><li className='p-4 border-b border-gray-600'>Home</li></a>
                <a href='' alt='' ><li className='p-4 border-b border-gray-600'>Login</li></a>
                <a href='' alt='' ><li className='p-4 border-b border-gray-600'>Sign in</li></a>
                <a href='' alt='' ><li className='p-4 border-b border-gray-600'>About</li></a>
                <a href='' alt='' ><li className='p-4'>Contact</li></a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar