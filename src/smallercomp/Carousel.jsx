import React, { useState } from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SmallCarousel = ({ images, onImageClick }) => {
  return (
    <div className="flex justify-center space-x-10 ">
      {images.map((image, index) => (
        <div
          key={index}
          className="w-60 h-60 rounded-full overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-110"
          onClick={() => onImageClick(index)}
        >
          <img src={image} alt={`carousel-${index}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};

const BiggerCarousel = ({ images, selectedIndex, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <button className="absolute top-4 right-4 text-white" onClick={onClose}>
        Close
      </button>
      <ResponsiveCarousel selectedItem={selectedIndex} showThumbs={false} showStatus={false}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`carousel-${index}`} />
          </div>
        ))}
      </ResponsiveCarousel>
    </div>
  );
};

const Carousel = () => {
  const [isBiggerCarouselOpen, setIsBiggerCarouselOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const images = [
    'https://via.placeholder.com/200x200',
    'https://via.placeholder.com/200x201',
    'https://via.placeholder.com/200x202',
    'https://via.placeholder.com/200x200',
    'https://via.placeholder.com/200x201',
    'https://via.placeholder.com/200x202',
    'https://via.placeholder.com/200x200',
    'https://via.placeholder.com/200x201',
    'https://via.placeholder.com/200x202',
  ];

  const handleImageClick = (index) => {
    setSelectedIndex(index);
    setIsBiggerCarouselOpen(true);
  };

  const handleClose = () => {
    setIsBiggerCarouselOpen(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <SmallCarousel images={images} onImageClick={handleImageClick} />
      {isBiggerCarouselOpen && (
        <BiggerCarousel images={images} selectedIndex={selectedIndex} onClose={handleClose} />
      )}
    </div>
  );
};

export default Carousel;
