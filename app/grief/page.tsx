import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "@/keystatic.config";
import Hero from "@/components/grief/hero";
import About from "@/components/grief/about2";
import ServicesSection from "@/components/grief/services";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function Home() {
  const allPosts = await reader.collections.posts.all();

  return (
    <div>
      <Hero navbar={<Navbar direction="down" />} />
      <About />
      <ServicesSection />
      <Footer />
    </div>
  );
}