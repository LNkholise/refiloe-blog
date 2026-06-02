import ComingSoonBody from "@/components/coming-soon/info";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/coming-soon/hero";
import { Highlighter } from '@/components/ui/highlighter';
import LettersSection from "@/components/home/letters-to-mom-section";

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
      <LetterSection />
      <ComingSoonBody>
        <div className="space-y-8 flex flex-col items-center">
          <p className="max-w-2xl text-base md:text-lg leading-relaxed text-primary font-sans">
            I previously hosted <a href="https://www.youtube.com/playlist?list=PLfs2NHMZSv4oD5vwScw6Fjn8kqadds2G1&si=gja4l4PpjA1hSjus" target="_blank" rel="noopener noreferrer"><Highlighter action="highlight">
              Granules of Grief with Refiloe
            </Highlighter></a>, a now-archived podcast exploring stories of living with bereavement-related grief.
          </p>

          <div className="w-12 border-b border-border/60 my-2" />

          <div className="space-y-2">
            <h2 className="text-4xl md:text-6xl lg:text-[5rem] leading-[0.85] tracking-tighter text-primary">
              <span className="block font-serif italic font-light tracking-normal lowercase opacity-90">
                More initiatives
              </span>
              <span className="block font-black uppercase">
                Coming Soon
              </span>
            </h2>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground pt-6">
              Sign up for updates below
            </p>
          </div>
        </div>
      </ComingSoonBody>
      <Footer />
    </div>
  );
}
