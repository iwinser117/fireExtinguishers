import React from "react";
import Hero_image from "@/components/Hero_image";
import Hero_image_copy from '@/components/Hero_description'

const Hero = () => {
  return (
    <section className="w-11/12 mx-auto max-w-6xl grid gap-10 pt-10 md:pt-16">
      <Hero_image />
      <Hero_image_copy />
    </section>
  );
};

export default Hero;
