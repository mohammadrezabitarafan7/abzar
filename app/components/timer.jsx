'use client'
import React from 'react';
import { useTimer } from 'react-timer-hook';

const MyTimer = ({ expiryTimestamp }) => {
    const {

        seconds,
        minutes,
        hours,
        days,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


    return (

        <div className='flex flex-row justify-start gap-2'>

            <div className='w-[50px] rounded-lg  flex flex-col
             max-md:w-[35px] max-md:h-[30px] '>
                <div className='bg-white h-[50px] rounded-t-lg flex'>
                    <span className='font-irans text-main text-xl  my-auto justify-center mx-auto'>{seconds}</span>
                </div>

                <div className='bg-[#efefef] h-[46px] rounded-b-lg flex justify-center'>
                    <span className='font-irans text-sm text-main m-auto'>ثانیه</span>
                </div>
            </div>
            <div className='w-[50px] rounded-lg  flex flex-col
             max-md:w-[35px] max-md:h-[30px] '>
                <div className='bg-white h-[50px] rounded-t-lg flex'>
                    <span className='font-irans text-[#43454D] text-xl  my-auto justify-center mx-auto'>{minutes}</span>
                </div>

                <div className='bg-[#efefef] h-[46px] rounded-b-lg flex justify-center'>
                    <span className='font-irans text-sm text-[#43454D] m-auto'>دقیقه</span>
                </div>
            </div>
            <div className='w-[50px] rounded-lg  flex flex-col
             max-md:w-[35px] max-md:h-[30px] '>
                <div className='bg-white h-[50px] rounded-t-lg flex'>
                    <span className='font-irans text-[#43454D] text-xl  my-auto justify-center mx-auto'>{hours}</span>
                </div>

                <div className='bg-[#efefef] h-[46px] rounded-b-lg flex justify-center'>
                    <span className='font-irans text-sm text-[#43454D]text-main m-auto'>ساعت</span>
                </div>
            </div>
            <div className='w-[50px] rounded-lg  flex flex-col
             max-md:w-[35px] max-md:h-[30px] '>
                <div className='bg-white h-[50px] rounded-t-lg flex'>
                    <span className='font-irans text-[#43454D] text-xl  my-auto justify-center mx-auto'>{days}</span>
                </div>

                <div className='bg-[#efefef] h-[46px] rounded-b-lg flex justify-center'>
                    <span className='font-irans text-sm text-[#43454D] m-auto'>روز</span>
                </div>
            </div>



        </div>
    );
}
export default MyTimer