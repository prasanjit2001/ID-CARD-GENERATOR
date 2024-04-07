import React, { useState } from 'react';
import IdCardForm from './assets/components/IdCardData';
import IdCard from './assets/components/IdCard';
import './App.css';

const App = () => {
  const [isCardGenerated, setIsCardGenerated] = useState(false);
  const [cardDetails, setCardDetails] = useState({});

  const handleCardGeneration = (details) => {
    setIsCardGenerated(true);
    setCardDetails(details);
  };
  const handleReset = () => {
    // Reset form values
    setIsCardGenerated(false);
    setCardDetails({});
  };

  return (
    <div className="app flex justify-center items-center h-screen flex-col backdrop-blur-sm ">
      <h1 className='text-3xl capitalize text-white font-bold m-4'>ID Card Generator</h1>
      <button id="reset-button" onClick={handleReset}>Reset</button>
      {!isCardGenerated && <IdCardForm onGenerate={handleCardGeneration} defaultImg='https://images.shiksha.com/mediadata/images/1580987729phpyNys3D.jpeg' />}
      {isCardGenerated && <IdCard {...cardDetails}  />}
    </div>
  );
};

export default App;
