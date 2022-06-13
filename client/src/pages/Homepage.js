import React, {useState} from 'react';
import { BsSearch } from 'react-icons/bs';
import { ActivityList } from './activity/ActivityList';

export const HomePage = () => {
    const [input, setInput] = useState('');

    return (
        <>
        <div className='bg-cyan-50 p-6'>
            <h1 className='text-center text-7xl font-light font-sans text-gray-700'>CFX Activities</h1>
        </div>
        <div className='bg-green-200 text-center p-4 relative w-full'>
            <div className='relative inline-block w-full'>
                <input
                className='h-12 w-[60%] pl-4 pr-14 font-sans font-light text-gray-700/80 rounded-full
                            outline-transparent shadow-sm'
                type="text"
                placeholder='Search for an activity here...'
                id="actsearch"
                name="actsearch"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={(e) => {   
                    if(e.key === 'Enter') {
                        console.log(input);
                    }
                }} 
                />

                <span
                className='absolute right-[20%] bg-gray-100 
                            rounded-full p-4'
                    onClick={() => {alert(input)}}>
                    <span><BsSearch color='black' /></span>
                </span>
                
            </div>
        </div>
        
        <ActivityList />
        </>
    )
}