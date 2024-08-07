import React from "react";
import { Image } from "@nextui-org/react";

export default function Image_render({ image, text }) {
  return (
    <div className="relative w-60 h-60">
      <Image
        isZoomed
        width="100%"
        height="100%"
        alt={`Image ${image.id}`}
        src={image.url}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-blue-800 text-xl font-bold shadow-md z-20 bg-slate-200 w-full text-center">
          {text}
        </span>
      </div>
    </div>
  );
}
