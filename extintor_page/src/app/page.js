import Hero from "@/containers/Hero";
import Hero_image_copy from '@/components/Hero_description'
import MainSection from "@/components/Main_section";
import Image_container from "@/containers/Images_home";
import Banner_contact from "@/components/Banner_contact";
export default function Home() {
  return (
    <main className="grid gap-10">
      <Hero/>
      <MainSection/>
      <Image_container/>
      <Banner_contact/>
    </main>
  );
}
