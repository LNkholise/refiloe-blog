import ComingSoonBody from "@/components/coming-soon/info";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/coming-soon/hero";
import LettersSection from "@/components/home/letters-to-mom-section";
import GranulesOfGrief from "@/components/home/granules-of-grief-section";

export default function ComingSoon() {
  return (
    <div>
      <Hero 
        menu={<Navbar direction="down" />} 
        headingSerif="On"
        headingSans="Grief"
        introText="When death visited and revisited me, making itself my unwanted business, it revealed a need many do not recognize until bereavement-related grief arrives. Since the age of 11, I have carried grief that I now know is cumulative. Realizing both the gaps in understanding of this kind of grief and the need for grievers to be supported in ways that suit them, I set out to explore some of the answers."
        bgImageUrl="https://images.pexels.com/photos/15583002/pexels-photo-15583002.jpeg"
      />
      <LettersSection />
      <GranulesOfGrief />
      <ComingSoonBody />
      <Footer />
    </div>
  );
}