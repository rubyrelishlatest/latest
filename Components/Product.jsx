import React, { useState, useEffect } from 'react';

const Hotel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    '/bg-h.jpg', '/bg-h1.jpg', '/bg-h2.jpg',
    '/bg-h3.jpg', '/bg-h4.jpg', '/bg-h5.jpg'
  ];

  const visibleCount = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const getVisibleImages = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(images[(activeIndex + i) % images.length]);
    }
    return result;
  };

  return (
    <div className="bg-black w-full min-h-screen flex items-center justify-center px-4 py-10 font-alegreya">
      <div className="w-full max-w-[1400px] flex justify-between gap-6 transition-all duration-700 ease-in-out">
        {getVisibleImages().map((image, index) => (
          <div
            key={index}
            className="flex-1 h-[80vh] rounded-xl bg-cover bg-center shadow-lg transition-transform transform hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hotel;
