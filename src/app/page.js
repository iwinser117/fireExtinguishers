import Hero from "@/containers/Hero";
import MainSection from "@/components/Main_section";
import Image_container from "@/containers/Images_home";
import Banner_contact from "@/components/Banner_contact";
import Services_location from "@/components/Services_locations";
import Footer from "@/containers/Footer";
export default function Home() {
  return (
    <main className="grid gap-16 bg-gradient-to-b from-slate-50 via-white to-slate-100 pb-16">
      <Hero />
      <MainSection />
      <Image_container />
      <Banner_contact />
      <Services_location />
      <Footer />
    </main>
  );
}
