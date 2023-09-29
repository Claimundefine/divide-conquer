import React from 'react';
import Monaco from '../../Components/Coding/Monaco';
import Chatbox from '../../Components/Coding/Chatbox';
import './CodingStyles.css';

const Coding: React.FC = () => {
  return (
    <div className='container'>
      <div className='leftColumn'>
      <div>
        <p>I hate my life</p>
        </div>
      </div>
      <div className='midColumn'>
        <Monaco/> 
      </div>
      <div className='rightColumn'>
        <Chatbox/>
      </div>
    </div>
  );
};

export default Coding;