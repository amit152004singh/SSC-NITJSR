import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Event = ({ event }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${event.page}}`);
  };

  return (
    <div onClick={handleClick} className="relative group overflow-hidden cursor-pointer">
      <img src={event.image} alt={event.name} className="w-full h-64 object-cover transition duration-500 ease-in-out transform group-hover:scale-105" />
      <div className="absolute inset-0 bg-black bg-opacity-30 transition duration-500 ease-in-out group-hover:bg-opacity-50 flex items-center justify-center">
        <IoIosArrowForward className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out" />
      </div>
    </div>
  );
};

export default Event;