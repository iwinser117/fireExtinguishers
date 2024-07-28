import React from "react";
import Hero_image from "@/components/Hero_image";
import Hero_image_copy from '@/components/Hero_description'

const Hero = () => {
  return (
    <div className="grid gap-4">
      <Hero_image />
      <Hero_image_copy/>
    </div>
  );
};

export default Hero;
