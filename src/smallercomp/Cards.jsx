import React from 'react';

const Cards = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
      <img className="w-full h-96 object-cover" src="https://via.placeholder.com/100x200" alt="Card image cap" />
      <div className="px-6 py-4">
        <h5 className="font-bold text-xl mb-2">Card title</h5>
        <p className="text-gray-700 text-base">
          This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
        </p>
        <p className="text-gray-500 text-sm mt-4"><small>Last updated 3 mins ago</small></p>
      </div>
    </div>
  );
};

export default Cards;
