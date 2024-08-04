import Hero from "@/containers/Hero";
import Hero_image_copy from '@/components/Hero_description'
import MainSection from "@/components/Main_section";
export default function Home() {
  return (
    <main className="grid gap-10">
      <Hero/>
      <MainSection/>
    </main>
  );
}
