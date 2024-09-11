import React, { useState, useEffect } from 'react';
import {category} from '@/data/productData'
const CategorySlider = ({ categories }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === categories.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [categories]);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={category.imageSrc}
            alt={category.name}
            className="w-full h-full object-contain"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
            <p className="text-sm">{category.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function ProductCategories() {
  

  return (
    <div className="max-w-[900px] mx-auto bg-gray-100 rounded-lg p-6 shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center">Nuestras Categorías de Productos</h1>
      <CategorySlider categories={category} />
    </div>
  );
}