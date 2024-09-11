import React from "react";
import Image from "next/image";

export default function Image_render({ image, text }) {
  return (
    <div className="relative w-full aspect-square max-w-[200px] sm:max-w-[250px] md:max-w-[300px] mx-auto">
      <Image
        src={image.url}
        alt={`Image ${image.id}`}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 hover:scale-105 rounded-lg"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-blue-600 text-sm sm:text-base md:text-xl font-bold shadow-md z-20 bg-slate-200 w-full text-center py-1">
          {text}
        </span>
      </div>
    </div>
  );
}