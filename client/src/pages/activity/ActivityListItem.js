import React from 'react';
import { Link } from 'react-router-dom';

// stats prop to be added later
export const ActivityListItem = ({ title, desc, link }) => {
    return (
        <>
        <div className='flex flex-col flex-wrap p-8 m-12 bg-slate-50 shadow-lg rounded-md'>
            <h1 className='text-center mb-4 font-medium text-3xl'>{title}</h1>
            <div className='flex flex-row justify-between'>
                <div className=''>
                    <img src="logo512.png" alt="ActivityPreview" className=''></img>
                </div>
                <div className='text-left border-l-2 ml-12 pl-12'>
                    {desc}
                    
                </div>
            </div>

        <div className='flex flex-row items-center py-4'>
            <div className='bg-slate-200 py-2 grow'>STATS</div>
            <Link to={link}>
                <button className='bg-green-300 py-2 px-8' >
                    RUN
                </button>
            </Link>
            
        </div>
        
        </div>
        </>
    )
}