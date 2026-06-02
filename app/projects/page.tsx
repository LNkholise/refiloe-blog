import ComingSoonBody from "@/components/coming-soon/info";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/coming-soon/hero";

export default function ComingSoon() {
  return (
    <div>
      <Hero 
        menu={<Navbar direction="down" />} 
        headingSerif="Curations"
        headingSans="Connections Collaborations"
        introText="Come along for the journey by signing up for updates below and following me on social media for new projects and collaborations."
        bgImageUrl="/images/curations.jpg"
      />
      <ComingSoonBody />
      <Footer />
    </div>
  );
}
