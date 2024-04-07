// IdCardForm.js
import React, { useEffect, useState } from 'react';

const IdCardForm = ({ onGenerate }) => {
  const [name, setName] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [location, setLocation] = useState('');
  const [optionVal, setOptionVal] = useState('college');
  const [uid, setUid] = useState('');
  const [college, setCollege] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || collegeName === '' || location === '' || optionVal === '' || uid === '' || college === '') {
      alert('Please enter valid details');
      return;
    }
    onGenerate({ name, collegeName, location, optionVal, uid });
  };

  useEffect(() => {
    dynamic(optionVal);
  }, [optionVal]);

  const dynamic = (optionVal) => {
    const optList = {
      college: "College",
      company: "Company",
      events: "Events"
    };
    setCollege(optList[optionVal]);
  };

  const getImageForOption = (optionVal) => {
    switch (optionVal) {
      case 'college':
        return 'https://img.freepik.com/free-photo/young-smiling-confident-woman-using-laptop-computer-looking-camera-isolated-white-background_231208-9497.jpg?size=626&ext=jpg&ga=GA1.1.1912593985.1712516124&semt=ais';
      case 'company':
        return 'https://img.freepik.com/free-photo/brunette-businesswoman-showing-her-tablet_23-2148142790.jpg?size=626&ext=jpg&ga=GA1.1.1912593985.1712516124&semt=ais';
      case 'events':
        return 'https://img.freepik.com/free-photo/event-manager-with-laptop-banquet-hall_23-2148085309.jpg?size=626&ext=jpg&ga=GA1.1.1912593985.1712516124&semt=ais';
      default:
        return '';
    }
  };
  

  return (
    <>
      <div className={`id-data border border-white bg-transparent rounded-lg min-h-[70%] w-5/12 shadow-xl overflow-hidden mt-2 backdrop-blur-[10px] opacity-100 ${optionVal}-section`} style={{ backgroundImage: `url(${getImageForOption(optionVal)})` }}>
        <form onSubmit={handleSubmit} className='h-full w-full flex flex-col justify-center items-center backdrop-blur-3xl p-6'>
          <select value={optionVal} onChange={(e) => setOptionVal(e.target.value)}>
            <option value="college">College</option>
            <option value="company">Company</option>
            <option value="events">Events</option>
          </select>
          <label className='label flex flex-col'>
            Name:
            <input className='m-2 p-2 text-[1rem]'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className='label flex flex-col'>
            {college && <span>{college} Name:</span>}
            <input className='m-2 pl-2'
              type="text"
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
            />
          </label>
          <label className='label flex flex-col m-2'>
            {college && <span>{college} ID:</span>}
            <input className='m-2 text-white pl-2'
              type="number"
              value={uid}
              onChange={(e) => setUid(e.target.value)}
            />
          </label>
          <label className='label flex flex-col m-2'>
            Location:
            <input className='m-2 pl-2'
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
          <button type="submit" id='btn' className='capitalize text-[1.2rem] bg-white  text-black my-4 p-3  rounded-md active:bg-zinc-500 active:text-zinc-200'>Generate ID Card</button>
        </form>
      </div>
    </>
  );
};

export default IdCardForm;
