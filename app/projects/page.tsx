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
        headingSans="Collaborations Connections"
        introText="In the meantime, sign up for updates below and follow me on social media to stay in the loop about new projects, collaborations, and more."
        bgImageUrl="/images/projects/hero.jpg"
      />
      <ComingSoonBody />
      <Footer />
    </div>
  );
}