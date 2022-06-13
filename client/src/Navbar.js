import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';

export const Navbar = () => {
    
    
    return (
        <div className='flex w-full h-12 bg-slate-50 sticky flex-row justify-between'>
            <div className=' bg-blue-200 text-slate-50 grow'>
                Logo
            </div>
            <div className='w-2/3'>
            </div>
            <div
            className='bg-green-400 text-slate-50 grow flex justify-center
             items-center gap-x-4 cursor-pointer' onClick={() => console.log("login")}>
                <span className='text-xl font-sans font-light'>Login</span>
                <BsArrowRightCircle className='scale-[125%]' />
            </div>
        </div>
    );
}