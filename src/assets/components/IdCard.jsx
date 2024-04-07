// IdCard.js
import React from 'react';

const IdCard = ({ name, optionVal, collegeName, location, uid }) => {
  return (
    <>
      <div className='id-card border bg-slate-50 bg-opacity-65 bg-transparent border-b-emerald-50 rounded-lg min-h-[60%] w-5/12 shadow-xl overflow-hidden flex flex-col justify-center items-center text-2xl capitalize backdrop-blur-[10px] opacity-100'>
        
        <div className='box h-40 w-40 border border-red-300 rounded-xl mb-4'></div>
        <h3 className='font-semibold'>Department: {optionVal}</h3>
        <h1 className='flex gap-1 font-semibold'>Name: {name}</h1>
        <h2 className='font-semibold'>College Name: {collegeName}</h2>
        <h2 className='font-semibold'>College UID: {uid}</h2>
        {!location ? <p className='text-2xl text-red-600'>* please enter location</p> : <p className='text-orange-800'>Location: {location}</p>}
      </div>
    </>
  );
}

export default IdCard;
