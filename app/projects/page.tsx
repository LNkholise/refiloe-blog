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
        introText="Sign up for updates below and follow me on social media to stay in the loop about new projects and collaborations."
        bgImageUrl="/images/projects/hero.jpg"
      />
      <ComingSoonBody />
      <Footer />
    </div>
  );
}
