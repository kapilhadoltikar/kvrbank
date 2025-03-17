import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'


const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>


                {/* Card One */}

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img
                        className='w-20 mx-auto mt-[-3rem] bg-white'
                        src={Single}
                        alt=''
                    />
                    <h2 className='text-2xl font-bold text-center py-8'>
                        Savings Account
                    </h2>
                    <p className='text-center text-4xl font-bold'>
                        Free
                    </p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Up to 3.5% interest</p>
                        <p className='py-2 border-b mx-8'>Free transactions 5/mo</p>
                        <p className='py-2 border-b mx-8'>Minimum balance 1000/-</p>
                    </div>
                    <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3'>
                        Get Started
                    </button>
                </div>



                {/* Card Two */}

                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img
                        className='w-20 mx-auto mt-[-3rem] bg-transparent'
                        src={Double}
                        alt=''
                    />
                    <h2 className='text-2xl font-bold text-center py-8'>
                        Current Account
                    </h2>
                    <p className='text-center text-4xl font-bold'>
                        Free
                    </p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Up to 0% interest</p>
                        <p className='py-2 border-b mx-8'>Free transactions Unlimited</p>
                        <p className='py-2 border-b mx-8'>Minimum balance 15000/-</p>
                    </div>
                    <button className='text-[#00df9a] bg-black rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3'>
                        Get Started
                    </button>
                </div>



                {/* Card Three */}

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img
                        className='w-20 mx-auto mt-[-3rem] bg-white'
                        src={Triple}
                        alt=''
                    />
                    <h2 className='text-2xl font-bold text-center py-8'>
                        Fixed Deposit Account
                    </h2>
                    <p className='text-center text-4xl font-bold'>
                        Free
                    </p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Up to 7% interest</p>
                        <p className='py-2 border-b mx-8'>Free transactions on maturity</p>
                        <p className='py-2 border-b mx-8'>Minimum balance 10000/-</p>
                    </div>
                    <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3'>
                        Get Started
                    </button>
                </div>


            </div>
        </div>
    )
}

export default Cards