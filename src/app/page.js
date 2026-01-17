import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import HomeAbout from "@/components/home/homeabout";
import HomeServices from "@/components/home/homeservice";
import StatsSection from "@/components/home/numbers";
import HomeProjects from "@/components/home/homeprojects";
import HowWeWork from "@/components/home/steps";
import WhyChooseUs from "@/components/home/why";
export default function Home() {
  return (
    <main className="min-h-screen">
       
       <Hero />
       <HomeAbout/>
       <StatsSection />
       <HomeServices/>
       <HomeProjects/>
       <HowWeWork/>
       <WhyChooseUs/>
       <Contact />
    </main>
    
  );
}


 