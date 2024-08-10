import Hero from "@/containers/Hero";
import Hero_image_copy from '@/components/Hero_description'
import MainSection from "@/components/Main_section";
import Image_container from "@/containers/Images_home";
import Banner_contact from "@/components/Banner_contact";
import Services_location from "@/components/Services_locations";
import Footer from "@/containers/Footer";
export default function Home() {
  return (
    <main className="grid gap-10">
      <Hero/>
      <MainSection/>
      <Image_container/>
      <Banner_contact/>
      <Services_location/>
      <Footer/>
    </main>
  );
}
